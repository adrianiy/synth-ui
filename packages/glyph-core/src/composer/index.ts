import fs from 'fs';
import yaml from 'js-yaml';
import callsites from 'callsites';
import path from 'path';
import { asyncPipe, customMiddleware, parallel, setVariables } from '../middlewares/base';
import { filter, groupBy, join, sort, transform } from '../middlewares/data';
import { getA2ComparableFilters, getComparableFilters, getCurrentFilters } from '../middlewares/filters';
import { fetchData } from '../utils/fetch.utils';
import { is } from '../utils/utils';
import { logMiddleware } from '../middlewares/log';

const basicYamlParser = (doc: any, params: any) => {
    let pipe = [];

    if (doc.name) {
        pipe.push(setVariables({ from: doc.name }));
    }
    if (doc.variables) {
        pipe.push(setVariables(doc.variables));
    }
    if (doc.filters) {
        if (doc.filters.current) {
            pipe.push(getCurrentFilters(doc.filters));
        }
        if (doc.filters.comparable) {
            pipe.push(getComparableFilters(doc.filters));
        }
        if (doc.filters.a2) {
            pipe.push(getA2ComparableFilters(doc.filters));
        }
    }
    if (doc.fetch) {
        if (doc.fetch.multi) {
            const fns = doc.fetch.multi.map((call: any) => fetchData({ ...call, url: doc.fetch.url }));

            pipe.push(parallel(fns));
        } else {
            pipe.push(fetchData(doc.fetch));
        }
    }
    if (doc.parallel) {
        const fns = doc.parallel.map((curr: any) => basicYamlParser(curr, params)).flat();

        pipe.push(parallel(fns));
    }
    if (doc.transform) {
        pipe.push(transform(doc.transform, params));
    }
    if (doc.group) {
        pipe.push(groupBy(doc.group));
    }
    if (doc.join) {
        pipe.push(join(doc.join));
    }
    if (doc.sort) {
        pipe.push(sort(doc.sort, params));
    }
    if (doc.filter) {
        pipe.push(filter(doc.filter, params));
    }
    if (doc.custom) {
        pipe.push(customMiddleware(doc.custom, params));
    }
    if (doc.pipe) {
        pipe.push(asyncPipe(...doc.pipe.reduce((acc, curr) => acc.concat(basicYamlParser(curr, params)), [])));
    }
    if (doc.log) {
        pipe.push(logMiddleware(doc.log, params.logger));
    }

    return pipe;
};

export const composer = (filePath: string, params: any = {}) => {
    let callerFileName = callsites()[1].getFileName();

    const doc = yaml.load(fs.readFileSync(path.join(callerFileName, '..', filePath), 'utf-8'));

    const pipe = basicYamlParser(doc, params);

    return asyncPipe(...pipe);
};

export const configureComposer = ({ baseUrl, auth, ...params }: { baseUrl: string; auth: string; params: any }) => {
    return async (ctx: any, next: any) => {
        ctx.state = { ...ctx.state, baseUrl, auth, ...params };

        await next();
    };
};
