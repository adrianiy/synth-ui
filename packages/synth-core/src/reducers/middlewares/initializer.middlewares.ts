import { FilterConfig, FiltersState } from '../../models';
import { parseHash, pipe } from '../../utils/utils';
import { selectOption } from './../utils/filter.utils';
import { resetDefaultDateValues, resetSearch, resetTagSearch } from './../utils/reset.utils';
import { applySharedDates, applySharedFilters } from './../utils/shared.utils';
import { selectFilterOptions, updateOptionsWithEntities, updateSavedFilters } from './../utils/initializer.utils';
import { FilterOptionHeader } from '../../models/filters';

/**
 * Recovers saved filters from localstorage
 */
export const loadSavedFilters = (state: FiltersState): FiltersState => {
    const { screen, cacheId, dateRanges, filtersConfig } = state;
    let savedFilters = localStorage.getItem(`Drive.Filters.${screen}.${cacheId}`) as any;

    if (savedFilters) {
        savedFilters = JSON.parse(savedFilters);
        if (savedFilters.date) {
            // reset dates if they belong to a default range
            savedFilters['date'] = resetDefaultDateValues(savedFilters['date'], dateRanges);
        }
        if (savedFilters.search) {
            // reset search values
            savedFilters['search'] = resetSearch(savedFilters['search'], filtersConfig.search.commonSearchs);
        }
        if (savedFilters.product) {
            // reset tag values
            savedFilters['product'] = resetTagSearch(savedFilters['product']);
        }
        // update saved filters with filtersConfig
        savedFilters = updateSavedFilters(savedFilters, filtersConfig);
    } else {
        savedFilters = filtersConfig;
    }
    return {
        ...state,
        filtersConfig: savedFilters,
        savedFilters
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
            const filter = filtersConfig[key]?.map((filter: FilterConfig) => {
                const options = filter.options?.map((option: FilterOptionHeader) => {
                    const { children, description } = option;
                    return {
                        ...option,
                        _originalDescription: description,
                        children: children?.map(child => ({ ...child, _originalDescription: child.description }))
                    };
                });

                return {
                    ...filter,
                    options
                };
            });

            filtersConfig = { ...filtersConfig, [key]: filter };
        });
    }

    return {
        ...state,
        filtersConfig
    };
};

// select filters restricted by user roles
export const selectRestrictedFilters = (state: FiltersState) => {
    let { restrictedFilters, filtersConfig } = state;

    restrictedFilters.forEach((key: string) => {
        Object.keys(filtersConfig).forEach((filterKey: string) => {
            const parentFilter = filtersConfig[filterKey].map((filter: FilterConfig) => {
                const matches = filter.key === key;

                if (matches) {
                    if (filter.selected.length > filter.options.length || !filter.selected.length) {
                        filter.selected = [];

                        return selectFilterOptions(filter);
                    }
                } else {
                    return filter;
                }
            });

            filtersConfig = { ...filtersConfig, [key]: parentFilter };
        });
    });

    return {
        ...state,
        filtersConfig
    };
};

// update saved filters with new filter entities
export const updateFiltersWithEntities = (filterEntities: any) => (state: FiltersState): FiltersState => {
    let { filtersConfig } = state;

    Object.entries(filtersConfig).forEach(([ key, parentFilter ]: [string, FilterConfig[]]) => {
        const newFilter = parentFilter?.map?.((filter: FilterConfig) => {
            let { options, key } = filter;
            const entityMatch = filterEntities[key];

            if (entityMatch) {
                options = updateOptionsWithEntities(filter.options, entityMatch);
            }

            return { ...filter, options };
        });
        filtersConfig = { ...filtersConfig, [key]: newFilter };
    });

    return {
        ...state,
        filtersConfig
    };
};

export const filterUsableInScreenFilters = (state: FiltersState) => {
    let { filtersConfig, screen } = state;

    Object.keys(filtersConfig).forEach(filterKey => {
        filtersConfig = {
            ...filtersConfig,
            [filterKey]: filtersConfig[filterKey].filter((filter: { usableIn: string[] }) =>
                filter.usableIn.includes(screen)
            )
        };
    });

    return {
        ...state,
        filtersConfig
    };
};

/**
 * Set default screen filters
 */
export const setInitialFilter = (applyNotDefault = true) => (state: FiltersState): FiltersState => {
    const { initialFilters, filtersConfig, screen } = state;

    if (!Object.keys(initialFilters).length) {
        return state;
    }

    Object.keys(initialFilters[screen]).forEach(k => {
        filtersConfig[k]?.forEach((filter: FilterConfig) => {
            const haveSelected = filter.selected.length;
            if (!haveSelected) {
                const initialFilter = initialFilters[screen][k].find(
                    (initFilter: any) => initFilter.type === filter.key
                );
                const initialOption = initialFilter?.optionGetter(filter.options);
                const willApply = initialFilter.default || applyNotDefault;

                if (initialOption && willApply) {
                    selectOption(initialOption, initialFilter.default, filter, false);
                }
            }
        });
    });

    return {
        ...state,
        filtersConfig
    };
};
