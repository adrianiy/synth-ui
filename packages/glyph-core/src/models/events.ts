import { ComparableType, ToasterTypes } from '../enums';
import { FilterConfig, FilterOptionHeader } from './filters';

export interface ToasterEvent {
    text: string;
    type: ToasterTypes;
    icon: string;
}

export interface DateSelectionEvent {
    startDate: Date;
    endDate: Date;
    description?: string;
    isDefault?: boolean;
}

export interface FilterSelectEvent {
    option: FilterOptionHeader;
    comparableType?: ComparableType;
    filterCode?: string;
    isDefault?: boolean;
}

export interface FilterUpdateEvent {
    filterCode?: string;
    filter: FilterConfig;
    checkMultiSelect?: boolean;
}
