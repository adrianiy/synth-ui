import { FiltersConfig, FilterSelectEvent, FilterUpdateEvent } from '../models';
import { filterActions } from '../reducers/filters';

const setScreen = (screen: string) => ({
    type: filterActions.setScreen,
    screen,
});

const loadCacheKeys = (user, filterVersion: string) => ({
    type: filterActions.loadCacheKeys,
    props: {
        user,
        filterVersion,
    },
});

const initialize = (filterEntities: any, screen: string, baseConfig: FiltersConfig, initialFilters: any) => ({
    type: filterActions.initialize,
    props: {
        filterEntities,
        screen,
        baseConfig,
        initialFilters,
    },
});

const setFilters = (filtersConfig: any) => ({
    type: filterActions.setFilters,
    filtersConfig,
});

const selectOption = (selection: FilterSelectEvent) => ({
    type: filterActions.selectOption,
    selection,
});

const clearFilter = (filterCode: string) => ({
    type: filterActions.clearFilter,
    filterCode,
});

const clearAll = () => ({
    type: filterActions.clearAll,
});

const updateFilter = (update: FilterUpdateEvent) => ({
    type: filterActions.updateFilter,
    update,
});

const updateFiltersConfig = (filtersConfig: FiltersConfig) => ({
    type: filterActions.updateFilterConfig,
    filtersConfig,
});

const saveFilters = () => ({
    type: filterActions.saveFilters,
});

const actions = {
    setScreen,
    loadCacheKeys,
    initialize,
    selectOption,
    clearFilter,
    clearAll,
    updateFilter,
    updateFiltersConfig,
    setFilters,
    saveFilters,
};

export default actions;
