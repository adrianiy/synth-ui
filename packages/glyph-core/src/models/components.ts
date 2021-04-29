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

export interface UserMenuConfiguration {
    themes: SelectorOption[];
    languages: SelectorOption[];
    decimals: boolean;
    customConfig: boolean;
}

export interface SortableAction {
    icon: string;
    action: () => void;
}

export interface SortableOption {
    name?: string;
    icon?: boolean;
    notSortable?: boolean;
    action?: SortableAction;
    [key: string]: any;
}
