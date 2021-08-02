import fetch from 'node-fetch';
import https from 'https';
import http from 'http';
import { log } from './log.utils';
import { is } from './utils';

const agent = new https.Agent({ keepAlive: true, keepAliveMsecs: 100000 });
const devAgent = new http.Agent({ keepAlive: true, keepAliveMsecs: 100000 });

const parseParameter = (value: any) => {
    if (is(value, 'string')) {
        return value;
    } else {
        return encodeURIComponent(JSON.stringify(value));
    }
};

const addParameters = (url: string, parameters: any) => {
    const queryString = Object.entries(parameters || {}).reduce(
        (acc, [ key, value ]) => acc.concat(`${key}=${parseParameter(value)}`),
        [],
    );

    return `${url}${url.includes('?') ? '&' : '?'}${queryString.join('&')}`;
};

export const fetchBase = async (
    baseUrl: string,
    rawUrl: string,
    auth: string,
    parameters: any,
    headers: any = {},
    from: string = '',
    logger?: any,
) => {
    const url = addParameters(`${baseUrl}${rawUrl}`, parameters);

    log({ message: url, from, logger, level: 'debug' });

    const response = await fetch(url, {
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
