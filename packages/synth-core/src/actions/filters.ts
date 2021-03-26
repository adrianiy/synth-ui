import { FiltersConfig } from '../models';
import { filterActions } from '../reducers/filters';

const setScreen = (screen: string) => ({
    type: filterActions.setScreen,
    props: {
        screen
    }
});

const loadCacheKeys = (user, filterVersion) => ({
    type: filterActions.loadCacheKeys,
    props: {
        user,
        filterVersion
    }
});

const initialize = (
    filterEntities: any,
    screen: string,
    baseConfig: FiltersConfig,
    initialFilters: any,
    translateFn: (arg0: string) => string
) => ({
    type: filterActions.initialize,
    props: {
        filterEntities,
        screen,
        baseConfig,
        initialFilters,
        translateFn
    }
});

const translate = (translateFn: (arg0: string) => string) => ({
    type: filterActions.translate,
    props: {
        translateFn
    }
});

const setFilters = (filtersConfig: any) => ({
    type: filterActions.setFilters,
    filtersConfig
});

const setDateRanges = (dateRanges: any) => ({
    type: filterActions.setDateRanges,
    dateRanges
});

const setDateConfig = (dateConfig: any) => ({
    type: filterActions.setDateConfig,
    dateConfig
});

const saveFilters = () => ({
    type: filterActions.saveFilters
});

const actions = {
    setScreen,
    loadCacheKeys,
    initialize,
    setFilters,
    setDateRanges,
    setDateConfig,
    saveFilters
};

export default actions;
