import { createLogger, addColors, format, transports } from 'winston';
const { combine, simple, colorize, timestamp, label: labelFormat, errors, splat, printf, prettyPrint } = format;

const Colors = {
    info: '\x1b[36m',
    error: '\x1b[31m',
    warn: '\x1b[33m',
    verbose: '\x1b[43m',
    log: '\x1b[37m',
    debug: '\x1b[35m',
};

const getLogger = (label: string) =>
    createLogger({
        format: combine(
            timestamp({
                format: 'YYYY-MM-DD HH:mm:ss',
            }),
            labelFormat({ label }),
            errors({ stack: true }),
            prettyPrint(),
            splat(),
            simple(),
            printf(info => {
                return `\x1b[36m${info.timestamp} - ${Colors[info.level]}[${info.level}] - ${info.label}:  ${
                    Colors.log
                }${info.message}${info.showErrors && info.stack ? `\n${Colors.error}${info.stack}` : ''}`;
            }),
        ),
        transports: [ new transports.Console() ],
    });

export const log = ({
    message,
    error,
    from = '',
    level = 'info',
    logger,
    showErrors,
}: {
    message?: string;
    error?: any;
    from?: string;
    level?: string;
    logger?: any;
    showErrors?: boolean;
}) => {
    if (logger) {
        logger[level](JSON.stringify(message));
    } else {
        const glyphLogger = getLogger(from);

        if (error) {
            glyphLogger.error(error, { showErrors });
        } else {
            glyphLogger.log({
                level,
                message,
                showErrors,
            });
        }
    }
};

export default getLogger;
