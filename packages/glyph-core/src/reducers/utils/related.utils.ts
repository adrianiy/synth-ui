import { FiltersConfig } from '../../models';
import { FilterConfig } from '../../models';
import { FilterOption, FilterOptionHeader, SelectedFilter } from '../../models/filters';
import { selectOptionAux } from './filter.utils';
import { codeToArray } from '../../utils/utils';

/**
 * Set visibility of filter related to current selection
 */
export const checkRelations = (baseFilter: FilterConfig, filtersConfig: FiltersConfig) => {
    const { description, related } = baseFilter;
    const selected = baseFilter.selected.map(({ option }) => option.code);

    Object.keys(filtersConfig).forEach(key => {
        const filter = filtersConfig[key];
        const match = related?.includes(description);

        if (match) {
            const options = filter.options.map(option => _setHideValue(option, selected, filter));
            filtersConfig = { ...filtersConfig, [key]: { ...filter, options } };
        }
    });

    return filtersConfig;
};

export const filterRestrictedOptions = (filter: FilterConfig, restrictedParents: any) => {
    const parentFilter = restrictedParents[filter.description];
    let { options } = filter;

    if (parentFilter) {
        options = options.filter(option => parentFilter.includes(option.code));
    }

    return { ...filter, options };
};

export const setHideValue = (
    row: FilterOptionHeader,
    selected: SelectedFilter[],
    parentCode: any,
    description: string,
) => {
    // save old hide value
    const visibilityWillBeChecked = selected.length && parentCode != null;
    const parentCodeIsSelected = codeToArray(parentCode)?.some(code => selected.includes(code));

    return {
        ...row,
        // row will be hidden if some parent hide options are true
        hide: Object.keys(row['parents']).some(c => row[`${c}Hide`]),
        [`${description}Hide`]: visibilityWillBeChecked && !parentCodeIsSelected,
    };
};

const _setHideValue = (row: FilterOptionHeader, selected: SelectedFilter[], filter?: any) => {
    const { description } = filter;
    const oldHideValue = row['hide'] || false;
    const parentCode = row.parents[description] || row[description];
    const newRow = setHideValue(row, selected, parentCode, description);

    // if hide value changes filter should not be setted so we must unset it
    if (oldHideValue !== newRow['hide'] && newRow['active']) {
        filter = selectOptionAux(filter, row, false).filter;
    }

    // repeat process with children
    if (row['children']) {
        row['children'] = row['children'].map(child => _setHideValue(child, selected, filter));
    }

    return { ...row, ...newRow };
};

const _setBrandHideValue = (option: FilterOptionHeader, selectedBrands: any) => {
    const { children } = option;
    const brandAsArray = [].concat(option.brand);
    const someBrandIsIncluded = brandAsArray.some(brand => selectedBrands.includes(brand));

    return {
        ...option,
        display: someBrandIsIncluded,
        children: children?.map((child: FilterOption) => _setBrandHideValue(child, selectedBrands)),
    };
};
