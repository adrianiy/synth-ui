import { CustomError } from '../utils/error.utils';
import { groupData } from '../utils/group.utils';
import { crossJoin, leftOuterJoin } from '../utils/join.utils';
import { log } from '../utils/log.utils';
import { getFrom, storeIn } from '../utils/utils';
import { logMiddleware } from './log';

/** sort middleware
 *
 * @param data { string } state key wehre data is stored
 * @param function { any } string with sort function like (a, b) => a - b or key name
 */
export const sort = ({ data = 'data', function: functionRaw }: { data: string; function: any }, params: any) => {
    if (!functionRaw) {
        throw new Error('sort function parameter is mandatory');
    }

    const getSortFn = (ctx: any) => getFrom({ ...params, ...ctx.state }, functionRaw) || eval(functionRaw);

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
        changes: transformRaw,
    }: {
        data: string;
        store: string;
        changes: {
            match?: string;
            exclude?: string;
            preserve?: boolean;
            key?: string;
            value?: string;
        }[];
    },
    params: any,
) => {
    const getTransformKey = (ctx: any, key: string) =>
        key ? eval(getFrom({ ...params, ...ctx.state }, key) || key) : (a: any) => a;
    const getTransformValue = (ctx: any, value: string) =>
        value ? eval(getFrom({ ...params, ...ctx.state }, value) || value) : (key: string, row: any) => row[key];

    return async (ctx: any, next: any) => {
        try {
            ctx.state.lastStep = 'transform';
            const transform = transformRaw.map(transformation => ({
                ...transformation,
                keyFn: getTransformKey(ctx, transformation.key),
                valueFn: getTransformValue(ctx, transformation.value),
            }));
            const rawData = getFrom(ctx.state, data);
            const transfomedData = rawData.map((row: any) => {
                Object.keys(row).forEach(key => {
                    transform.forEach(({ match, exclude, preserve, keyFn, valueFn }) => {
                        if (key.match(match) && !key.match(exclude)) {
                            row[keyFn(key, row, ctx)] = valueFn(key, row, ctx);

                            if (!preserve) {
                                delete row[key];
                            }
                        }
                    });
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
