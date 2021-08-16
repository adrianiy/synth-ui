import fs from 'fs';
import yaml from 'js-yaml';
import callsites from 'callsites';
import path from 'path';
import { asyncPipe, conditionalMiddleware, customMiddleware, parallel, setVariables } from '../middlewares/base';
import { filter, groupBy, join, sort, transform } from '../middlewares/data';
import { getA2ComparableFilters, getComparableFilters, getCurrentFilters } from '../middlewares/filters';
import { fetchData } from '../middlewares/fetch';
import { logMiddleware } from '../middlewares/log';

export const basicYamlParser = (doc: any, params: any) => {
    let pipe = [];

    if (doc.name) {
        pipe.push(setVariables({ from: doc.name }));
    }
    if (doc.conditional) {
        pipe.push(conditionalMiddleware(doc.conditional, params));
    }
    if (doc.variables) {
        pipe.push(setVariables(doc.variables));
    }
    if (doc.filters) {
        pipe.push(getCurrentFilters(doc.filters));

        if (doc.filters.comparable) {
            pipe.push(getComparableFilters(doc.filters));
        }
        if (doc.filters.a2) {
            pipe.push(getA2ComparableFilters(doc.filters));
        }
    }
    if (doc.fetch) {
        if (doc.fetch.multi) {
            const fns = doc.fetch.multi.map((call: any) => fetchData({ ...call, url: doc.fetch.url }, params));

            pipe.push(parallel(fns));
        } else {
            pipe.push(fetchData(doc.fetch, params));
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
        pipe.push(groupBy(doc.group, params));
    }
    if (doc.join) {
        pipe.push(join(doc.join, params));
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
    if (doc.middleware) {
        pipe.push(customMiddleware({ middleware: doc.middleware }, params));
    }
    if (doc.pipe) {
        pipe.push(
            asyncPipe(...doc.pipe.reduce((acc: any, curr: any) => acc.concat(basicYamlParser(curr, params)), [])),
        );
    }
    if (doc.log) {
        pipe.push(logMiddleware(doc.log, { ...params, showLastStep: false }));
    }

    return pipe;
};

const loadYaml = (callerFileName: string, filePath: string) => {
    return yaml.load(fs.readFileSync(path.join(callerFileName, '..', filePath), 'utf-8'));
};

export const composer = (filePath: string | string[], params: any = {}) => {
    let callerFileName = callsites()[1].getFileName();
    let doc: any;

    if (typeof filePath !== 'string') {
        doc = {
            pipe: filePath.map((currentPath: string) => loadYaml(callerFileName, currentPath)),
        };
    } else {
        doc = loadYaml(callerFileName, filePath);
    }

    const pipe = basicYamlParser(doc, params);

    return asyncPipe(...pipe);
};

export const configureComposer = ({ baseUrl, auth, ...params }: { baseUrl: string; auth: string; params: any }) => {
    return async (ctx: any, next: any) => {
        ctx.state = { ...ctx.state, baseUrl, auth, ...params };

        await next();
    };
};
