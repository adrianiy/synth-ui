import { CustomError } from '../utils/error.utils';
import { groupData } from '../utils/group.utils';
import { crossJoin, leftOuterJoin } from '../utils/join.utils';
import { fn, getFrom, getParamValue, is, parseParam, parseParams, storeIn } from '../utils/utils';
import { logMiddleware } from './log';

/** sort middleware
 *
 * @param data { string } state key wehre data is stored
 * @param function { any } string with sort function like (a, b) => a - b or key name
 */
export const sort = (args: { data: string; by: string; store: string; order: string; function: any }, params: any) => {
    return async (ctx: any, next: any) => {
        try {
            ctx.state.lastStep = 'sort';
            const context = { ...ctx.state, ...params };
            const {
                data = getFrom(context, 'data'),
                store: storeRaw,
                by,
                order = 'desc',
                function: functionRaw,
            } = parseParams(context, args);

            if (!functionRaw && !by) {
                throw new Error('sort function parameter or key are mandatory');
            }

            const sortFns = {
                desc: (a: any, b: any) => b[by] - a[by],
                asc: (a: any, b: any) => a[by] - b[by],
            };

            const sortFn = by ? sortFns[order] : functionRaw;

            const rawData = getParamValue(context, data, []);
            const store = getParamValue(context, storeRaw, args.data || 'data');

            storeIn(ctx.state, store, rawData.sort(sortFn));

            await next();
        } catch (error) {
            await logMiddleware({ error, level: 'error' })(ctx, null);
            throw error;
        }
    };
};

/** Filter middleware
 *
 * @param data { string } state key where data is stored
 * @param store { string } state key where data will be stored
 * @param function { string } filter function or key name
 * @param required { string[] } keys that should be informed
 * @params keys { { preserve, remove } } if set we'll parse each row to filter keys by it's value
 */
export const filter = (
    args: {
        data: any;
        store: string;
        function: string;
        required: string[];
        keys: { preserve: string[]; remove: string[] };
    },
    params: any,
) => {
    return async (ctx: any, next: any) => {
        try {
            ctx.state.lastStep = 'filter';
            const context = { ...ctx.state, ...params };
            const {
                data = getFrom(context, 'data'),
                store: storeRaw,
                function: functionRaw,
                required,
                keys,
            } = parseParams(context, args);

            if (!functionRaw && !required && !keys) {
                throw new Error('filter parameters are mandatory');
            }

            const rawData = getParamValue(context, data, []);
            const store = getParamValue(context, storeRaw, args.data || 'data');
            const filterFn = functionRaw || ((a: any) => (required ? required.every((key: string) => a[key]) : true));

            let filteredData = rawData.filter(filterFn);

            if (keys) {
                filteredData = filteredData.map((row: any) => {
                    Object.keys(row)
                        .filter(key => (keys.preserve && !keys.preserve.includes(key)) || keys.remove?.includes(key))
                        .forEach(key => delete row[key]);

                    return row;
                });
            }

            storeIn(ctx.state, store, filteredData);

            await next();
        } catch (error) {
            await logMiddleware({ error, level: 'error' })(ctx, null);
            throw error;
        }
    };
};

/** Transform field middleware
 *
 * @param data { string } state key where data is stored
 * @param store { string } state key where data will be stored
 * @param operations { { add, match, exclude, preserve, key, value  }[] } transform operations
 * @param keys: { string } transform keys
 */
