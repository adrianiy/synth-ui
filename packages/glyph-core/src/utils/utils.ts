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

export const is = (value: any, typeCheck: any) => {
    try {
        return typeof value === typeCheck || value instanceof typeCheck;
    } catch (_) {
        return false;
    }
};
export const constant = (value: any) => (_: any) => value;

export const fn = (fn: any) => (is(fn, Function) ? fn : () => fn);

export const getFrom = (from: any, value: string) => {
    if (value?.split) {
        const keys = value.split('.');

        return keys.reduce((value: any, key: string) => value?.[key], from);
    } else {
        return undefined;
    }
};

export const storeIn = (dest: any, path: string, data: any) => {
    const keys = path.split('.').reverse();

    const store = keys.reduce((value: any, key: string) => ({ [key]: value }), data);

    const [ key, value ] = Object.entries(store)[0];

    dest[key] = value;
};

export const parseParam = (from: any, value: any) => {
    try {
        if (!is(value, 'string')) {
            throw Error('should parse only strings');
        }

        if (value?.startsWith?.('?$')) {
            return getFrom(from, value.replace(/\?\$ ?/, ''));
        } else if (value?.startsWith?.('?#')) {
            return value.replace(/\?\# ?/, '');
        } else if (value?.startsWith?.('?>')) {
            return eval(value.replace(/\?\> ?/, ''));
        } else {
            const v = getFrom(from, value) || value;

            if (is(v, 'string') && (v.includes('function(') || v.includes('=>'))) {
                return eval(v);
            } else {
                return v;
            }
        }
    } catch (err) {
        return is(value, 'string') ? value?.replace(/\?(\$|\>|\#)+ ?/, '') : value;
    }
};
const defaultTypes = { children: '?>', store: '?>' };
const getDefaultType = (key: string) => {
    if (!key.startsWith('?')) {
        return defaultTypes[key] || '';
    } else {
        return key;
    }
};

export const parseParams = (from: any, params: any): any => {
    return Object.keys(params).reduce(
        (acc, key) => ({
            ...acc,
            [key]: parseParam(from, is(params[key], 'string') ? `${getDefaultType(key)}${params[key]}` : params[key]),
        }),
        {},
    );
};

export const getParamValue = (context: any, param: any, _default: any) => {
    return is(param, Function) ? param(context) : param || _default;
};
