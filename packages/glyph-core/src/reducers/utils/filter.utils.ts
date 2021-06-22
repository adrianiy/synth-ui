// check if some code array is strictly included in some other option array.

import { ComparableType } from '../../enums';
import { FilterOption, FilterSelectEvent } from '../../models';
import { DateFilter, FilterConfig, FilterOptionHeader, FiltersConfig, SelectedFilter } from '../../models/filters';
import { checkStrictIn } from '../../utils/utils';

export const selectOptionAux = (filter: FilterConfig, option: SelectedFilter) => {
    return {
        filter: addNewFilter(filter, option),
        option: { ...option, active: true },
    };
};

export const selectDateAux = (filter: DateFilter, selected: FilterSelectEvent) => {
    const { startDate, endDate, isDefault, description } = selected;
    const { comparableType, comparableStartDate, comparableEndDate } = selected;

    filter.selected = [ { startDate, endDate, isDefault, description } ];
    filter.compDates = [ { startDate: comparableStartDate, endDate: comparableEndDate } ];
    filter.comparableType = comparableType;

    return { filter: filter };
};

/**
 * Cleans selected array and set active status to false in options
 */
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
                active: false,
            };
        });

        return {
            ...filter,
            selected: [],
            options,
        };
    });
};

export const cleanSelectedDate = (filter: DateFilter) => {
    filter.selected = filter.dateRanges?.filter(({ isDefault }) => isDefault) || [];
    filter.compDates = [];
    filter.comparableType = ComparableType.commercial;

    return filter;
};

/**
 * If filter changes to single select and has multiple options active we need to clean selected options
 */
export const checkCleanIfMultiSelectChanges = (filter: FilterConfig) => {
    const { multiSelect, selected } = filter;

    if (!multiSelect && selected.length > 1) {
        return cleanSelected([ filter ])[0];
    }

    return filter;
};

/**
 * Adds new filter to selected *** filter attribute ***.
 */
export const addNewFilter = (filter: FilterConfig, option: SelectedFilter) => {
    const { key } = filter;

    return _selectFilter(filter, option);
};

export const getCompType = (filters: FiltersConfig) => {
    return filters.date?.comparableType || 'commercial';
};

export const isFilterActive = (filters: FiltersConfig, filterCode: string) => {
    return filters[filterCode]?.selected?.length > 0;
};

const _matchActiveOptions = (options: FilterOptionHeader[], selected: FilterOptionHeader, multiSelect: boolean) => {
    return options.map((option: FilterOptionHeader) => {
        const { header, children } = option;
        const match = checkStrictIn(selected.code, option.code) && selected.header === option.header;

        if (match) {
            if (header) {
                return { ...option, expanded: !option.expanded };
            } else {
                return { ...option, active: !option.active };
            }
        } else {
            if (header) {
                return { ...option, children: _matchActiveOptions(children, selected, multiSelect) };
            } else {
                return { ...option, active: multiSelect || selected.header ? option.active : false };
            }
        }
    });
};

const _getSelectedOptions = (options: FilterOptionHeader[]) => {
    return options
        .reduce(
            (acc, curr) => acc.concat(curr.header ? _getSelectedOptions(curr.children) : curr.active ? curr : null),
            [],
        )
        .filter(option => option);
};

const _selectFilter = (filter: FilterConfig, selectedOption: SelectedFilter) => {
    let { options, multiSelect } = filter;
    const { isDefault } = selectedOption;

    options = _matchActiveOptions(options, selectedOption, multiSelect);

    const selected = _getSelectedOptions(options).map((option: FilterOptionHeader) => ({ ...option, isDefault }));

    return {
        ...filter,
        options,
        selected,
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
