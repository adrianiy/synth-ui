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
export interface QueryFilter {
    key: string;
    op: string;
    value: any;
}
export interface FilterOption {
    code: any;
    description: string;
    display: boolean;
    active?: boolean;
    descriptionSearch?: string;
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
    usableIn: string[];
    description: string;
    plural: string;
    key: string;
    visible: boolean;
    multiSelect?: boolean;
    searchText?: string;
    related?: string[];
    selected: SelectedFilter[];
    options: FilterOptionHeader[];
    version?: string;
}
export interface FiltersConfig {
    search?: any;
    budgetDate?: FilterConfig[];
    date?: FilterConfig[];
    product?: FilterConfig[];
    location?: FilterConfig[];
    marketplaces?: FilterConfig[];
    visibility?: FilterConfig[];
}
export interface FiltersState {
    baseFilterEntities?: FiltersConfig;
    filterVersion?: string;
    filtersConfig?: FiltersConfig;
    baseFilters?: FiltersConfig;
    screen?: string;
    savedFilters?: FiltersConfig;
    initialFilters?: any;
    defaultFilters?: QueryFilter[];
    restrictedFilters?: any[];
    restrictedParents?: any;
    dateRanges?: any[];
    dateConfig?: CalendarConfig;
    cacheId?: string;
    cacheVersion?: string;
    notUsedSharedFilters?: any[];
}
