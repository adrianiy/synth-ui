import { CustomError } from '../utils/error.utils';
import { groupData } from '../utils/group.utils';
import { crossJoin, leftOuterJoin } from '../utils/join.utils';
import { log } from '../utils/log.utils';
import { getFrom, is, storeIn } from '../utils/utils';
import { logMiddleware } from './log';

/** sort middleware
 *
 * @param data { string } state key wehre data is stored
 * @param function { any } string with sort function like (a, b) => a - b or key name
 */
export const sort = (
    {
        data = 'data',
        by,
        order = 'desc',
        function: functionRaw,
    }: { data: string; by: string; order: string; function: any },
    params: any,
) => {
    if (!functionRaw && !by) {
        throw new Error('sort function parameter or key are mandatory');
    }

    const sortFns = {
        desc: (a, b) => b[by] - a[by],
        asc: (a, b) => a[by] - b[by],
    };

    const getSortFn = (ctx: any) =>
        by ? sortFns[order] : getFrom({ ...params, ...ctx.state }, functionRaw) || eval(functionRaw);

    return async (ctx: any, next: any) => {
        try {
            ctx.state.lastStep = 'sort';

            const rawData = getFrom(ctx.state, data);

            storeIn(ctx.state, data, rawData.sort(getSortFn(ctx)));

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
    {
        data = 'data',
        store,
        function: functionRaw,
        required,
        keys,
    }: {
        data: string;
        store: string;
        function: string;
        required: string[];
        keys: { preserve: string[]; remove: string[] };
    },
    params: any,
) => {
    if (!functionRaw && !required && !keys) {
        throw new Error('filter parameters are mandatory');
    }

    const getFilterFn = (ctx: any) =>
        functionRaw
            ? eval(getFrom({ ...params, ...ctx.state }, functionRaw) || functionRaw)
            : (a: any) => (required ? required.every(key => a[key]) : true);

    return async (ctx: any, next: any) => {
        try {
            ctx.state.lastStep = 'filter';

            const filterFn = getFilterFn(ctx);
            const rawData = getFrom(ctx.state, data);
            let filteredData = rawData.filter(filterFn);

            if (keys) {
                filteredData = filteredData.map((row: any) => {
                    Object.keys(row)
                        .filter(key => !keys.preserve?.includes(key) || keys.remove?.includes(key))
                        .forEach(key => delete row[key]);

                    return row;
                });
            }

            storeIn(ctx.state, store || data, filteredData);

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
 * @param match { string } regex to match fields
 * @param exclude { string } regex to exclude fields
 * @param preserve { boolean } if true old field will be preserved
 * @param transform { key: string, value: string } string with function or key of function in params or state, else identity function is used
 */
export const transform = (
    {
        data = 'data',
        store,
        operations,
    }: {
        data: string;
        store: string;
        operations:
            | {
                  add?: string;
                  match?: string;
                  exclude?: string;
                  preserve?: boolean;
                  key?: string;
                  value?: string;
              }[]
            | {
                  [key: string]: string;
              };
    },
    params: any,
) => {
    const getTransformKey = (ctx: any, key: string) => {
        try {
            return key ? eval(getFrom({ ...params, ...ctx.state }, key) || key) : (a: any) => a;
        } catch (_) {
            return () => key;
        }
    };
    const getTransformValue = (ctx: any, value: string) =>
        value
            ? eval(getFrom({ ...params, ...ctx.state }, value) || value)
            : (value: any, row: any, key: string) => row[key];

    return async (ctx: any, next: any) => {
        try {
            ctx.state.lastStep = 'transform';
            const transform = is(operations, Array)
                ? (operations as any[]).map(transformation => ({
                    ...transformation,
                    keyFn: getTransformKey(ctx, transformation.key),
                    valueFn: getTransformValue(ctx, transformation.value),
                }))
                : Object.keys(operations).map((key: string) => ({
                    match: key,
                    keyFn: () => operations[key],
                    valueFn: getTransformValue(null, null),
                }));
            const rawData = getFrom(ctx.state, data);
            const transfomedData = rawData.map((row: any) => {
                transform.forEach(({ match, add, exclude, preserve, keyFn, valueFn }) => {
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

            storeIn(ctx.state, store || data, transfomedData);

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
 * @param joinKeys { string[] } array of keys used to compose groups
 * @param children { string | boolean } save grouped object as children, if true we'll use 'children' key
 * @param total { boolean } if true add first row as total aggregation
 */
export const groupBy = ({
    data = 'data',
    store,
    joinKeys,
    children,
    total,
}: {
    data: string;
    store: string;
    joinKeys: string[];
    children: any;
    total: boolean;
}) => {
    return async (ctx: any, next: any) => {
        try {
            ctx.state.lastStep = 'group';

            const on = joinKeys || ctx.state.joinKeys;
            const rawData = getFrom(ctx.state, data);
            const groups = groupData(rawData, total ? [] : on, children === true ? 'children' : children);

            if (total) {
                const total = {
                    ...groups[0],
                    _isTotal: true,
                    [on[0]]: 'total',
                    name: 'Total',
                    children: groupData(groups[0].children, on.slice(1)),
                };
                storeIn(ctx.state, store || data, [ total, ...ctx.state[data] ]);
            } else {
                storeIn(ctx.state, store || data, groups);
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
export const join = ({
    strategy = 'cross',
    data = 'data',
    with: _with,
    store,
    joinKeys,
}: {
    strategy: string;
    data: string;
    with: string;
    store: string;
    joinKeys: string[];
}) => {
    return async (ctx: any, next: any) => {
        try {
            ctx.state.lastStep = 'join';

            const on = joinKeys || ctx.state.joinKeys;
            const rawData = getFrom(ctx.state, data);
            const rawWith = getFrom(ctx.state, _with);

            switch (strategy) {
                case 'left':
                    storeIn(ctx.state, store || data, leftOuterJoin(on, rawData, rawWith));
                    break;
                default:
                    storeIn(ctx.state, store || data, crossJoin(on, rawData, rawWith));
                    break;
            }

            await next();
        } catch (error) {
            await logMiddleware({ error, level: 'error' })(ctx, null);
            throw error;
        }
    };
};
