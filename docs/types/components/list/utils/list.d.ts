import { Row } from '../list.model';
export declare const expandRows: (list: any, selectedCountryIdx: number) => any;
export declare const filterEmptyRows: (list: Row[], fields: any[]) => Row[];
export declare const sortList: (list: Row[], field: string, direction: string) => Row[];
