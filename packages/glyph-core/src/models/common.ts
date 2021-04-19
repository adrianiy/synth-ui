import { DecorationType } from '../enums';

export interface Cell {
    value: any;
    format: string;
    decoration: DecorationType;
}
