import { composer } from '../../composer';
import { FiltersConfigMiddleware } from '../../models';
import { sortCountries } from '../../utils';

const setData = async (ctx: any, next: any) => {
    ctx.state.data = {
        section: ctx.state.sections,
        product: ctx.state.products,
        product_line: ctx.state.product_lines,
        campaign: ctx.state.campaigns,
        market: ctx.state.markets,
        platform: ctx.state.platforms,
        warehouses: ctx.state.warehouses,
    };

    ctx.state.data = Object.keys(ctx.state.data)
        .filter(key => ctx.state.data[key]?.length)
        .reduce((acc, key) => ({ ...acc, [key]: ctx.state.data[key] }), {});

    await next();
};

export const fetchFiltersConfig = (configuration: FiltersConfigMiddleware) =>
    composer('./docs/v1/filters.yml', { ...configuration, sortCountries, setData });
