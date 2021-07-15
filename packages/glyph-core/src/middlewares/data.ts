import { crossJoin, leftOuterJoin } from '../utils/join.utils';
import { sumObjects } from './../utils/utils';

/** sort middleware */
export const sort = (sortFn: any) => {
    if (!sortFn) {
        throw new Error('sortFn parameter is mandatory');
    }

    const getSortFn = typeof sortFn === 'string' ? eval(sortFn) : sortFn;

    return async (ctx: any, next: any) => {
        ctx.state.data = ctx.state.data.sort(getSortFn);

        await next();
    };
};

export const addSufix = (data: string, sufix: string, joinKeys: string[]) => {
    return async (ctx: any, next: any) => {
        ctx.state[data].forEach((row: any) => {
            Object.keys(row)
                .filter((key: string) => !joinKeys.includes(key))
                .forEach((key: string) => {
                    row[`${key}_${sufix}`] = row[key];
                    delete row[key];
                });
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
 */
export const groupBy = (data: string = 'data', store: string = 'data', joinKeys: string[]) => {
    return async (ctx: any, next: any) => {
        const on = joinKeys || ctx.state.joinKeys;
        const groups = ctx.state[data].reduce((acc: any, curr: any) => {
            const group = acc.find((group: any) => on.every((key: string) => curr[key] === group[key]));

            if (group) {
                sumObjects(group, curr, on);
            } else {
                return acc.concat(curr);
            }
        });

        ctx.state[store] = groups;

        await next();
    };
};

/**
 * Join middleware
 *
 * @param strategy { string } type of join 'cross' | 'left'
 * @param data { string } name of key where data is stored
 * @param join { string } name of key where joinabla data is stored
 * @param store { string } name of key where joined data will be stored
 * @param on { string[] } array of keys to use in join
 */
export const join = (
    strategy: string = 'cross',
    data: string = 'data',
    join: string,
    store: string,
    joinKeys: string[],
) => {
    return async (ctx: any, next: any) => {
        const on = joinKeys || ctx.state.joinKeys;
        store = store || data;

        switch (strategy) {
            case 'left':
                ctx.state[store] = leftOuterJoin(on, ctx.state[data], ctx.state[join]);
                break;
            default:
                ctx.state[store] = crossJoin(on, ctx.state[data], ctx.state[join]);
                break;
        }

        await next();
    };
};
