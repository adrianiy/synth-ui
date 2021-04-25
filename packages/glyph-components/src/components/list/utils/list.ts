import { Row } from 'glyph-core';

export const filterEmptyRows = (list: Row[], fields: any[]) => {
    return list.filter((row: Row) => fields.every((field: any) => row[field]));
};

export const sortList = (list: Row[], field: string, direction: string) => {
    const sortFunction = (a: Row, b: Row) => {
        if (direction === 'asc') {
            return a[field].value - b[field].value;
        } else {
            return b[field].value - a[field].value;
        }
    };

    return list.sort(sortFunction);
};

export const parseExcelData = (data: Row[], fields: string[]) => {
    const excelData = [];

    data.forEach(row => {
        excelData.push(_parseCsvRow(fields, row));
        if (row.children) {
            row.children.forEach((child: Row[]) => excelData.push(_parseCsvRow(fields, child, `${row['name']}_`)));
        }
    });

    return excelData;
};

const _parseCsvRow = (fields: string[], row: Row, suffix = '') => {
    return [ `${suffix}${row['name']}` ].concat(
        fields.map(field => {
            const { value } = row[field];

            return value;
        }),
    );
};
