import { composer } from '../../composer';
import { FiltersConfigMiddleware } from '../../models';
import { sortCountries } from '../../utils';
import { is } from '../../utils/utils';

const defaultEndpoints = {
    sections: '/api/v1/entities/section',
    products: '/api/v1/entities/product',
    product_lines: '/api/v1/entities/product-line',
    campaigns: '/api/v1/entities/campaign',
    markets: '/api/v1/entities/markets',
    platforms: '/api/v1/entities/markets',
    warehouses: '/api/v1/entities/markets',
};

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

const setDefaultConfiguration = (configuration: FiltersConfigMiddleware) => {
    const endpoints = Object.keys(configuration.endpoints || {});
    endpoints.forEach((endpoint: string) => {
        if (!is(endpoint, 'string')) {
            if (configuration.endpoints[endpoint] === false) {
                delete configuration.endpoints[endpoint];
            } else {
                configuration.endpoints[endpoint] = defaultEndpoints[endpoint];
            }
        }
    });

    return configuration;
};

export const fetchFiltersConfig = (configuration: FiltersConfigMiddleware) =>
    composer('./config/v1/filters.yml', { ...setDefaultConfiguration(configuration), sortCountries, setData });
