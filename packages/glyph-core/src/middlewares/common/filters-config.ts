import { composer } from '../../composer';
import { FiltersConfigMiddleware } from '../../models';
import { sortCountries } from '../../utils';
import { is } from '../../utils/utils';

const defaultEndpoints = {
    sections: '/api/v1/entities/section',
    products: '/api/v1/entities/product',
    product_lines: '/api/v1/entities/product-line',
    campaigns: '/api/v1/entities/campaign',
    families: '/api/v1/entities/family',
    subfamilies: '/api/v1/entities/subfamily',
    markets: '/api/v1/entities/markets',
    platforms: '/api/v1/entities/platforms',
    warehouses: '/api/v1/entities/warehouses',
    article_properties: '/api/v1/article/properties', // aux endpoint to get family-section-product-product_line relations
};

const setData = async (ctx: any, next: any) => {
    ctx.state.data = {
        section: ctx.state.sections,
        product: ctx.state.products,
        product_line: ctx.state.product_lines,
        campaign: ctx.state.campaigns,
        family: ctx.state.families,
        subfamily: ctx.state.subfamilies,
        market: ctx.state.markets,
        platform: ctx.state.platforms,
        warehouses: ctx.state.warehouses,
    };

    ctx.state.data = Object.keys(ctx.state.data)
        .filter(key => ctx.state.data[key])
        .reduce((acc, key) => ({ ...acc, [key]: ctx.state.data[key] }), {});

    await next();
};

const setDefaultConfiguration = (configuration: FiltersConfigMiddleware) => {
    if (!configuration.endpoints) {
        configuration.endpoints = defaultEndpoints;
    }

    const endpoints = Object.keys(defaultEndpoints);

    endpoints.forEach((key: string) => {
        const endpoint = configuration.endpoints?.[key];
        if (!is(endpoint, 'string')) {
            if (configuration.endpoints?.[key] === false) {
                delete configuration.endpoints[key];
            } else {
                configuration.endpoints[key] = defaultEndpoints[key];
            }
        }
    });

    return configuration;
};

export const fetchFiltersConfig = (configuration: FiltersConfigMiddleware = {}) =>
    composer('./config/v1/filters.yml', { ...setDefaultConfiguration(configuration), sortCountries, setData });
