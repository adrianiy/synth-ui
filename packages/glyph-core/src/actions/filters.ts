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

const initialize = (
    filterEntities: any,
    screen: string,
    baseConfig: FiltersConfig,
    initialFilters: any,
    translateFn: (arg0: string) => string,
) => ({
    type: filterActions.initialize,
    props: {
        filterEntities,
        screen,
        baseConfig,
        initialFilters,
        translateFn,
    },
});

const translate = (translateFn: (arg0: string) => string) => ({
    type: filterActions.translate,
    translateFn,
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

const saveFilters = () => ({
    type: filterActions.saveFilters,
});

const actions = {
    setScreen,
    loadCacheKeys,
    initialize,
    translate,
    selectOption,
    clearFilter,
    clearAll,
    updateFilter,
    setFilters,
    saveFilters,
};

export default actions;
