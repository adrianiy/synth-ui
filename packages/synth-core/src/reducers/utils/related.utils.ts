import { FiltersConfig } from '../../models';
import { FilterConfig } from '../../models';
import { FilterOption, FilterOptionHeader, SelectedFilter } from '../../models/filters';
import { selectOption } from './filter.utils';
import { codeToArray } from '../../utils/utils';

/**
 * Set visibility of filter related to current selection
 */
export const checkRelations = (filter: FilterConfig, filtersConfig: FiltersConfig) => {
    const { description } = filter;
    const selected = filter.selected.map(({ option }) => option.code);

    Object.keys(filtersConfig).forEach(key => {
        const newFilter = filtersConfig[key].map((f: FilterConfig) => {
            const match = f.related?.includes(description);

            if (match) {
                f.options = f.options.map(option => _setHideValue(option, selected, description, f));
            }

            return f;
        });

        filtersConfig = { ...filtersConfig, [key]: newFilter };
    });

    return { filter, filtersConfig };
};

export const filterRestrictedOptions = (filter: FilterConfig, restrictedParents: any) => {
    const parentFilter = restrictedParents[filter.description];
    let { options } = filter;

    if (parentFilter) {
        options = options.filter(option => parentFilter.includes(option.code));
    }

    return { ...filter, options };
};

/**
 * set hide value by product relationship
 */
export const checkFamilyRelationsByProduct = (filter: FilterConfig, filtersConfig: FiltersConfig) => {
    const { selected } = filter;
    const { product } = filtersConfig;
    const selectedProduct = selected.map(({ option }) => option.code);
    let subfamilyFilter = product.find(({ key }) => key === 'cod_subfamily');

    subfamilyFilter = {
        ...subfamilyFilter,
        options: subfamilyFilter.options.map(option => _setHideValue(option, selectedProduct, 'Producto', filter))
    };

    return filtersConfig;
};

/**
 * set hide value by brand relationship
 */
export const checkRelationsByBrand = (filter: FilterConfig, filtersConfig: FiltersConfig) => {
    const { selected } = filter;
    const { product } = filtersConfig;
    const selectedBrands = selected.map(({ option }) => option.brand);
    const validFilterKeys = [ 'cod_product_line', 'cod_family', 'cod_subfamily' ];

    const newProducts = product.map(productFilter => {
        const match = validFilterKeys.includes(productFilter.key);

        if (match) {
            return {
                ...productFilter,
                options: productFilter.options.map(option => _setHideValue(option, selectedBrands, 'cod_brand', filter))
            };
        }
        return productFilter;
    });

    return {
        ...filtersConfig,
        product: newProducts
    };
};

export const setHideValue = (
    row: FilterOptionHeader,
    selected: SelectedFilter[],
    parentCode: any,
    description: string
) => {
    // save old hide value
    const visibilityWillBeChecked = selected.length && parentCode != null;
    const parentCodeIsSelected = codeToArray(parentCode)?.some(code => selected.includes(code));

    return {
        ...row,
        // row will be hidden if some parent hide options are true
        hide: Object.keys(row['parents']).some(c => row[`${c}Hide`]),
        [`${description}Hide`]: visibilityWillBeChecked && !parentCodeIsSelected
    };
};

const _setHideValue = (row: FilterOptionHeader, selected: SelectedFilter[], description: string, filter?: any) => {
    const oldHideValue = row['hide'] || false;
    const parentCode = row.parents[description] || row[description];
    const newRow = setHideValue(row, selected, parentCode, description);

    // if hide value changes filter should not be setted so we must unset it
    if (oldHideValue !== newRow['hide'] && newRow['active']) {
        selectOption(row, false, filter, false);
    }

    // repeat process with children
    if (row['children']) {
        row['children'].forEach(child => _setHideValue(child, selected, description, filter));
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
        children: children?.map((child: FilterOption) => _setBrandHideValue(child, selectedBrands))
    };
};
