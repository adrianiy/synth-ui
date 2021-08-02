import { fetchBase } from '../utils/fetch.utils';
import { getFrom, storeIn } from '../utils/utils';

/**
 * Fetch middleware
 *
 * @param baseUrl { string } base url path
 * @param url { string } request endpoint
 * @param auth { string } authentication string
 * @param store { string } state key where data will be stored
 * @param data { string } key where data is stored in response
 * @param parameters { any } object of parameters to use in request. by default uses filters from state
 * @param headers { any } object of optional headers to use in fetch
 */
export const fetchData = ({
    baseUrl,
    url,
    auth,
    store = 'data',
    data: dataField = 'data',
    parameters = { filter: 'filters' },
    headers = {},
}: {
    baseUrl: string;
    url: string;
    auth: string;
    store: string;
    data: string;
    parameters: any;
    headers: any;
}) => {
    return async (ctx: any, next: any) => {
        Object.keys(parameters).forEach((key: string) => {
            const parameter = getFrom(ctx.state, parameters[key]) || parameters[key];
            parameters[key] = parameter;
        });

        const response = await fetchBase(
            getFrom(ctx.state, baseUrl) || baseUrl || ctx.state.baseUrl,
            getFrom(ctx.state, url) || url,
            getFrom(ctx.state, auth) || auth || ctx.state.auth,
            parameters,
            headers,
            ctx.state.from || '',
            ctx.state.logger,
        );
        const prevData = getFrom(ctx.state, store) || [];
        const data = [ ...prevData, ...(dataField ? getFrom(response, dataField) : response) ];

        storeIn(ctx.state, store, data);

        await next();
    };
};
