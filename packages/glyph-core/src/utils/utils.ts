export const pipe = x => (...fns) => fns.reduce((v, f) => f(v), x);
export const parseHash = hash => JSON.parse(atob(hash));
export const capitalize = (text: string) => `${text[0].toUpperCase()}${text.slice(1).toLowerCase()}`;

// taking into account that some filters have single codes and others have an array with multiple codes
export const checkStrictIn = (codeToCompare: any, initialCode: any) =>
    `&${codeToArray(initialCode).join('&')}&`.indexOf(`&${codeToArray(codeToCompare).join('&')}&`) > -1;
// check if value is included in an array
export const checkIn = (val: any, container: any) => codeToArray(container).includes(val);
// ensures code is an array. Some options have codes like '1' and others have multiple codes (one per brand) like [1, 32]
export const codeToArray = (code: any) => [].concat(code);
export const unique = (value: any, index: number, self: any) => {
    return self.indexOf(value) === index;
};
export const sumObjects = (acc, data, joinKeys) => {
    Object.keys(acc).forEach(key => {
        // eslint-disable-next-line no-prototype-builtins
        if (data.hasOwnProperty(key) && !joinKeys.includes(key) && key !== 'children') {
            /* istanbul ignore next */
            if (data[key] instanceof Array) {
                acc[key] = (acc[key] || []).concat(data[key]);
            } else if (typeof data[key] === 'string' || key.startsWith('cod_')) {
                acc[key] = data[key];
            } else {
                acc[key] = (acc[key] || 0) + (data[key] || 0);
            }
        }
        if (key === 'children') {
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
