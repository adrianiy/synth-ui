import log4js from 'log4js';

log4js.configure({
    appenders: {
        console: { type: 'console' },
        file: { type: 'file', filename: './app.log' },
    },
    categories: {
        default: { appenders: [ 'console' ], level: 'debug' },
    },
});

const customLogger = log4js.getLogger;

export const log = (
    { data = 'data', from: fromRaw = '', level = 'info' }: { data: string; from: string; level: string },
    rawLogger: any,
) => {
    return async (ctx: any, next: any) => {
        const from = `${ctx.state.from || ''} - ${fromRaw}`;
        const logger = rawLogger || ctx.state.getLogger?.(from) || customLogger(from);

        logger[level](JSON.stringify(ctx.state[data]));

        await next();
    };
};

export default customLogger;
