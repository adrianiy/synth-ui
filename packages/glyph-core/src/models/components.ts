import { Cell } from './common';

export interface SelectorOption {
    name: string;
    active?: boolean;
    value?: any;
}

export interface ComplexSelectorOptions {
    [key: string]: SelectorOption[];
}

export interface Tab {
    description: string;
    active?: boolean;
}

export interface Button {
    title?: Cell;
    subtitle?: Cell;
    active?: boolean;
    action: () => void;
}
