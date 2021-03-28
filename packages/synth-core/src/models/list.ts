export interface Cell {
    value: any;
    format: string;
    decoration: String;
}

export interface BaseRow {
    _isTotal?: boolean;
    _expanded?: boolean;
    _originalIndex?: number;
    [key: string]: Cell | any;
}

export interface Row extends BaseRow {
    children?: BaseRow[];
}

export interface FieldsConfig {
    title: () => string;
    field: () => string;
    format: () => string;
    decoration: () => string;
}
