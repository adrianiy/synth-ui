import { log } from '../utils/log.utils';
import { getFrom, is, parseParam } from '../utils/utils';

export const logMiddleware = (
    {
        data = 'data',
        message: rawMessage,
        error,
        limit,
        filter: filterRaw,
        from: fromRaw = '',
        level = 'info',
        showLastStep = true,
    }: {
        data?: string;
        message?: string;
        error?: any;
        limit?: any;
        filter?: any;
        from?: string;
        level?: string;
        function?: string;
        showLastStep?: boolean;
    },
    params?: any,
) => {
    return async (ctx: any, next: any) => {
        const from = `${ctx.state.from || fromRaw || ''}${showLastStep ? ` - ${ctx.state.lastStep || ''}` : ''}`;
        const logger = getFrom({ ...params, ...ctx.state }, 'logger');
        const rawData = getFrom(ctx.state, data);
        const param = parseParam({ ...params, ...ctx.state }, rawMessage);
        const filter = filterRaw && eval(filterRaw);
        let message = is(param, Function)
            ? param?.(ctx)
            : param ||
              JSON.stringify(
                  is(rawData, Array) ? rawData?.filter(filter ?? Boolean)?.slice(0, limit) : rawData,
                  null,
                  2,
              );

        if (limit) {
            message = `${message}\n...and ${rawData.length - limit} more`;
        }

        if (!ctx.errorLogged) {
            log({
                message,
                error,
                from,
                level,
                logger,
                showErrors: ctx.state.showErrors,
            });
        }

        if (error) {
            ctx.errorLogged = true;
        }

        await next?.();
    };
};
