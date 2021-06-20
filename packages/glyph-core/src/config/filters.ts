import { FiltersState } from '../models';

export const initialState: FiltersState = {
    filterVersion: '0.0.0',
    filtersConfig: undefined,
    baseFilters: undefined,
    screen: undefined,
    savedFilters: {},
    initialFilters: [],
    restrictedFilters: [],
    restrictedParents: {},
    cacheId: undefined,
    cacheVersion: undefined,
};
