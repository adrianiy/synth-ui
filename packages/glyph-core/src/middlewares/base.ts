/** Asynchronous pipe */
export const asyncPipe = (...fns: any) => {
    return async (ctx: any, next: any) => {
        const initialFn = async () => await next();

        await fns.reduce((v: any, f: any) => async () => f(ctx, v), initialFn);
    };
};

/** Add attributes to ctx.state */
export const setVariables = (variables: any) => {
    if (!variables) {
        throw new Error('Variables parameter is mandatory');
    }

    const getData = typeof variables === 'function' ? variables : variables;

    return async (ctx: any, next: any) => {
        const data = getData(ctx);

        Object.keys(data).forEach(key => {
            ctx.state[key] = data[key];
        });
        ctx.state['startTime'] = new Date();

        await next();
    };
};

/** Parallel calls middleware */
export const parallel = (fns: any[], stores: string[]) => {
    return async (ctx: any, next: any) => {
        const result = await Promise.all(fns.reduce((acc, curr) => acc.concat(curr(ctx, async () => null)), []));

        if (stores) {
            stores.forEach((store: string, index: number) => (ctx.state[store] = result[index]));
        } else {
            ctx.state.data = result;
        }

        await next();
    };
};
