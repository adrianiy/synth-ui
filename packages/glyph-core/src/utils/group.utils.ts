import { fullMatch, is, unique } from './utils';

export const sumObjects = (acc, data, joinKeys, concat, children) => {
    Object.keys(acc).forEach(key => {
        const exists = data.hasOwnProperty(key);
        const inConcat = concat?.includes(key);
        const inJoin = joinKeys.includes(key);
        const isChildren = key === children;
        // eslint-disable-next-line no-prototype-builtins
        if (exists && (inConcat || !inJoin) && !isChildren) {
            if (inConcat) {
                acc[key] = [].concat(acc[key]).concat(data[key]).filter(unique);
            } else {
                /* istanbul ignore next */
                if (is(data[key], Object)) {
                    acc[key] = { ...acc[key], ...data[key] };
                } else if (is(data[key], 'boolean')) {
                    acc[key] = acc[key] || data[key];
                } else if (is(data[key], Array)) {
                    acc[key] = (acc[key] || []).concat(data[key]);
                } else if (is(data[key], 'string') || key.startsWith('cod_')) {
                    acc[key] = data[key];
                } else {
                    acc[key] = (acc[key] || 0) + (data[key] || 0);
                }
            }
        }
        if (isChildren) {
            acc[key] = acc[key].concat(data[key]);
        }
    });
    Object.keys(data)
        .filter(key => !Object.keys(acc).includes(key))
        .forEach(key => {
            const inConcat = concat?.includes(key);
            if (inConcat) {
                acc[key] = [ data[key] ];
            } else {
                acc[key] = data[key];
            }
        });
    return acc;
};

export const groupData = (data: any[], on: string[], concat?: string[], children?: string) => {
    return data?.reduce((acc: any, rawCurr: any) => {
        const curr = { ...rawCurr, ...(children ? { [children]: [ rawCurr ] } : {}) };
        const group = acc.find((group: any) => on.every((key: string) => fullMatch(curr[key], group[key])));

        const result = sumObjects(group || {}, { ...curr }, on, concat, children);

        if (!group) {
            acc.push(result);
        }

        return acc;
    }, []);
};
