import { constant, is } from '../utils/utils';

/** Asynchronous pipe */
export const asyncPipe = (...fns: any) => {
    return async (ctx: any, next: any) => {
        const initialFn = async () => await next();

        const fnPipe = fns.reverse().reduce((v: any, f: any) => async () => f(ctx, v), initialFn);

        await fnPipe();
    };
};

/** Add attributes to ctx.state */
export const setVariables = (variables: any) => {
    if (!variables) {
        throw new Error('Variables parameter is mandatory');
    }

    const getData = is(variables, 'function') ? variables : constant(variables);

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
export const customMiddleware = (customMiddelware: any, params: any) => {
    return async (ctx: any, next: any) => {
        ctx.state.lastStep = 'custom';

        if (is(customMiddelware, 'string')) {
            await (params[customMiddelware] || ctx.state[customMiddelware]);
        } else if (is(customMiddelware, 'object')) {
            const key = Object.keys(customMiddelware)[0];
            await (params[key] || ctx.state[key])(customMiddelware[key]);
        } else {
            throw new Error('Invalid custom middleware format');
        }

        await next();
    };
};
