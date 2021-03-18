import { Row } from '../list.model';

const cloneArray = (array: any) => JSON.parse(JSON.stringify(array));

export const expandRows = (list: any, selectedCountryIdx: number) => {
    const newList = cloneArray(list);
    const shouldExpandAll = selectedCountryIdx === 0;

    if (shouldExpandAll) {
        newList.forEach((row: { [x: string]: boolean }) => (row['_expanded'] = true));
    } else if (selectedCountryIdx) {
        newList[selectedCountryIdx]['_expanded'] = true;
    }

    return newList;
};

export const filterEmptyRows = (list: Row[], fields: any[]) => {
    const newList = cloneArray(list);

    const filteredList = newList.filter((row: { [x: string]: any }) =>
        fields.every((field: string | number) => row[field]),
    );

    return filteredList;
};

export const sortWorldWideCountries = (list: any, field: string | number) => {
    const newList = cloneArray(list);
    const isWorldWideCheck = (row: { [x: string]: any }) => row['market'] === 'WorldWide' && !row['_isTotal'];
    const notWorldWideCountries = newList.filter((row: any) => !isWorldWideCheck(row));
    const worldWideCountries = newList.filter(isWorldWideCheck);
    const sortedWorldWideCountries = worldWideCountries.sort(
        (a: { [x: string]: number }, b: { [x: string]: number }) => b[field] - a[field],
    );

    return notWorldWideCountries.concat(sortedWorldWideCountries);
};

export const sortList = (list: any, field: string, direction: string) => {
    const newList = cloneArray(list);
    const sortFunction = (a: { [x: string]: number }, b: { [x: string]: number }) => {
        if (direction === 'asc') {
            return a[field] - b[field];
        } else {
            return b[field] - a[field];
        }
    };

    return newList.sort(sortFunction);
};

export const capitalize = (text: string) => `${text[0].toUpperCase()}${text.slice(1).toLowerCase()}`;
