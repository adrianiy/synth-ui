import { FiltersState } from '../../models';
import { cleanFiltersCache } from '../utils/filter.utils';

export const loadUserCacheAndVersion = (user: any) => (state: FiltersState) => {
    const cacheId = `Drive.Filters.${state.screen}.${user.userDetails.idUsuario}`;
    const cacheVersion = localStorage.getItem('Drive.Filters.Version');

    return {
        ...state,
        cacheId,
        cacheVersion
    };
};

export const cleanCacheIfVersionNotMatch = (filterVersion: string) => (state: FiltersState) => {
    const { cacheVersion } = state;

    if (!cacheVersion || cacheVersion !== filterVersion) {
        cleanFiltersCache(filterVersion);
    }

    return state;
};

export const saveFiltersInStorage = (state: FiltersState) => {
    let { savedFilters, screen, cacheId, filtersConfig } = state;
    if (!savedFilters) {
        savedFilters = {};
    }
    localStorage.setItem(`Drive.Filters.${screen}.${cacheId}`, JSON.stringify(filtersConfig));

    return {
        ...state,
        savedFilters: filtersConfig
    };
};
