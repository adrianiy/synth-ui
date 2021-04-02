export interface Cell {
    value: any;
    decoration: string;
    format?: string;
    sign?: boolean;
    negativeSign?: boolean;
    showZero?: boolean;
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
    _loading?: boolean;
    _actions?: RowAction[];
    [key: string]: Cell | any;
}

export interface Row extends BaseRow {
    _children?: BaseRow[];
}
