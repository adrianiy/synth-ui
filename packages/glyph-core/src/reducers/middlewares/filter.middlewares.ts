import { ComparableType } from '../../enums';
import { FilterSelectEvent, FiltersState, FilterUpdateEvent } from '../../models';
import {
    checkCleanIfMultiSelectChanges,
    cleanSelected,
    cleanSelectedDate,
    getCompType,
    getSelectedDatesQuery,
    getSelectedOptionsQuery,
    getSelectedPartnumber,
    isFilterActive,
    selectDateAux,
    selectOptionAux,
} from '../utils/filter.utils';
import { checkRelations, filterRestrictedOptions } from '../utils/related.utils';

export const selectOption = (selected: FilterSelectEvent) => (state: FiltersState) => {
    const { filterCode, option, isDefault } = selected;
    const { filtersConfig } = state;
    const { filter } =
        filterCode === 'date'
            ? selectDateAux(filtersConfig[filterCode], selected)
            : selectOptionAux(filtersConfig[filterCode], { ...option, isDefault });

    return {
        ...state,
        filtersConfig: { ...filtersConfig, [filterCode]: filter },
    };
};

export const clearFilter = (filterCode: string) => (state: FiltersState) => {
    const { filtersConfig } = state;
    const isDate = filterCode === 'date';

    const filter = isDate
        ? cleanSelectedDate(filtersConfig[filterCode])
        : cleanSelected([ filtersConfig[filterCode] ])[0];

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

export const setQueryFilters = (state: FiltersState) => {
    const { filtersConfig } = state;

    const { date, partnumber, search: _, ...rest } = filtersConfig;

    return {
        ...state,
        queryFilters: [
            ...getSelectedDatesQuery(date),
            ...getSelectedOptionsQuery(rest),
            ...getSelectedPartnumber(partnumber),
        ].filter(Boolean),
    };
};

export const resetOrdinalCompType = (state: FiltersState) => {
    const { filtersConfig } = state;
    const compType = getCompType(filtersConfig);

    if (compType === ComparableType.ordinal) {
        const platformActive = isFilterActive(filtersConfig, 'platform');
        const countryActive = isFilterActive(filtersConfig, 'country');

        if (!platformActive && !countryActive) {
            const date = {
                ...filtersConfig.date,
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
