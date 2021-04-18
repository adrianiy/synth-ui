import { ToasterTypes } from '../enums';

export interface ToasterEvent {
    text: string;
    type: ToasterTypes;
    icon: string;
}
