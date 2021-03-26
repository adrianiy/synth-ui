import { FilterConfig, FilterOption, FilterOptionHeader } from '../../models/filters';
import { checkStrictIn } from '../../utils/utils';
import { selectOptionAux } from './filter.utils';

export const selectFilterOptions = (filter: any) => {
    const options = filter.options.map((option: FilterOptionHeader) => {
        const haveChildren = option.children;
        const results = haveChildren ? selectChildrenOptions(option, filter) : selectOptionAux(filter, option);
        ({ filter, option } = results);

        return option;
    });

    return {
        ...filter,
        options
    };
};

export const selectChildrenOptions = (option: FilterOptionHeader, filter: FilterConfig) => {
    const children = option.children.map((child: FilterOption) => {
        ({ filter, option } = selectOptionAux(filter, child));

        return option;
    });

    return {
        filter,
        option: { ...option, expanded: true, children }
    };
};

// update individual filter entity received from service with values saved in localstorage
export const updateOptionsWithEntities = (options: FilterOptionHeader[], entities: any) => {
    if (!entities) {
        return options;
    }

    return entities.map((optionEntity: FilterOptionHeader) => {
        const matchOption = options.find((entity: any) => checkStrictIn(optionEntity.code, entity.code));

        if (optionEntity.header) {
            optionEntity.children = updateOptionsWithEntities(matchOption?.children, optionEntity.children);
        }

        return { ...optionEntity, ...matchOption };
    });
};

// update, add or remove saved filters
export const updateSavedFilters = (savedFilters: any, baseFilters: { [x: string]: any }) => {
    Object.keys(savedFilters).forEach(key => {
        let filterGroup = savedFilters[key];
        const baseFilterGroup = baseFilters[key];

        filterGroup = _deleteOrUpdate(filterGroup, baseFilterGroup);
        filterGroup = _pushRecentlyAddedFilters(filterGroup, baseFilterGroup);

        savedFilters = { ...savedFilters, [key]: filterGroup };
    });

    return savedFilters;
};

const _deleteOrUpdate = (filterGroup: FilterConfig[], baseFilterGroup: FilterConfig[]) => {
    filterGroup?.forEach((filter: FilterConfig, i: number) => {
        const baseFilterMatch = baseFilterGroup?.find((baseFilter: { key: any }) => baseFilter.key === filter.key);
        if (!baseFilterMatch) {
            // mark as removable if filter is no longer present in base config
            filter['delete'] = true;
        } else if (filter.version !== baseFilterMatch?.version) {
            // update filter if version have changed
            filterGroup[i] = baseFilterMatch;
        }
    });

    // remove saved filters that are no longer present in base config
    filterGroup = filterGroup?.filter((filter: any) => !filter.delete);

    return filterGroup;
};

const _pushRecentlyAddedFilters = (filterGroup: FilterConfig[], baseFilterGroup: FilterConfig[]) => {
    // add filters that are recently added to base config
    const savedKeys = filterGroup.map(filter => filter.key);
    const baseKeys = baseFilterGroup.map(filter => filter.key);

    const newKeys = baseKeys?.filter((key: any) => !savedKeys?.includes(key));

    newKeys?.forEach((key: any) => {
        const newFilter = baseFilterGroup.find((filter: { key: any }) => filter.key === key);
        filterGroup = [ ...filterGroup, newFilter ];
    });

    return filterGroup;
};
