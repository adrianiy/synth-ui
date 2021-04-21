import { FiltersState } from '../../models';
import { parseHash, pipe } from '../../utils/utils';
import { selectOptionAux } from './../utils/filter.utils';
import { applySharedDates, applySharedFilters } from './../utils/shared.utils';
import { selectFilterOptions, updateOptionsWithEntities, updateSavedFilters } from './../utils/initializer.utils';
import { FilterOptionHeader } from '../../models/filters';

/**
 * Recovers saved filters from localstorage
 */
export const loadSavedFilters = (state: FiltersState): FiltersState => {
    const { screen, cacheId, filtersConfig } = state;
    let savedFilters = localStorage.getItem(`Drive.Filters.${screen}.${cacheId}`) as any;

    if (savedFilters) {
        // update saved filters with filtersConfig
        savedFilters = updateSavedFilters(JSON.parse(savedFilters), filtersConfig);
    }
    return {
        ...state,
        filtersConfig: savedFilters || filtersConfig,
        savedFilters,
    };
};

/**
 * Recover shared filters from URL
 */
export const recoverSharedFilters = (state: FiltersState): FiltersState => {
    const params = new URLSearchParams(location.search);
    const filtersHash = params.get('filters');
    const comparableFiltersHash = params.get('comparableFilters');

    if (filtersHash && state.filtersConfig) {
        const filters = parseHash(filtersHash);
        const comparableFilters = parseHash(comparableFiltersHash);

        history.replaceState({}, location.href.split('?')[0]);

        return pipe(state)(applySharedDates(filters, comparableFilters), applySharedFilters(filters));
    }

    return state;
};

/*
 * saves original descriptions so we don't have to translate back to original langauage
 */
export const saveOriginalDescriptions = (state: FiltersState) => {
    let { filtersConfig } = state;

    if (filtersConfig) {
        Object.keys(filtersConfig).forEach(key => {
            let filter = filtersConfig[key];
            const options = filter.options?.map((option: FilterOptionHeader) => {
                const { children, description } = option;
                return {
                    ...option,
                    _originalDescription: description,
                    children: children?.map(child => ({ ...child, _originalDescription: child.description })),
                };
            });

            filtersConfig = { ...filtersConfig, [key]: { ...filter, options } };
        });
    }

    return {
        ...state,
        filtersConfig,
    };
};

// select filters restricted by user roles
export const selectRestrictedFilters = (state: FiltersState) => {
    let { restrictedFilters, filtersConfig } = state;

    restrictedFilters.forEach((key: string) => {
        let filter = filtersConfig[key];
        let { selected, options } = filter;

        if (filter) {
            if (selected.length > options.length || !selected.length) {
                filter = { ...filter, selected: [] };

                filtersConfig = { ...filtersConfig, [key]: selectFilterOptions(filter) };
            }
        }
    });

    return {
        ...state,
        filtersConfig,
    };
};

// update saved filters with new filter entities
export const updateFiltersWithEntities = (filterEntities: any) => (state: FiltersState): FiltersState => {
    let { filtersConfig } = state;

    Object.keys(filtersConfig).forEach(key => {
        let { options, ...rest } = filtersConfig[key];
        const entity = filterEntities[key];

        if (entity) {
            options = updateOptionsWithEntities(options, entity);
            filtersConfig = { ...filtersConfig, [key]: { ...rest, options } };
        }
    });

    return {
        ...state,
        filtersConfig,
    };
};

export const filterUsableInScreenFilters = (state: FiltersState) => {
    let { filtersConfig, screen } = state;

    Object.keys(filtersConfig).forEach(key => {
        if (!filtersConfig[key].usableIn.includes(screen)) {
            const { [key]: remove, ...rest } = filtersConfig;

            filtersConfig = rest;
        }
    });

    return {
        ...state,
        filtersConfig,
    };
};

/**
 * Set default screen filters
 */
export const setInitialFilter = (applyNotDefault = true) => (state: FiltersState): FiltersState => {
    let { initialFilters, filtersConfig } = state;

    if (!initialFilters.length) {
        return state;
    }

    initialFilters.forEach(initial => {
        const filter = filtersConfig[initial.type];
        const { selected, options } = filter;
        const haveSelected = selected.length;

        if (!haveSelected) {
            const initialOption = initial.optionGetter(options);
            const willApply = initial.default || applyNotDefault;

            if (initialOption && willApply) {
                const newFilterState = {
                    ...filter,
                    ...selectOptionAux(filter, initialOption, initial.default).filter,
                };
                filtersConfig = { ...filtersConfig, [initial.type]: newFilterState };
            }
        }
    });

    return {
        ...state,
        filtersConfig,
    };
};
