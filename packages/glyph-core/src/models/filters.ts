import { Moment } from 'moment';
import { ComparableType, UIInterface } from './../enums';
import { SelectorOption } from './components';

export interface DateRange {
    description: string;
    startDate: Date;
    endDate: Date;
    isDefault?: boolean;
}
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
    description: string;
    startDate?: Date;
    endDate?: Date;
    compType?: ComparableType;
    display?: boolean;
    active?: boolean;
    hideFilter?: boolean;
    operationIn?: boolean;
    parents?: string[];
    changeOperationValue?: boolean;
    brand?: any;
    _originalDescription?: string;
}
export interface FilterOptionHeader extends FilterOption {
    header?: boolean;
    hammock?: boolean;
    expanded?: boolean;
    children?: FilterOption[];
}
export interface SelectedFilter extends FilterOptionHeader {
    isDefault?: boolean;
    type?: string;
}
export interface FilterConfig {
    version?: string;
    description?: string;
    searchPlaceholder?: string;
    plural?: string;
    key?: string;
    visible?: boolean;
    multiSelect?: boolean;
    related?: string[];
    relatedByBrand?: boolean;
    relatedByProduct?: boolean;
    interface?: UIInterface;
    selected?: SelectedFilter[];
    options?: FilterOptionHeader[];
}
export interface Search extends FilterConfig {
    lastSearchs: any[];
    activePos: number;
    suggestions: any[];
    commonSearchs: CommonSearch[][];
}
export interface DateFilter extends FilterConfig {
    minDate?: Date;
    maxDate?: Date;
    minComparableDate?: Date;
    maxComparableDate?: Date;
    comparableOptions?: SelectorOption[];
    comparableType?: ComparableType;
    dateRanges?: DateRange[];
    singleSelect?: boolean;
    months?: number;
    compDates?: SelectedFilter[];
}
export interface FiltersConfig {
    search?: Search;
    date?: DateFilter;
    [key: string]: FilterConfig | Search | DateFilter;
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
    savedFilters?: FiltersConfig;
    baseFilters?: FiltersConfig;
    screen?: string;
    initialFilters?: InitialFilter[];
    restrictedFilters?: any[];
    restrictedParents?: any;
    dateRanges?: { [key: string]: Moment[] };
    cacheId?: string;
    cacheVersion?: string;
}
