import { ToasterTypes } from '../enums';
import { FilterConfig, FilterOptionHeader } from './filters';

export interface ToasterEvent {
    text: string;
    type: ToasterTypes;
    icon: string;
}

export interface FilterSelectEvent {
    option: FilterOptionHeader;
    filterCode?: string;
    isDefault?: boolean;
}

export interface FilterUpdateEvent {
    filterCode?: string;
    filter: FilterConfig;
    checkMultiSelect?: boolean;
}
