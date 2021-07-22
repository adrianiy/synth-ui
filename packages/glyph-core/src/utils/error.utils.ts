import getLogger from './log.utils';

/**
 * Controla la devolución del error
 * Se utiliza para incluir en el mismo un codigo HTTP personalizado
 *
 * @param {Error} e Error provocado en la aplicación
 * @param {any} ctx contexto koa
 * @param {fn} next funcion
 */
export const errorHandler = async (e, ctx, next) => {
    const logger = getLogger(`error - ${ctx.state.from} - ${ctx.state.lastStep}`);
    logger.error(e);

    ctx.status = e.errorCode || 500;
    ctx.state.data = {
        error: e.message,
    };

    await next();
};

/**
 * Clase de error personalizada que permite incluir un codigo de error
 */
export class CustomError extends Error {
    public errorCode: number;

    constructor(message: string, errorCode = 1000) {
        super(message);
        this.errorCode = errorCode;
    }
}
