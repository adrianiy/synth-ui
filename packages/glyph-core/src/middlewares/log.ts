import { log } from '../utils/log.utils';

export const logMiddleware = (
    {
        data = 'data',
        message,
        error,
        from: fromRaw = '',
        level = 'info',
    }: { data?: string; message?: string; error?: any; from?: string; level?: string },
    rawLogger?: any,
) => {
    return async (ctx: any, next: any) => {
        const from = `${ctx.state.from || fromRaw || ''}`;
        const logger = rawLogger || ctx.state.getLogger?.(from);

        log({ message: message || ctx.state[data], error, from, level, logger, showErrors: ctx.state.showErrors });

        await next();
    };
};
