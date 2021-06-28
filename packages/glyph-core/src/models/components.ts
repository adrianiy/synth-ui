import { SortableIcon } from '../enums';
import { Cell } from './common';

export interface SelectorOption {
    name: string;
    active?: boolean;
    value?: any;
    disabled?: boolean;
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
    action: (item: SortableOption) => void;
}

export interface SortableOption {
    id: string;
    name?: string;
    children?: SortableOption[];
    expanded?: boolean;
    icon?: SortableIcon;
    notSortable?: boolean;
    action?: SortableAction;
    style?: { [key: string]: any };
    [key: string]: any;
}

export interface Article {
    image?: string;
    plain_image?: string;
    partnumber: string;
    description?: string;
    pvps?: any[];
    new?: any[];
    pvpType?: string;
    tags: string[];
    [key: string]: any;
}

export interface RankingData {
    cod_section?: number;
    children?: Article[];
}

export interface RankingViewOptions {
    columns: number;
    innerColumns: number;
    rows: number;
    gap?: string;
    rowGap?: string;
    innerGap?: string;
}

export interface Crumb {
    name: string;
    callback?: (name: string) => void;
}
