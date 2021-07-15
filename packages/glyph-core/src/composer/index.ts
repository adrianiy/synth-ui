import fs from 'fs';
import yaml from 'js-yaml';
import { asyncPipe, parallel, setVariables } from '../middlewares/base';
import { addSufix, groupBy, join } from '../middlewares/data';
import { fetchData } from '../utils/fetch.utils';

const basicYamlParser = (doc: any) => {
    let pipe = [];

    if (doc.setVariables) {
        pipe.push(setVariables(doc.setVariables));
    }
    if (doc.fetch) {
        if (doc.url) {
            pipe.push(fetchData(doc.fetch.url, doc.fetch.filters));
        }
    }
    if (doc.parallel) {
        const fns = doc.parallel.reduce((acc, curr) => acc.concat(curr), []);
        const stores = doc.parallel.reduce((acc, curr) => acc.concat(curr.store), []);

        pipe.push(parallel(fns, stores));
    }
    if (doc.addSufix) {
        const { data, sufix, joinKeys } = doc.addSufix;
        pipe.push(addSufix(data, sufix, joinKeys));
    }
    if (doc.groupBy) {
        const { data, store, joinKeys } = doc.groupBy;
        pipe.push(groupBy(data, store, joinKeys));
    }
    if (doc.join) {
        const { strategy, data, join, store, joinKeys } = doc.join;
        pipe.push(join(strategy, data, join, store, joinKeys));
    }
    if (doc.pipe) {
        pipe = doc.pipe.reduce((acc, curr) => acc.concat(basicYamlParser(curr)), pipe);
    }

    return pipe;
};

export const composer = (filePath: string) => {
    const doc = yaml.load(fs.readFileSync(filePath, 'utf-8'));

    const pipe = basicYamlParser(doc);

    return asyncPipe(...pipe);
};
