import { CustomError } from '../utils/error.utils';

const ORDERFILTERFIELDS = [
    'cod_section',
    'cod_product',
    'cod_product_line',
    'cod_family',
    'cod_subfamily',
    'cod_campaign',
    'tag',
    'commercial_tag',
    'partnumber',
];

const getFiltersFromQuery = ctx => {
    if (!Object.keys(ctx.query).length) {
        const errorMessage = 'No filters in querystring';
        throw new CustomError(errorMessage, httpStatusCodes.HTTP_BAD_REQUEST);
    }
    return JSON.parse(ctx.query.filter);
};

export const getCurrentFilters = async (ctx, next) => {
    ctx.state.filters = getFiltersFromQuery(ctx);
    ctx.state.orderFilters = ctx.state.filters.filter(({ key }) => !ORDERFILTERFIELDS.includes(key));

    await next();
};
