export const getEntityName = (value, entities, code, data, matchers = []) => {
    const entity = entities.find(
        (e: any) => e[code] === value && matchers.every((matcher: any) => e[matcher] === data[matcher]),
    );

    if (entity) {
        return entity['name'] || entity['description'];
    } else if (code === 'cod_product_line') {
        return 'OTROS';
    }
};

export const getGrowth = suffix => (key, row) => {
    return row[key] / row[`${key}${suffix}`] - 1;
};
