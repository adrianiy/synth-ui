import { ComparableType, ToasterTypes } from '../enums';
import { SortableOption } from './components';
import { FilterConfig, FilterOptionHeader } from './filters';

export interface ToasterEvent {
    text: string;
    type: ToasterTypes;
    icon: string;
}

export interface FilterSelectEvent {
    option?: FilterOptionHeader;
    startDate?: Date;
    endDate?: Date;
    comparableStartDate?: Date;
    comparableEndDate?: Date;
    description?: string;
    comparableType?: ComparableType;
    filterCode?: string;
    isDefault?: boolean;
}

export interface FilterUpdateEvent {
    filterCode?: string;
    filter: FilterConfig;
    checkMultiSelect?: boolean;
}

export interface SortableChildrenEvent {
    item: SortableOption;
    sortedList: string[];
}
