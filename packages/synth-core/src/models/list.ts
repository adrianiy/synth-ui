export interface Cell {
    value: any;
    format: string;
    decoration: string;
}

export interface RowAction {
    title: string;
    icon?: string;
    action: () => void;
}

export interface BaseRow {
    _isTotal?: boolean;
    _expanded?: boolean;
    _originalIndex?: number;
    _actions?: RowAction[];
    [key: string]: Cell | any;
}

export interface Row extends BaseRow {
    children?: BaseRow[];
}

export interface FieldsConfig {
    title: () => string;
    value: () => string;
    format: () => string;
    decoration?: () => string;
    sign?: () => boolean;
    negativeSign?: () => boolean;
    showZero?: () => boolean;
}
