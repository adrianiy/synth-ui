import {
    DateFilter,
    DateRange,
    FilterConfig,
    FilterOption,
    FilterOptionHeader,
    FiltersConfig,
} from '../../models/filters';
import { checkStrictIn } from '../../utils/utils';
import { selectOptionAux } from './filter.utils';

export const selectFilterOptions = (filter: FilterConfig) => {
    const options = filter.options.map((option: FilterOptionHeader) => {
        const haveChildren = option.children;
        const results = haveChildren ? selectChildrenOptions(option, filter) : selectOptionAux(filter, option);
        ({ filter, option } = results);

        return option;
    });

    return {
        ...filter,
        options,
    };
};

export const selectChildrenOptions = (option: FilterOptionHeader, filter: FilterConfig) => {
    const children = option.children.map((child: FilterOption) => {
        ({ filter, option } = selectOptionAux(filter, child));

        return option;
    });

    return {
        filter,
        option: { ...option, expanded: true, children },
    };
};

// update individual filter entity received from service with values saved in localstorage
export const updateOptionsWithEntities = (options: FilterOptionHeader[], entities: any) => {
    if (!entities) {
        return options;
    }

    return entities.map((optionEntity: FilterOptionHeader) => {
        const matchOption = options?.find((entity: any) => checkStrictIn(optionEntity.code, entity.code));

        if (optionEntity.header) {
            optionEntity.children = updateOptionsWithEntities(matchOption?.children, optionEntity.children);
        }

        return { ...optionEntity, ...matchOption };
    });
};

// update, add or remove saved filters
export const updateSavedFilters = (savedFilters: FiltersConfig, baseFilters: FiltersConfig) => {
    Object.keys(savedFilters).forEach(key => {
        const baseFilter = baseFilters[key];

        if (!baseFilter) {
            const { [key]: _, ...rest } = savedFilters;
            savedFilters = rest;
        }
        if (baseFilter.version !== savedFilters[key]?.version) {
            savedFilters[key] = baseFilter;
        }
    });

    return { ...baseFilters, ...savedFilters };
};
