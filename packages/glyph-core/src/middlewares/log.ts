import { log } from '../utils/log.utils';
import { getFrom } from '../utils/utils';

export const logMiddleware = (
    {
        data = 'data',
        message,
        error,
        from: fromRaw = '',
        level = 'info',
        function: functionRaw,
    }: { data?: string; message?: string; error?: any; from?: string; level?: string; function?: string },
    params?: any,
) => {
    return async (ctx: any, next: any) => {
        const from = `${ctx.state.from || fromRaw || ''}`;
        const logger = getFrom({ ...params, ...ctx.state }, 'logger')?.(from);
        const rawData = JSON.stringify(getFrom(ctx.state, data), null, 2);
        const messageFn = (ctx: any) => getFrom({ ...params, ...ctx.state }, functionRaw) || eval(functionRaw);

        log({
            message: message || rawData || JSON.stringify(messageFn(ctx), null, 2),
            error,
            from,
            level,
            logger,
            showErrors: ctx.state.showErrors,
        });

        await next?.();
    };
};
