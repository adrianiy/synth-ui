import { constant, getFrom, is } from '../utils/utils';
import { logMiddleware } from './log';

/** Asynchronous pipe */
export const asyncPipe = (...fns: any) => {
    return async (ctx: any, next: any) => {
        const initialFn = async () => await next();

        const fnPipe = [ ...fns ].reverse().reduce((v: any, f: any) => async () => f(ctx, v), initialFn);

        await fnPipe();
    };
};

/** Add attributes to ctx.state */
export const setVariables = (variables: any) => {
    if (!variables) {
        throw new Error('Variables parameter is mandatory');
    }

    const getData = is(variables, Function) ? variables : constant(variables);

    return async (ctx: any, next: any) => {
        ctx.state.lastStep = 'variables';

        const data = getData(ctx);

        Object.keys(data).forEach(key => {
            const isFrom = key === 'from';
            const isSetted = ctx.state[key];

            ctx.state[key] = isFrom && isSetted ? ctx.state[key] : data[key];
        });
        ctx.state['startTime'] = new Date();

        await next();
    };
};

/** Parallel calls middleware */
export const parallel = (fns: any[]) => {
    return async (ctx: any, next: any) => {
        await Promise.all(fns.reduce((acc, curr) => acc.concat(curr(ctx, async () => null)), []));

        await next();
    };
};

/** Custom middleware */
export const customMiddleware = (customMiddelware: any, params: any) => {
    return async (ctx: any, next: any) => {
        try {
            ctx.state.lastStep = 'custom';

            if (is(customMiddelware, 'string')) {
                await getFrom({ ...params, ...ctx.state }, customMiddelware)(ctx, next);
            } else if (is(customMiddelware, Object)) {
                const key = Object.keys(customMiddelware)[0];
                await getFrom({ ...params, ...ctx.state }, key)(customMiddelware[key]);
            } else {
                throw new Error('Invalid custom middleware format');
            }

            await next();
        } catch (error) {
            await logMiddleware({ error, level: 'error' })(ctx, null);
            throw error;
        }
    };
};
