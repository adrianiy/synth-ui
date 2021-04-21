import { DecorationType } from '../enums';

export interface Cell {
    value: any;
    format: string;
    sign?: boolean;
    decoration: DecorationType;
}
