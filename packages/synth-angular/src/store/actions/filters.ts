import { filterActions } from '../reducers/filters';

const initialize = (filterEntities: any, screen: any, baseConfig: any, initialFilters: any) => ({
    type: filterActions.initialize,
    props: {
        filterEntities,
        screen,
        baseConfig,
        initialFilters
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
    initialize,
    setFilters,
    setDateRanges,
    setDateConfig,
    saveFilters
};

export default actions;
