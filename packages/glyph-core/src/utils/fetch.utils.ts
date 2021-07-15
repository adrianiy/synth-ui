import https from 'https';
import http from 'http';

const agent = new https.Agent({ keepAlive: true, keepAliveMsecs: 100000 });
const devAgent = new http.Agent({ keepAlive: true, keepAliveMsecs: 100000 });

export const fetchData = (url: string, filtersKey: string) => {
    return async (ctx: any, next: any) => {
        const filters = ctx.state[filtersKey];
        // return empty array if some filter is null
        if (/value%22%3Anull%7D/.test(filters)) {
            return { data: [] };
        }
        let filter = '';
        if (filters.length) {
            filter = `?filter=${filters}`;
        }

        const response = await fetch(`${ctx.state.base_url}/${url}${filter}`, {
            method: 'GET',
            headers: {
                Authorization: ctx.state.auth,
            },
            agent: ctx.state.base_url.includes('https') ? agent : devAgent,
            uriId: `${ctx.state.base_url}/api/{version}/{use_case}`,
        });

        if (response.status === 200) {
            // if response is OK return JSON object
            const body = await response.json();
            return body;
        } else {
            throw new Error(JSON.stringify(await response.text()));
        }
    };
};
