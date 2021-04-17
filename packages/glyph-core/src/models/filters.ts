import { Moment } from 'moment';
import { UIInterface } from './../enums';

export interface CalendarConfig {
    /** minimun selectable date in calendar */
    minCalDate: any;
    /** maximum selectable date in calendar */
    maxCalDate: any;
    /** start date */
    startDate: any;
    /** end date */
    endDate: any;
    /** input start date */
    inputMin: any;
    /** input end date */
    inputMax: any;
    /** start comparable date */
    startCompDate: any;
    /** end comparable date */
    endCompDate: any;
    /** input start comparable date */
    inputMinComp: any;
    /** input end comparable date */
    inputMaxComp: any;
    /** date format */
    format: string;
    /** predefined range dates */
    dateRanges: { [clave: string]: Array<any> };
    /**
     * Selected range from [[rangeKeys]]
     */
    selectedRange: string;
    /** comparable type */
    compType: string;
    /** disbale custom comparable flag */
    customDisabled?: boolean;
    /** ordinal enabled */
    ordinal?: boolean;
    /** ordinal entities service */
    ordinalService?: any;
    /** current active input */
    activeInput: string;
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
    code: any;
    description: string;
    startDate?: string;
    endDate?: string;
    display: boolean;
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
export interface SelectedFilter {
    default?: boolean;
    description: string;
    option: FilterOptionHeader;
}
export interface FilterConfig {
    version?: string;
    usableIn?: string[];
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
    savedFilters?: FiltersConfig;
    baseFilters?: FiltersConfig;
    dateConfig?: CalendarConfig;
    screen?: string;
    initialFilters?: InitialFilter[];
    restrictedFilters?: any[];
    restrictedParents?: any;
    dateRanges?: { [key: string]: Moment[] };
    cacheId?: string;
    cacheVersion?: string;
}
