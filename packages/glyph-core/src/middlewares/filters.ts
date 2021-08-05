import dayjs from 'dayjs';
import { getComparable, getComparableCampaign, getComparableFilter, getFiltersFromQuery } from '../utils/filter.utils';
import { capitalize, getFrom, storeIn } from '../utils/utils';

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
 * @param ignore { string[] } array of query parameters to ignore
 * @param rangeBefore { number } quantity of days to subtract to startDate
 */
export const getCurrentFilters = ({
    use,
    store = 'filters',
    ignore,
    rangeBefore,
}: {
    use: string[];
    store: string;
    ignore: string[];
    rangeBefore: number;
}) => {
    return async (ctx: any, next: any) => {
        ctx.state.lastStep = 'current filters';

        const filters = getFiltersFromQuery(ctx, use, rangeBefore, ignore);
        const orderFilters = filters.filter(({ key }) => !ORDERFILTERFIELDS.includes(key));

        storeIn(ctx.state, store, filters);
        storeIn(ctx.state, `order${capitalize(store)}`, orderFilters);

        await next();
    };
};

/** middleware to save comparable filters in state
 *
 * @param compType { string } comparable type
 */
export const getComparableFilters = ({
    base = 'filters',
    store = 'comparableFitlers',
    compType: compTypeRaw,
}: {
    base: string;
    store: string;
    compType: string;
}) => {
    return async (ctx: any, next: any) => {
        ctx.state.lastStep = 'comparable filters';

        let filter = getFrom(ctx.state, base);
        const compType = compTypeRaw || ctx.query.compType || 'commercial';
        const compRes = await getComparable(ctx, filter, compType);
        const comparableFilters = getComparableCampaign(compRes);
        const comparableOrderFilters = comparableFilters.comparableFilters?.filter(
            f => !ORDERFILTERFIELDS.includes(f.key),
        );

        storeIn(ctx.state, store, comparableFilters);
        storeIn(ctx.state, `order${capitalize(store)}`, comparableOrderFilters);

        await next();
    };
};

/** middleware to save a2 comparable filters in state
 *
 * @param compType { string } comparable type
 */
export const getA2ComparableFilters = ({
    base = 'filters',
    comparable = 'comparableFilters',
    store = 'a2ComparableFilters',
    compType: compTypeRaw,
}: {
    base: string;
    comparable: string;
    store: string;
    compType: string;
}) => {
    return async (ctx, next) => {
        ctx.state.lastStep = 'a2 filters';

        let a2;
        const compType = compTypeRaw || ctx.query.compType || 'commercial';

        if (![ 'custom', 'ordinal' ].includes(compType)) {
            a2 = await getComparableFilter(ctx, getFrom(ctx.state, base), getFrom(ctx.state, comparable), compType);
        } else {
            a2 = {
                comparableFilters: [],
                comparableDate: [],
            };
        }
        a2 = getComparableCampaign(a2);
        a2.comparableFilterOrder = a2.comparableFilters.filter(f => !ORDERFILTERFIELDS.includes(f.key));

        storeIn(ctx.state, store, a2.comparableFilters);
        storeIn(ctx.state, `order${capitalize(store)}`, a2.comparableFilterOrder);
        storeIn(ctx.state, `date${capitalize(store)}`, a2.comparableDate);

        await next();
    };
};
