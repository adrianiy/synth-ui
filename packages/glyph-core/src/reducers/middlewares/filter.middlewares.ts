import { FilterConfig, FilterSelectEvent, FiltersState } from '../../models';
import { addNewFilter, selectOptionAux, translateDescription } from '../utils/filter.utils';
import { checkRelations, filterRestrictedOptions } from '../utils/related.utils';

export const selectOption = (selected: FilterSelectEvent) => (state: FiltersState) => {
    const { filterCode, option, defaultOption } = selected;
    const { filtersConfig } = state;

    option.active = !option.active;

    const { filter } = selectOptionAux(filtersConfig[filterCode], option, defaultOption);
    console.log(filter, option);

    return {
        ...state,
        filtersConfig: { ...filtersConfig, [filterCode]: filter },
    };
};

export const checkFilterRelations = (selectedFilter?: FilterConfig) => (state: FiltersState): FiltersState => {
    let { filtersConfig, restrictedParents } = state;
    const relatableFilterKeys = Object.keys(filtersConfig).filter(key => ![ 'search', 'date' ].includes(key));

    relatableFilterKeys.forEach((key: string) => {
        let filter = filtersConfig[key];
        const willCheckFilterRelations = !selectedFilter || filter.key === selectedFilter.key;

        if (willCheckFilterRelations) {
            filtersConfig = checkRelations(filter, filtersConfig);

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
