export interface BaseRow {
    _isTotal?: boolean;
    _expanded?: boolean;
    _originalIndex?: number;
    name?: string;
    [key: string]: any;
}
export interface Row extends BaseRow {
    children?: BaseRow[];
}

export interface FieldsConfig {
    title: () => string;
    preffix?: string;
    suffix?: string;
    format: string;
    sign?: boolean;
    field: () => number | string;
}
