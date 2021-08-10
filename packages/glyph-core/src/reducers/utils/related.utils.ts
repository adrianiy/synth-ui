import { FiltersConfig } from '../../models';
import { FilterConfig } from '../../models';
import { FilterOption, FilterOptionHeader, SelectedFilter } from '../../models/filters';
import { getSelectedOptions, selectOptionAux } from './filter.utils';
import { codeToArray } from '../../utils/utils';

/**
 * Set visibility of filter related to current selection
 */
export const checkRelations = (parentKey: string, filtersConfig: FiltersConfig) => {
    const baseFilter = filtersConfig[parentKey];
    const { related } = baseFilter;

    related?.forEach(key => {
        let filter = filtersConfig[key];

        const options = filter.options.map(option => {
            const result = _setHideValue(option, filtersConfig, parentKey, key);
            filtersConfig = result.filters;

            return result.row;
        });
        filtersConfig = { ...filtersConfig, [key]: { ...filtersConfig[key], options } };
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

export const setHideValue = (row: FilterOptionHeader, selected: SelectedFilter[], parentCode: any, key: string) => {
    // save old hide value
    const visibilityWillBeChecked = selected.length && parentCode != null;
    const parentCodeIsSelected = codeToArray(parentCode)?.some(code => selected.includes(code));
    const newRow = {
        ...row,
        [`${key}Hide`]: visibilityWillBeChecked && !parentCodeIsSelected,
    };

    return {
        ...newRow,
        // row will be hidden if some parent hide options are true
        hide: Object.keys(newRow['parents']).some(c => newRow[`${c}Hide`]),
    };
};

/**
 * Set hide status in related filters
 *
 * @param row row to check hide value
 * @param filters filters configuration saved in state
 * @param parentKey key of parent filter
 * @param key key of filter
 */
const _setHideValue = (row: FilterOptionHeader, filters: FiltersConfig, parentKey?: string, key?: string) => {
    let filter = filters[key];
    const parentFilter = filters[parentKey];
    const selected = getSelectedOptions(parentFilter.options).map(({ code }) => code);
    const oldHideValue = row['hide'] || false;
    const parentCode = row.parents[parentKey] || row[parentKey];

    row = setHideValue(row, selected, parentCode, parentKey);

    // if hide value changes filter should not be setted so we must unset it
    if (oldHideValue !== row['hide'] && row['active']) {
        filter = selectOptionAux(filter, row).filter;
        filters = { ...filters, [key]: filter };
        row.active = false;
    }

    // repeat process with children
    if (row['children']) {
        row['children'] = row['children'].map(child => {
            const result = _setHideValue(child, filters, parentKey, key);
            filters = result.filters;
            return result.row;
        });
    }

    return { row, filters };
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
