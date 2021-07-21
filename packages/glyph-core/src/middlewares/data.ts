import { groupData } from '../utils/group.utils';
import { crossJoin, leftOuterJoin } from '../utils/join.utils';
import { constant, is } from '../utils/utils';

/** sort middleware
 *
 * @param functionName { string } name of function stored in params or state
 * @param function { any } string with sort function like (a, b) => a - b
 */
export const sort = (
    { data = 'data', functionName, function: functionRaw }: { data: string; functionName: string; function: any },
    params: any,
) => {
    if (!functionName && !functionRaw) {
        throw new Error('sort function parameter is mandatory');
    }

    const getSortFn = (ctx: any) =>
        functionName ? params[functionName] || ctx.state[functionName] : eval(functionRaw);

    return async (ctx: any, next: any) => {
        ctx.state[data] = ctx.state[data].sort(getSortFn(ctx));

        await next();
    };
};

/** Add sufix middleware
 * @param data { string } state key where data is stored
 * @param sufix { string } sufix added in each field
 * @param joinKeys { string[] } fields to ignore in process
 */
export const addSuffix = ({
    data = 'data',
    suffix,
    joinKeys: joinKeysRaw,
}: {
    data: string;
    suffix: string;
    joinKeys: string[];
}) => {
    return async (ctx: any, next: any) => {
        const joinKeys = joinKeysRaw || ctx.state.joinKeys;

        ctx.state[data].forEach((row: any) => {
            Object.keys(row)
                .filter((key: string) => !joinKeys.includes(key))
                .forEach((key: string) => {
                    row[`${key}_${suffix}`] = row[key];
                    delete row[key];
                });
        });

        await next();
    };
};

/** Transform field middleware
 *
 * @param data { string } state key where data is stored
 * @param store { string } state key where data will be stored
 * @param field { string } field key to transform
 * @param newField { string } new field name
 * @param preserve { boolean } if true old field will be preserved
 * @param transform { any } string with function or key of function in params or state, else identity function is used
 */
export const transform = (
    {
        data = 'data',
        store,
        field,
        newField,
        preserve = true,
        transform,
    }: {
        data: string;
        store: string;
        field: string;
        newField: string;
        preserve: boolean;
        transform: any;
    },
    params: any,
) => {
    const getTransform = (ctx: any) =>
        transform ? params[transform] || ctx.state[transform] || eval(transform) : a => a;
    return async (ctx: any, next: any) => {
        const transformFn = getTransform(ctx);

        ctx.state[store || data] = ctx.state[data].map((row: any) => {
            row[newField] = transformFn(row[field]);

            if (!preserve) {
                delete row[field];
            }

            return row;
        });

        await next();
    };
};

/**
 * Group middleware
 *
 * @param data { string } name of key where data is stored
 * @param store { string } name of key where data will be stored
 * @param joinKeys { string[] } array of keys used to compose groups
 * @param asTotal { boolean } if true add first row as total aggregation
 */
export const groupBy = ({
    data = 'data',
    store,
    joinKeys,
    asTotal,
}: {
    data: string;
    store: string;
    joinKeys: string[];
    asTotal: boolean;
}) => {
    return async (ctx: any, next: any) => {
        const on = joinKeys || ctx.state.joinKeys;
        const groups = groupData(ctx.state[data], asTotal ? [] : on);

        if (asTotal) {
            const total = {
                ...groups[0],
                _isTotal: true,
                [on[0]]: 'total',
                name: 'Total',
                children: groupData(groups[0].children, on.slice(1)),
            };
            ctx.state[store || data] = [ total, ...ctx.state[data] ];
        } else {
            ctx.state[store || data] = groups;
        }

        await next();
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
        const on = joinKeys || ctx.state.joinKeys;
        store = store || data;

        switch (strategy) {
            case 'left':
                ctx.state[store] = leftOuterJoin(on, ctx.state[data], ctx.state[_with]);
                break;
            default:
                ctx.state[store] = crossJoin(on, ctx.state[data], ctx.state[_with]);
                break;
        }

        await next();
    };
};

/**
 * Calculates growth field
 *
 * @param data { string } state key where data is stored
 * @param fields { string[] } fields to be used in growth calculation
 * @param joinKeys { string[] } same as fields
 * @param currentSuffix { string } suffix of current data fields
 * @param compSuffix {string} suffix of comparable data
 * @param growthSuffix { string } suffix that will be added to calculated field
 */
export const setGrowths = ({
    data = 'data',
    fields,
    joinKeys,
    excludeKeys = [],
    currentSuffix = '',
    compSuffix = '_comp',
    growthSuffix = '',
}: {
    data: string;
    fields: string[];
    joinKeys: string[];
    excludeKeys: string[];
    currentSuffix: string;
    compSuffix: string;
    growthSuffix: string;
}) => {
    return async (ctx: any, next: any) => {
        const excluded = [ ...(joinKeys || ctx.state.joinKeys || []), ...excludeKeys ];

        ctx.state[data].forEach((row: any) => {
            Object.keys(row)
                .filter(
                    key => !excluded.includes(key) && (!fields || fields.includes(key)) && row[`${key}${compSuffix}`],
                )
                .forEach(
                    key =>
                        (row[`growth_${key}${growthSuffix}`] =
                            row[`${key}${currentSuffix}`] / row[`${key}${compSuffix}`] - 1),
                );
        });
        await next();
    };
};

/**
 * Sets matching entity name on each row
 *
 * @param data { string } name of key where data is stored
 * @param store { string } name of key where joined data will be stored
 * @param entity { string } name of entity in state
 * @param matchers { string[] } extra array of matching entity keys
 */
export const setEntityName = ({
    data = 'data',
    store,
    entity,
    matchers = [],
}: {
    data: string;
    store: string;
    entity: any;
    matchers: any;
}) => {
    if (!entity) {
        throw new Error('entityKey parameter is mandatory');
    }

    const getEntity = is(entity, 'function') ? entity : constant(entity);
    const getMatchers = is(matchers, 'function') ? matchers : constant([].concat(matchers));

    return async (ctx: any, next: any) => {
        const entityName = getEntity(ctx);
        const matchers = getMatchers(ctx) || [];

        ctx.state[data].forEach((row: any) => {
            const entity = ctx.state[entityName].find(
                (e: any) =>
                    `${e[`cod_${entityName}`]}` === `${row[`cod_${entityName}`]}` &&
                    matchers.every((matcher: any) => e[matcher] === row[matcher]),
            );

            if (entity) {
                row['name'] = entity['name'] ? entity['name'] : entity['description'];
            } else if (entityName === 'product_line') {
                row['name'] = 'OTROS';
            }
        });

        ctx.state[store || data] = ctx.state[data].filter((row: any) => row['name']);

        await next();
    };
};
