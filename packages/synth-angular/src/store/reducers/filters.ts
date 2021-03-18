import { defaultConfig } from '../config/filters';
import { FiltersConfig, FiltersState } from '../models/filters';

export const filterActions = {
    initialize: 'INITIALIZE',
    setFilters: 'SETFILTERS',
    setDateConfig: 'SETDATECONFIG',
    setDateRanges: 'SETDATERANGES',
    saveFilters: 'SAVEFILTERS'
};

const initialState: FiltersState = {
    baseFilterEntities: undefined,
    filterVersion: '0.0.0',
    filtersConfig: undefined,
    baseFilters: undefined,
    screen: undefined,
    savedFilters: {},
    initialFilters: {},
    defaultFilters: [ { key: 'cod_brand', op: 'in', value: [ 1, 16 ] } ],
    restrictedFilters: [],
    restrictedParents: {},
    dateRanges: undefined,
    dateConfig: undefined,
    cacheId: undefined,
    cacheVersion: undefined,
    notUsedSharedFilters: []
};

// SETTERS

/**
 * Saves user custom filters configuration in [[_baseFilterEntities]] variable
 *
 * @param filtersConfig object with filters configuration
 */
const setFilters = (state: FiltersState, filtersConfig: FiltersConfig): FiltersState => {
    return {
        ...state,
        filtersConfig
    };
};

/**
 * Saves date configuration used in application
 *
 * @param dateConfig date configuration
 */
const setDateConfig = (state: FiltersState, dateConfig: any): FiltersState => {
    Object.keys(defaultConfig)
        .filter(key => !Object.keys(dateConfig).includes(key))
        .forEach(key => (dateConfig[key] = defaultConfig[key]));

    return {
        ...state,
        dateConfig
    };
};

/**
 * Saves date ranges configuration used in application
 *
 * @param dateRanges date ranges configuration
 */
const setDateRanges = (state: FiltersState, dateRanges: any): FiltersState => {
    return {
        ...state,
        dateRanges
    };
};

/**
 * Saves filters in ***localStorage***
 */
const saveFilters = (state: FiltersState): FiltersState => {
    if (!state.savedFilters?.[state.screen]) {
        state.savedFilters[state.screen] = {};
    }
    state.savedFilters[state.screen] = { ...state.filtersConfig };

    return state;
};

// INIT METHODS

/**
 * Reset filters with [[FiltersConfig]] base data, and update it with results from
 * [[getFilters]] method, finally translates filters description
 */
const initializeFilters = (state: FiltersState, { filterEntities, screen, baseConfig, initialFilters }: any) => {
    try {
        const newState = {
            ...state,
            screen,
            filtersConfig: baseConfig,
            restrictedFilters: [],
            restrictedParents: {}
        };
        return saveFilters(newState);
    } catch (err) {
        return state;
    }
};

const filterReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case filterActions.initialize:
            return initializeFilters(state, action.props);
        case filterActions.setFilters:
            return setFilters(state, action.filtersConfig);
        case filterActions.setDateRanges:
            return setDateRanges(state, action.dateRanges);
        case filterActions.setDateRanges:
            return setDateConfig(state, action.dateConfig);
        case filterActions.saveFilters:
            return saveFilters(state);
        default:
            return state;
    }
};

export default filterReducer;
