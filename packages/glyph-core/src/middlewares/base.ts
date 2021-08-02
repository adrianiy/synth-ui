import { constant, getFrom, is, storeIn } from '../utils/utils';
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
            ctx.state[key] = data[key];
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
export const customMiddleware = (
    { middleware, store, standalone }: { middleware: any; store: string; standalone: boolean },
    params: any,
) => {
    return async (ctx: any, next: any) => {
        try {
            ctx.state.lastStep = 'custom';

            const context = standalone ? { ...ctx, query: ctx.query, state: { ...ctx.state } } : ctx;

            if (is(middleware, 'string')) {
                const data = await getFrom({ ...params, ...ctx.state }, middleware)(context, next);

                if (store) {
                    storeIn(ctx.state, store, data || context.state.data);
                }
            } else if (is(middleware, Object)) {
                const key = Object.keys(middleware)[0];
                await getFrom({ ...params, ...ctx.state }, key)(middleware[key]);
            } else {
                throw new Error('Invalid custom middleware format');
            }
        } catch (error) {
            await logMiddleware({ error, level: 'error' })(ctx, null);
            throw error;
        }
    };
};
