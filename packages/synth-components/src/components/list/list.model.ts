import { DecorationType } from '../../utils/color.utils';

export interface Cell {
    value: any;
    decoration: DecorationType;
    format?: string;
    sign?: boolean;
    negativeSign?: boolean;
    showZero?: boolean;
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
