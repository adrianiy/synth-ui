import { ComparableType, UIInterface } from './../enums';
import { SelectorOption } from './components';

export interface CommonSearch {
    description: string;
    type: string;
    parent: string;
    code: any;
}
export interface QueryFilter {
    key: string;
    op: string;
    value: any;
}
export interface FilterOption {
    code?: any;
    description?: string;
    startDate?: Date;
    endDate?: Date;
    comparableStartDate?: Date;
    comparableEndDate?: Date;
    comparableType?: ComparableType;
    isDefault?: boolean;
    display?: boolean;
    active?: boolean;
    hideFilter?: boolean;
    operationIn?: boolean;
    parents?: string[];
    extraCode?: any;
    changeOperationValue?: boolean;
    brand?: number[];
    position?: number;
    _originalDescription?: string;
}
export interface FilterOptionHeader extends FilterOption {
    header?: boolean;
    hammock?: boolean;
    expanded?: boolean;
    children?: FilterOption[];
}
export interface FilterConfig {
    version?: string;
    position?: number;
    description?: string;
    searchPlaceholder?: string;
    plural?: string;
    key?: string;
    visible?: boolean;
    multiSelect?: boolean;
    related?: string[];
    extraFilter?: string;
    relatedByBrand?: boolean;
    relatedByProduct?: boolean;
    interface?: UIInterface;
    options?: FilterOptionHeader[];
    [key: string]: any;
}
export interface Search extends FilterConfig {
    lastSearchs: any[];
    activePos: number;
    suggestions: any[];
    commonSearchs: CommonSearch[][];
}
export interface FiltersConfig {
    search?: Search;
    [key: string]: FilterConfig | Search;
}
export interface InitialFilter {
    type: string;
    default: boolean;
    description: string;
    optionGetter: (options: FilterOptionHeader[]) => any;
}
export interface FiltersState {
    filterVersion?: string;
    filtersConfig?: FiltersConfig;
    queryFilters?: QueryFilter[];
    savedFilters?: FiltersConfig;
    baseFilters?: FiltersConfig;
    screen?: string;
    initialFilters?: InitialFilter[];
    restrictedFilters?: any[];
    restrictedParents?: any;
    cacheId?: string;
    cacheVersion?: string;
}
