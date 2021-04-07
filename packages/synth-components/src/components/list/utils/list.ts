import { getGrowthColor } from '../../../utils/color.utils';
import { numeralFormat } from '../../../utils/utils';
import { Cell, Row } from 'synth-core';

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

export const getCellValues = (cell: Cell) => {
    const { value, decoration, ...formatArgs } = cell;
    const formattedValue = numeralFormat(value, ...Object.values(formatArgs));
    const color = decoration && getGrowthColor(formattedValue, decoration);

    return { color, formattedValue, value };
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
