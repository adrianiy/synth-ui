import { FilterConfig, FiltersState } from '../../models';
import { FilterOptionHeader } from '../../models/filters';
import { translateDescription } from '../utils/filter.utils';
import {
    checkFamilyRelationsByProduct,
    checkRelations,
    checkRelationsByBrand,
    filterRestrictedOptions
} from '../utils/related.utils';

export const checkFilterRelations = (selectedFilter?: FilterConfig) => (state: FiltersState): FiltersState => {
    let { filtersConfig, restrictedParents } = state;
    const relatableFilterKeys = Object.keys(filtersConfig).filter(key => ![ 'search', 'date' ].includes(key));

    relatableFilterKeys.forEach((key: string) => {
        const isLocation = key === 'location';
        const filters = filtersConfig[key].map((filter: FilterConfig) => {
            const willCheckFilterRelations = !selectedFilter || filter.key === selectedFilter.key;

            if (willCheckFilterRelations) {
                const isFamily = filter.key === 'cod_family';

                ({ filter, filtersConfig } = checkRelations(filter, filtersConfig));

                filter = filterRestrictedOptions(filter, restrictedParents);

                if (isLocation) {
                    filtersConfig = checkRelationsByBrand(filter, filtersConfig);
                }

                if (isFamily) {
                    filtersConfig = checkFamilyRelationsByProduct(filter, filtersConfig);
                }
            }

            return filter;
        });

        filtersConfig = { ...filtersConfig, [key]: filters };
    });

    return {
        ...state,
        filtersConfig
    };
};

export const translateDescriptions = (translateFn: (arg0: string) => string) => (state: FiltersState) => {
    let { filtersConfig } = state;

    if (filtersConfig) {
        Object.keys(filtersConfig).forEach(key => {
            const filter = filtersConfig[key]?.map((filter: FilterConfig) => {
                const options = filter.options?.map((option: FilterOptionHeader) => {
                    const { children } = option;

                    return {
                        ...option,
                        description: translateDescription(option, translateFn),
                        children: children?.map(child => ({
                            ...child,
                            description: translateDescription(child, translateFn)
                        }))
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
