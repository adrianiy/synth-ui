import { FilterConfig, FilterSelectEvent, FiltersState, FilterUpdateEvent } from '../../models';
import {
    checkCleanIfMultiSelectChanges,
    cleanSelected,
    getCompType,
    isFilterActive,
    selectOptionAux,
    translateDescription,
} from '../utils/filter.utils';
import { checkRelations, filterRestrictedOptions } from '../utils/related.utils';

export const selectOption = (selected: FilterSelectEvent) => (state: FiltersState) => {
    const { filterCode, option, isDefault } = selected;
    const { filtersConfig } = state;
    const { filter } = selectOptionAux(filtersConfig[filterCode], { ...option, isDefault });

    return {
        ...state,
        filtersConfig: { ...filtersConfig, [filterCode]: filter },
    };
};

export const clearFilter = (filterCode: string) => (state: FiltersState) => {
    const { filtersConfig } = state;

    const filter = cleanSelected([ filtersConfig[filterCode] ])[0];

    return {
        ...state,
        filtersConfig: { ...filtersConfig, [filterCode]: filter },
    };
};

export const clearAllFilters = (state: FiltersState) => {
    const { filtersConfig } = state;

    return Object.keys(filtersConfig).reduce((acc, key) => clearFilter(key)(acc), state);
};

export const updateFilter = (update: FilterUpdateEvent) => (state: FiltersState) => {
    let { filter, filterCode } = update;
    const { filtersConfig } = state;

    if (update.checkMultiSelect) {
        filter = checkCleanIfMultiSelectChanges(filter);
    }

    return {
        ...state,
        filtersConfig: { ...filtersConfig, [filterCode]: filter },
    };
};

export const resetOrdinalCompType = (state: FiltersState) => {
    const { filtersConfig } = state;
    const compType = getCompType(filtersConfig);

    if (compType === 'ordinal') {
        const platformActive = isFilterActive(filtersConfig, 'platform');
        const countryActive = isFilterActive(filtersConfig, 'country');

        if (!platformActive && !countryActive) {
            const date = {
                ...filtersConfig.date,
                selected: filtersConfig.date.selected.filter(select => select.type !== 'comp'),
            };
            return {
                ...state,
                filtersConfig: { ...filtersConfig, date },
            };
        }
    }
    return state;
};

export const checkFilterRelations = (selected?: FilterSelectEvent) => (state: FiltersState): FiltersState => {
    let { filtersConfig, restrictedParents } = state;
    const { filterCode } = selected || {};
    const selectedFilter = filtersConfig[filterCode];
    const relatableFilterKeys = Object.keys(filtersConfig).filter(key => ![ 'search', 'date' ].includes(key));

    relatableFilterKeys.forEach((key: string) => {
        let filter = filtersConfig[key];
        const willCheckFilterRelations = !selectedFilter || key === filterCode;

        if (willCheckFilterRelations) {
            filtersConfig = checkRelations(key, filtersConfig);

            filter = filterRestrictedOptions(filter, restrictedParents);

            filtersConfig = { ...filtersConfig, [key]: filter };
        }
    });

    return {
        ...state,
        filtersConfig,
    };
};

export const translateDescriptions = (translateFn: (arg0: string) => string) => (state: FiltersState) => {
    let { filtersConfig } = state;

    if (filtersConfig) {
        Object.keys(filtersConfig).forEach(key => {
            const filter = filtersConfig[key];
            let { options } = filter;

            options = options?.map(option => {
                const { children } = option;

                return {
                    ...option,
                    description: translateDescription(option, translateFn),
                    children: children?.map(child => ({
                        ...child,
                        description: translateDescription(child, translateFn),
                    })),
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
