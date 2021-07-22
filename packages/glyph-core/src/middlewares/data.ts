import { groupData } from '../utils/group.utils';
import { crossJoin, leftOuterJoin } from '../utils/join.utils';

/** sort middleware
 *
 * @param data { string } state key wehre data is stored
 * @param function { any } string with sort function like (a, b) => a - b or key name
 */
export const sort = ({ data = 'data', function: functionRaw }: { data: string; function: any }, params: any) => {
    if (!functionRaw) {
        throw new Error('sort function parameter is mandatory');
    }

    const getSortFn = (ctx: any) => (functionRaw ? params[functionRaw] || ctx.state[functionRaw] : eval(functionRaw));

    return async (ctx: any, next: any) => {
        ctx.state.lastStep = 'sort';
        ctx.state[data] = ctx.state[data].sort(getSortFn(ctx));

        await next();
    };
};

/** Filter middleware
 *
 * @param data { string } state key where data is stored
 * @param store { string } state key where data will be stored
 * @param function { string } filter function or key name
 * @param required { string[] } keys that should be informed
 */
export const filter = (
    {
        data = 'data',
        store,
        function: functionRaw,
        required,
    }: {
        data: string;
        store: string;
        function: string;
        required: string[];
    },
    params: any,
) => {
    if (!functionRaw && !required) {
        throw new Error('filter paramters are mandatory');
    }

    const getFilterFn = (ctx: any) =>
        functionRaw
            ? params[functionRaw] || ctx.state[functionRaw] || eval(functionRaw)
            : (a: any) => required.every(key => a[key]);

    return async (ctx: any, next: any) => {
        ctx.state.lastStep = 'filter';

        const filterFn = getFilterFn(ctx);

        ctx.state[store || data] = ctx.state[data].filter(filterFn);

        await next();
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
        match,
        exclude = null,
        preserve,
        transform = {},
    }: {
        data: string;
        store: string;
        match: string;
        exclude: string;
        preserve: boolean;
        transform: { key?: string; value?: string };
    },
    params: any,
) => {
    const { key, value } = transform;

    const getTransformKey = (ctx: any) => (key ? params[key] || ctx.state[key] || eval(key) : (a: any) => a);
    const getTransformValue = (ctx: any) =>
        value ? params[value] || ctx.state[value] || eval(value) : (key: string, row: any) => row[key];

    return async (ctx: any, next: any) => {
        ctx.state.lastStep = 'transform';

        const keyFn = getTransformKey(ctx);
        const valueFn = getTransformValue(ctx);

        ctx.state[store || data] = ctx.state[data].map((row: any) => {
            Object.keys(row)
                .filter(key => key.match(match) && !key.match(exclude))
                .forEach(key => {
                    row[keyFn(key, row, ctx)] = valueFn(key, row, ctx);

                    if (!preserve) {
                        delete row[key];
                    }
                });

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
 * @param total { boolean } if true add first row as total aggregation
 */
export const groupBy = ({
    data = 'data',
    store,
    joinKeys,
    total,
}: {
    data: string;
    store: string;
    joinKeys: string[];
    total: boolean;
}) => {
    return async (ctx: any, next: any) => {
        ctx.state.lastStep = 'group';

        const on = joinKeys || ctx.state.joinKeys;
        const groups = groupData(ctx.state[data], total ? [] : on);

        if (total) {
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
        ctx.state.lastStep = 'join';

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
