import { Row } from 'glyph-core-poc';
export declare const filterEmptyRows: (list: Row[], fields: any[]) => Row[];
export declare const sortList: (list: Row[], field: string, direction: string) => Row[];
export declare const parseExcelData: (data: Row[], fields: string[]) => any[];
