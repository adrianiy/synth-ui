import fetch from 'node-fetch';
import https from 'https';
import http from 'http';
import getComposerLogger from './log.utils';

const agent = new https.Agent({ keepAlive: true, keepAliveMsecs: 100000 });
const devAgent = new http.Agent({ keepAlive: true, keepAliveMsecs: 100000 });

export const fetchBase = async (
    baseUrl: string,
    url: string,
    auth: string,
    filters: any[],
    restrictedFilters: string[],
    headers: any = {},
    from: string = '',
    getLogger?,
) => {
    const logger = (getLogger || getComposerLogger)(`${from} - fetch`);

    if (restrictedFilters && filters?.length) {
        filters = filters.filter(({ key }) => restrictedFilters.includes(key));
    }

    const filter = filters?.length ? `?filter=${encodeURIComponent(JSON.stringify(filters))}` : '';

    logger.debug(`${baseUrl}/${url}${filter}`);

    const response = await fetch(`${baseUrl}/${url}${filter}`, {
        method: 'GET',
        headers: {
            ...headers,
            Authorization: auth,
        },
        agent: baseUrl.includes('https') ? agent : devAgent,
        // uriId: `${ctx.state.base_url}/api/{version}/{use_case}`,
    });

    if (response.status === 200) {
        // if response is OK return JSON object
        const body = await response.json();

        return body;
    } else {
        throw new Error(JSON.stringify(await response.text()));
    }
};

export const fetchData = ({
    baseUrl,
    url,
    auth,
    store = 'data',
    dataField = 'data',
    filters,
    useFilters,
    headers = {},
}: {
    baseUrl: string;
    url: string;
    auth: string;
    store: string;
    dataField: string;
    filters: string;
    useFilters: string[];
    headers: any;
}) => {
    return async (ctx: any, next: any) => {
        const response = await fetchBase(
            baseUrl || ctx.state.baseUrl,
            url,
            auth || ctx.state.auth,
            ctx.state[filters],
            useFilters,
            headers,
            ctx.state.from || '',
            ctx.state.getLogger,
        );
        ctx.state[store] = [ ...(ctx.state[store] || []), ...(dataField ? response[dataField] : response) ];

        await next();
    };
};
