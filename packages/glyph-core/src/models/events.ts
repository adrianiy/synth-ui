import { ToasterTypes } from '../enums';
import { FilterOptionHeader } from './filters';

export interface ToasterEvent {
    text: string;
    type: ToasterTypes;
    icon: string;
}

export interface FilterSelectEvent {
    option: FilterOptionHeader;
    filterCode?: string;
    defaultOption?: boolean;
}