export const transform = (
    args: {
        data: string;
        store: string;
        operations: {
            add?: string;
            match?: string;
            exclude?: string;
            preserve?: boolean;
            delete?: any;
            key?: string;
            value?: string;
        }[];
        keys: { [key: string]: string };
    },
    params: any,
) => {
    const getTransformKey = (ctx: any, key: string) => {
        try {
            const keyFn = key ? parseParam(ctx, key) : (a: any) => a;

            return key ? fn(parseParam(ctx, key)) : keyFn;
        } catch (_) {
            return () => key;
        }
    };
    const getTransformValue = (ctx: any, value: string) =>
        value ? fn(parseParam(ctx, value)) : (_: any, row: any, key: string) => row[key];

    return async (ctx: any, next: any) => {
        try {
            ctx.state.lastStep = 'transform';
            const context = { ...ctx.state, ...params };
            const { data = getFrom(context, 'data'), store: storeRaw, operations, keys } = parseParams(context, args);

            const operationTransforms = operations?.map((transformation: any) => ({
                ...transformation,
                keyFn: getTransformKey(context, transformation.key),
                valueFn: getTransformValue(context, transformation.value),
            }));
            const keyTransforms = Object.keys(keys || {})?.map((key: string) => ({
                match: key,
                keyFn: () => keys[key],
                valueFn: getTransformValue(null, null),
            }));
            const transform = [].concat([ ...(keyTransforms || []), ...(operationTransforms || []) ]);
            const rawData = getParamValue(context, data, []);
            const store = getParamValue(context, storeRaw, args.data || 'data');
            const transfomedData = rawData.map((row: any) => {
                transform.forEach(({ match, add, exclude, delete: del, preserve, keyFn, valueFn }) => {
                    if (del) {
                        if (is(del, 'string')) {
                            delete row[del];
                        } else {
                            del.forEach((delKey: string) => delete row[delKey]);
                        }
                    }
                    if (add) {
                        row[add] = valueFn(row, ctx);
                    } else {
                        Object.keys(row)
                            .filter(key => key.match(match) && !key.match(exclude || null))
                            .forEach(key => {
                                const newKey = keyFn(key, row, ctx);
                                const newValue = valueFn(row[key], row, key, ctx);

                                row[newKey] = newValue;

                                if (!preserve && newKey !== key) {
                                    delete row[key];
                                }
                            });
                    }
                });

                return row;
            });

            storeIn(ctx.state, store, transfomedData);

            await next();
        } catch (error) {
            await logMiddleware({ error, level: 'error' })(ctx, null);
            throw error;
        }
    };
};

/**
 * Group middleware
 *
 * @param data { string } name of key where data is stored
 * @param store { string } name of key where data will be stored
 * @param by { string[] } array of keys used to compose groups
 * @param children { string | boolean } save grouped object as children, if true we'll use 'children' key
 * @param total { boolean } if true add first row as total aggregation
 */
export const groupBy = (
    args: { data: string; store: string; by: string[]; children: any; total: boolean },
    params: any,
) => {
    return async (ctx: any, next: any) => {
        try {
            ctx.state.lastStep = 'group';
            const context = { ...ctx.state, ...params };
            const { data = getFrom(context, 'data'), store: storeRaw, by, children, total } = parseParams(
                context,
                args,
            );

            const on = getParamValue(context, by, ctx.state.joinKeys);
            const childrenName = getParamValue(context, children === true ? 'children' : children, null);
            const rawData = getParamValue(context, data, []);
            const store = getParamValue(context, storeRaw, args.data || 'data');
            const groups = groupData(rawData, total ? [] : on, childrenName);

            const childrenKey = on?.length > 1 ? on?.slice(1) : on;

            if (total) {
                const total = {
                    ...groups?.[0],
                    ...(on ? { [on[0]]: 'total' } : {}),
                    _isTotal: true,
                    name: 'Total',
                    [childrenName]: groupData(groups[0]?.[childrenName], childrenKey || []),
                };
                storeIn(ctx.state, store, [ total, ...data ]);
            } else {
                storeIn(ctx.state, store, groups);
            }

            await next();
        } catch (error) {
            await logMiddleware({ error, level: 'error' })(ctx, null);
            throw error;
        }
    };
};

/**
 * Join middleware
 *
 * @param strategy { string } type of join 'cross' | 'left'
 * @param data { string } name of key where data is stored
 * @param with { string } name of key where joinabla data is stored
 * @param store { string } name of key where joined data will be stored
 * @param on { string[] } array of keys to use in join
 */
export const join = (
    args: {
        strategy: string;
        data: string;
        with: string;
        store: string;
        by: string[];
    },
    params: any,
) => {
    return async (ctx: any, next: any) => {
        try {
            ctx.state.lastStep = 'join';
            const context = { ...ctx.state, ...params };
            const {
                strategy = 'left',
                data = getFrom(context, 'data'),
                with: _with,
                store: storeRaw,
                by,
            } = parseParams(context, args);

            const on = getParamValue(context, by, ctx.state.joinKeys);
            const rawData = getParamValue(context, data, []);
            const store = getParamValue(context, storeRaw, args.data || 'data');
            const rawWith = getParamValue(context, _with, []);

            switch (strategy) {
                case 'left':
                    storeIn(ctx.state, store, leftOuterJoin(on, rawData, rawWith));
                    break;
                default:
                    storeIn(ctx.state, store, crossJoin(on, rawData, rawWith));
                    break;
            }

            await next();
        } catch (error) {
            await logMiddleware({ error, level: 'error' })(ctx, null);
            throw error;
        }
    };
};
