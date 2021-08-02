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
        showLastStep = true
    }: { data?: string; message?: string; error?: any; from?: string; level?: string; function?: string; showLastStep?: boolean },
    params?: any,
) => {
    return async (ctx: any, next: any) => {
        const from = `${ctx.state.from || fromRaw || ''}${ showLastStep ? ` - ${ ctx.state.lastStep || '' }` : '' }`;
        const logger = getFrom({ ...params, ...ctx.state }, 'logger');
        const rawData = JSON.stringify(getFrom(ctx.state, data), null, 2);
        const messageFn = getFrom({ ...params, ...ctx.state }, functionRaw) || eval(functionRaw);

        log({
            message: message || messageFn?.(ctx) || rawData,
            error,
            from,
            level,
            logger,
            showErrors: ctx.state.showErrors,
        });

        await next?.();
    };
};
