import dayjs from 'dayjs';
import { getComparable, getComparableCampaign, getComparableFilter, getFiltersFromQuery } from '../utils/filter.utils';

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

/** middleware to save filters in state
 *
 * @param use { string[] } array of filter allowed to use in requests
 * @param rangeBefore { number } quantity of days to subtract to startDate
 */
export const getCurrentFilters = ({ use, rangeBefore }: { use: string[]; rangeBefore: number }) => {
    return async (ctx, next) => {
        ctx.state.lastStep = 'current filters';

        const filters = getFiltersFromQuery(ctx, use, rangeBefore);
        const orderFilters = filters.filter(({ key }) => !ORDERFILTERFIELDS.includes(key));

        ctx.state = {
            ...ctx.state,
            filters,
            orderFilters,
        };

        await next();
    };
};

/** middleware to save comparable filters in state
 *
 * @param compType { string } comparable type
 */
export const getComparableFilters = ({ compType: compTypeRaw }: { compType: string }) => {
    return async (ctx, next) => {
        ctx.state.lastStep = 'comparable filters';

        let filter = ctx.state.filters;
        const compType = compTypeRaw || ctx.query.compType || 'commercial';
        const compRes = await getComparable(ctx, filter, compType);
        const comparableFilters = getComparableCampaign(compRes);
        const comparableOrderFilters = comparableFilters.comparableFilters?.filter(
            f => !ORDERFILTERFIELDS.includes(f.key),
        );

        ctx.state = {
            ...ctx.state,
            ...comparableFilters,
            comparableOrderFilters,
        };

        await next();
    };
};

/** middleware to save a2 comparable filters in state
 *
 * @param compType { string } comparable type
 */
export const getA2ComparableFilters = ({ compType: compTypeRaw }: { compType: string }) => {
    return async (ctx, next) => {
        ctx.state.lastStep = 'a2 filters';

        let a2;
        const compType = compTypeRaw || ctx.query.compType || 'commercial';

        if (![ 'custom', 'ordinal' ].includes(compType)) {
            a2 = await getComparableFilter(ctx, ctx.state.comparableFilters, ctx.state.filters, compType);
        } else {
            a2 = {
                comparableFilters: [],
                comparableDate: [],
            };
        }
        a2 = getComparableCampaign(a2);
        a2.comparableFilterOrder = a2.comparableFilters.filter(f => !ORDERFILTERFIELDS.includes(f.key));

        ctx.state = {
            ...ctx.state,
            a2ComparableFilters: a2.comparableFilters,
            a2ComparableOrderFilters: a2.comparableFilterOrder,
            a2ComparableDate: a2.comparableDate,
        };

        await next();
    };
};
