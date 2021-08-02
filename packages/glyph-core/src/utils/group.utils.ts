import { is } from './utils';

export const sumObjects = (acc, data, joinKeys, children) => {
    Object.keys(acc).forEach(key => {
        // eslint-disable-next-line no-prototype-builtins
        if (data.hasOwnProperty(key) && !joinKeys.includes(key) && key !== children) {
            /* istanbul ignore next */
            if (is(data[key], Object)) {
                acc[key] = { ...acc[key], ...data[key] };
            } else if (is(data[key], Array)) {
                acc[key] = (acc[key] || []).concat(data[key]);
            } else if (is(data[key], 'string') || key.startsWith('cod_')) {
                acc[key] = data[key];
            } else {
                acc[key] = (acc[key] || 0) + (data[key] || 0);
            }
        }
        if (key === children) {
            acc[key] = acc[key].concat(data[key]);
        }
    });
    Object.keys(data)
        .filter(key => !Object.keys(acc).includes(key))
        .forEach(key => {
            acc[key] = data[key];
        });
    return acc;
};

export const groupData = (data: any[], on: string[], children?: string) => {
    return data?.reduce((acc: any, rawCurr: any) => {
        const curr = { ...rawCurr, ...(children ? { [children]: [ rawCurr ] } : {}) };
        const group = acc.find((group: any) => on.every((key: string) => curr[key] === group[key]));

        if (group) {
            sumObjects(group, { ...curr }, on, children);
        } else {
            acc.push({ ...curr });
        }

        return acc;
    }, []);
};
