// check if some code array is strictly included in some other option array.

import { FilterOption } from '../../models';
import { FilterConfig, FilterOptionHeader, SelectedFilter } from '../../models/filters';
import { checkStrictIn, codeToArray } from '../../utils/utils';

export const selectOptionAux = (filter: FilterConfig, option: FilterOptionHeader, defaultOption?: undefined) => {
    return {
        filter: addNewFilter(filter, option, defaultOption),
        option: { ...option, active: true }
    };
};

export const cleanSelected = (filters: any) => {
    return filters.map((filter: FilterConfig) => {
        let { options } = filter;

        options = options.map((option: FilterOptionHeader) => {
            let { children } = option;

            if (children) {
                children = children.map((child: FilterOption) => ({ ...child, active: false }));
            }

            return {
                ...option,
                children,
                selected: []
            };
        });

        return {
            ...filter,
            selected: [],
            options
        };
    });
};

/**
 * Adds new filter to selected *** filter attribute ***.
 */
export const addNewFilter = (filter: FilterConfig, option: FilterOptionHeader, defaultOpt: any) => {
    const { multiSelect, key } = filter;
    const selectedOption = [ { description: option.description, option, default: defaultOpt } ];
    const isDate = key === 'date';

    if (isDate) {
        return _selectDate(filter, selectedOption);
    } else if (multiSelect) {
        return _applyMultiSelectFilter(filter, option, selectedOption);
    } else {
        return _selectFilter(filter, option, selectedOption);
    }
};

const _selectDate = (filter: FilterConfig, selected: SelectedFilter[]) => {
    return {
        ...filter,
        selected,
        compDates: undefined,
        compType: 'commercial'
    };
};

const _selectFilter = (filter: FilterConfig, option: FilterOptionHeader, selected: SelectedFilter[]) => {
    let { options } = filter;

    if (option.active) {
        options = options.map((_option: FilterOptionHeader) => {
            if (_option.header) {
                _option.children.forEach(
                    (child: FilterOption) => (child.active = checkStrictIn(child.code, option.code))
                );
            } else {
                _option.active = checkStrictIn(_option.code, option.code);
            }
            return _option;
        });
    } else {
        selected = [];
    }

    return {
        ...filter,
        options,
        selected
    };
};

const _applyMultiSelectFilter = (filter: FilterConfig, option: FilterOptionHeader, selected: SelectedFilter[]) => {
    let { selected: newSelected } = filter;

    if (!option.active || option.changeOperationValue) {
        newSelected = newSelected.filter(
            (selectedOption: SelectedFilter) => !checkStrictIn(selectedOption.option.code, selected[0].option.code)
        );
    }
    if (option.active) {
        newSelected = newSelected.concat(selected);
    }

    return {
        ...filter,
        selected: newSelected
    };
};

const _capitalize = (text: string) => {
    if (text.startsWith('<b>')) {
        // keeps bold character and capitalize the remaining text
        return text.slice(0, 3).concat(_capitalize(text.slice(3)));
    } else if (text.split(' ').length === 1) {
        if (text.length) {
            // there is only one word so we capitalize it
            return text[0].toUpperCase().concat(text.slice(1));
        } else {
            return text;
        }
    } else {
        // split the text in words and capitalize them
        return text
            .split(' ')
            .reduce((acc: any, curr: any) => `${acc}${_capitalize(curr)} `, '')
            .slice(0, -1);
    }
};

export const cleanFiltersCache = (filtersVersion: string) => {
    Object.keys(localStorage)
        .filter(key => key.indexOf('Drive.Filters.') > -1)
        .forEach(k => {
            localStorage.removeItem(k);
        });
    localStorage.setItem('Drive.Filters.Version', filtersVersion);
};

export const selectOption = (option, defaultOpt, parentFilter?, triggerUpdate = true) => {
    // eslint-disable-next-line no-console
    console.log(`select option ${option}`);
};

export const translateDescription = (option: FilterOption, translateFn: (arg0: string) => string) => {
    try {
        const newDescription = translateFn(option.description);

        if (newDescription !== option.description) {
            return newDescription;
        } else {
            return option._originalDescription;
        }
    } catch (err) {
        return option.description;
    }
};
