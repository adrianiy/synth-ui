import { FieldsConfig, Row } from '../models/list';
import { capitalize } from './utils';

export const configRow = (row: Row, fieldsConfig: FieldsConfig[]) => {
    const fields = Object.fromEntries(_configFields(row, fieldsConfig));

    return {
        name: capitalize(row.name),
        children: _parseChildren(row.children, fieldsConfig),
        ...fields
    };
};

const _configFields = (row: Row, fieldsConfig: FieldsConfig[]) => {
    return fieldsConfig.map(field => [ field.title(), _getValue(row, field) ]);
};

const _parseChildren = (children: Row[], fieldsConfig: FieldsConfig[]) => {
    if (children) {
        return children.map(row => _configFields(row, fieldsConfig));
    } else {
        return Array(3)
            .fill(0)
            .map(() => ({ _loading: true }));
    }
};

const _getValue = (row: any, fieldConfig: FieldsConfig) => {
    const { field, format, decoration } = fieldConfig;

    return {
        value: row[field()],
        format: format(),
        decoration: decoration()
    };
};
