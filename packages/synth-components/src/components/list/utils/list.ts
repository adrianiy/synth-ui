import { Row } from '../list.model';

export const expandRows = (list: any, selectedCountryIdx: number) => {
    const shouldExpandAll = selectedCountryIdx === 0;

    if (shouldExpandAll) {
        return list.map((row: Row) => ({ ...row, expanded: true }));
    } else if (selectedCountryIdx) {
        return list.map((row: Row, index: number) =>
            index === selectedCountryIdx ? { ...row, _expanded: true } : row,
        );
    }
};

export const filterEmptyRows = (list: Row[], fields: any[]) => {
    return list.filter((row: Row) => fields.every((field: any) => row[field]));
};

export const sortList = (list: Row[], field: string, direction: string) => {
    const sortFunction = (a: Row, b: Row) => {
        if (direction === 'asc') {
            return a[field].value - b[field].value;
        } else {
            return b[field].value - a[field].value;
        }
    };

    return list.sort(sortFunction);
};
