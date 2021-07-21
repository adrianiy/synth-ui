import fs from 'fs';
import yaml from 'js-yaml';
import callsites from 'callsites';
import path from 'path';
import { asyncPipe, customMiddleware, parallel, setVariables } from '../middlewares/base';
import { addSuffix, groupBy, join, setEntityName, setGrowths, sort, transform } from '../middlewares/data';
import { getA2ComparableFilters, getComparableFilters, getCurrentFilters } from '../middlewares/filters';
import { fetchData } from '../utils/fetch.utils';
import { log } from '../utils/log.utils';
import { is } from '../utils/utils';

const basicYamlParser = (doc: any, params: any) => {
    let pipe = [];

    if (doc.name) {
        pipe.push(setVariables({ from: doc.name }));
    }
    if (doc.setVariables) {
        pipe.push(setVariables(doc.setVariables));
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
        pipe.push(fetchData(doc.fetch));
    }
    if (doc.multiFetch) {
        const fns = doc.multiFetch.calls.map((call: any) => fetchData({ ...call, url: doc.multiFetch.url }));

        pipe.push(parallel(fns));
    }
    if (doc.parallel) {
        const fns = doc.parallel.map((curr: any) => basicYamlParser(curr, params)).flat();

        pipe.push(parallel(fns));
    }
    if (doc.addSuffix) {
        pipe.push(addSuffix(doc.addSuffix));
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
    if (doc.setEntityName) {
        pipe.push(setEntityName(doc.setEntityName));
    }
    if (doc.addGrowth) {
        pipe.push(setGrowths(doc.addGrowth));
    }
    if (doc.customMiddleware) {
        pipe.push(customMiddleware(doc.customMiddleware, params));
    }
    if (doc.pipe) {
        pipe.push(asyncPipe(...doc.pipe.reduce((acc, curr) => acc.concat(basicYamlParser(curr, params)), [])));
    }
    if (doc.log) {
        pipe.push(log(doc.log, params.logger));
    }

    return pipe;
};

export const composer = (filePath: string, params: any = {}) => {
    let callerFileName = callsites()[1].getFileName();

    const doc = yaml.load(fs.readFileSync(path.join(callerFileName, '..', filePath), 'utf-8'));

    const pipe = basicYamlParser(doc, params);

    return asyncPipe(...pipe);
};

export const configureComposer = (baseUrl: string, auth: string, ...params: any) => {
    return async (ctx: any, next: any) => {
        ctx.state = { ...ctx.state, baseUrl, auth, ...params };

        await next();
    };
};
