import { pipe } from './../utils/utils';
import { initialState } from '../config/filters';
import { FiltersConfig, FiltersState } from '../models/filters';
import {
    loadSavedFilters,
    saveOriginalDescriptions,
    selectRestrictedFilters,
    setInitialFilter,
    recoverSharedFilters,
    updateFiltersWithEntities,
    setDefaultPositions,
} from './middlewares/initializer.middlewares';
import {
    cleanCacheIfVersionNotMatch,
    loadUserCacheAndVersion,
    saveFiltersInStorage,
} from './middlewares/storage.middlewares';
import {
    checkFilterRelations,
    clearFilter,
    clearAllFilters,
    selectOption,
    translateDescriptions,
    updateFilter,
    resetOrdinalCompType,
    setQueryFilters,
} from './middlewares/filter.middlewares';
import cloneDeep from 'lodash/cloneDeep';
import { FilterSelectEvent, FilterUpdateEvent } from 'src/models';

export const filterActions = {
    setScreen: 'SETSCREEN',
    loadCacheKeys: 'SETCACHEKEYS',
    initialize: 'INITIALIZE',
    translate: 'TRANSLATEFILTERS',
    setFilters: 'SETFILTERS',
    selectOption: 'SELECTOPTION',
    clearFilter: 'CLEARFILTER',
    clearAll: 'CLEARALL',
    updateFilter: 'UPDATEFILTER',
    saveFilters: 'SAVEFILTERS',
};

// SETTERS

/**
 * Saves user custom filters configuration in [[_baseFilterEntities]] variable
 */
const setFilters = (state: FiltersState, filtersConfig: FiltersConfig): FiltersState => {
    return {
        ...state,
        filtersConfig,
    };
};

/**
 * Saves filters in ***localStorage***
 */
const saveFilters = (state: FiltersState): FiltersState => {
    try {
        return saveFiltersInStorage(state);
    } catch (err) {
        return state;
    }
};

/**
 * Select an option and save results in ***localStorage***
 */
const selectOptionAndSave = (state: FiltersState, selection: FilterSelectEvent): FiltersState => {
    try {
        return pipe(state)(
            selectOption(selection),
            checkFilterRelations(selection),
            resetOrdinalCompType,
            setQueryFilters,
            saveFiltersInStorage,
        );
    } catch (err) {
        console.error(err);
        return state;
    }
};

/**
 * Clear filter selection and save results in ***localStorage***
 */
const clearOptionsAndSave = (state: FiltersState, filterCode: string): FiltersState => {
    try {
        return pipe(state)(clearFilter(filterCode), checkFilterRelations(), setQueryFilters, saveFiltersInStorage);
    } catch (err) {
        console.error(err);
        return state;
    }
};

/**
 * Clear all filter selections and save results in ***localStorage***
 */
const clearAll = (state: FiltersState): FiltersState => {
    try {
        return pipe(state)(clearAllFilters, checkFilterRelations(), setQueryFilters, saveFiltersInStorage);
    } catch (err) {
        console.error(err);
        return state;
    }
};

/**
 * Update filter configuration for a specified filter and save results in ***localStorage***
 */
const updateFilterAndSave = (state: FiltersState, update: FilterUpdateEvent) => {
    return pipe(state)(updateFilter(update), saveFiltersInStorage);
};

// INIT METHODS

/**
 * Reset filters with FiltersConfig base data, and update it with results from
 * getFilters method, finally translates filters description
 */
const initializeFilters = (
    state: FiltersState,
    { filterEntities, screen, baseConfig, initialFilters, translateFn }: any,
) => {
    try {
        return pipe({
            ...state,
            screen,
            filtersConfig: baseConfig,
            baseFilters: cloneDeep(baseConfig),
            initialFilters,
            restrictedFilters: [],
            restrictedParents: {},
        })(
            setDefaultPositions,
            loadSavedFilters,
            updateFiltersWithEntities(filterEntities),
            selectRestrictedFilters,
            recoverSharedFilters,
            saveOriginalDescriptions,
            checkFilterRelations(),
            setInitialFilter(),
            translateDescriptions(translateFn),
            recoverSharedFilters,
            setQueryFilters,
            saveFiltersInStorage,
        );
    } catch (err) {
        console.error(err);
        return state;
    }
};

/*
 * Translate filter descriptions
 */
const translateFilters = (state: FiltersState, translateFn: (arg0: string) => string) => {
    return pipe(state)(translateDescriptions(translateFn));
};

/*
 * load cache keys for local storage filters
 */
const loadCacheKeys = (state: FiltersState, { user, filterVersion }) => {
    try {
        return pipe(state)(loadUserCacheAndVersion(user), cleanCacheIfVersionNotMatch(filterVersion));
    } catch (err) {
        return state;
    }
};

/*
 * set current screen filters
 */
const setScreen = (state: FiltersState, screen: string): FiltersState => {
    return {
        ...state,
        screen,
    };
};

const filterReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case filterActions.setScreen:
            return setScreen(state, action.screen);
        case filterActions.loadCacheKeys:
            return loadCacheKeys(state, action.props);
        case filterActions.initialize:
            return initializeFilters(state, action.props);
        case filterActions.translate:
            return translateFilters(state, action.translateFn);
        case filterActions.setFilters:
            return setFilters(state, action.filtersConfig);
        case filterActions.selectOption:
            return selectOptionAndSave(state, action.selection);
        case filterActions.clearFilter:
            return clearOptionsAndSave(state, action.filterCode);
        case filterActions.clearAll:
            return clearAll(state);
        case filterActions.updateFilter:
            return updateFilterAndSave(state, action.update);
        case filterActions.saveFilters:
            return saveFilters(state);
        default:
            return state;
    }
};

export default filterReducer;
