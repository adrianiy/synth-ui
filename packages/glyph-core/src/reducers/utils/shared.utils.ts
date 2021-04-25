import { addNewFilter, selectOptionAux } from './filter.utils';
import { checkIn, checkStrictIn } from '../../utils/utils';
import { FiltersState } from '../../models';
import { QueryFilter } from '../../models';
import { FilterConfig } from '../../models';
import { FilterOption, FilterOptionHeader, FiltersConfig } from '../../models/filters';
import moment from 'moment';

export const applySharedDates = (sharedFilters: QueryFilter[], comparableFilter: QueryFilter[]) => (
    state: FiltersState,
) => {
    let { filtersConfig } = state;

    const dateApplies = _checkIfSharedDateApply(sharedFilters, filtersConfig);

    if (dateApplies) {
        filtersConfig = _applySharedDatesAux(sharedFilters, comparableFilter, state);
    }

    return {
        ...state,
        filtersConfig,
    };
};

export const applySharedFilters = (sharedFilters: QueryFilter[]) => (state: FiltersState) => {
    let { filtersConfig } = state;

    sharedFilters.forEach(sharedFilter => {
        const filterKey = Object.keys(filtersConfig).find(key => filtersConfig[key].key === sharedFilter.key);
        const filter = filtersConfig[filterKey];

        if (filter) {
            const newFilter = _activateOptionsMatchingSharedFilters(filter, sharedFilter);

            if (newFilter) {
                filtersConfig = { ...filtersConfig, [filterKey]: { ...filter, ...newFilter } };
            }
        }
    });

    return {
        ...state,
        filtersConfig,
    };
};

const _checkIfSharedDateApply = (sharedFilter: QueryFilter[], filtersConfig: FiltersConfig): boolean => {
    const sharedFiltersExists = sharedFilter.find(filter => filter.key === 'local_date');
    const dateFilterExists = !!filtersConfig.date;

    return sharedFiltersExists && dateFilterExists;
};

const _applySharedDatesAux = (sharedFilters: QueryFilter[], comparableFilter: QueryFilter[], state: FiltersState) => {
    const { dateRanges, dateConfig, filtersConfig } = state;
    const start = sharedFilters.filter(filter => filter.op === 'gte')[0].value;
    const end = sharedFilters.filter(filter => filter.op === 'lte')[0].value;
    let { date } = filtersConfig;

    const dateRange = _getDateRange(dateRanges, start, end);

    date = _applyDateFilter(dateRange, date, start, end, dateConfig);
    date = _applySharedCompFilter(comparableFilter, date);

    return {
        ...filtersConfig,
        date,
    };
};

const _applyDateFilter = (
    dateRange: any,
    dateFilter: FilterConfig,
    startDate: string,
    endDate: string,
    dateConfig: any,
) => {
    if (dateRange) {
        return addNewFilter(dateFilter, { description: dateRange, startDate, endDate });
    } else {
        if (moment(startDate).diff(dateConfig.minCalDate, 'd') < 0) {
            startDate = dateConfig.minCalDate;
        }
        if (moment(endDate).diff(dateConfig.minCalDate, 'd') < 0) {
            endDate = dateConfig.minCalDate;
        }
        if (moment(startDate).diff(dateConfig.maxCalDate, 'd') > 0) {
            startDate = dateConfig.maxCalDate;
        }
        if (moment(endDate).diff(dateConfig.maxCalDate, 'd') > 0) {
            endDate = dateConfig.maxCalDate;
        }
        return addNewFilter(dateFilter, { description: `${startDate} - ${endDate}`, startDate, endDate });
    }
};

const _getDateRange = (dateRanges: any, start: string, end: string) =>
    Object.keys(dateRanges).find(
        dateRange =>
            dateRanges[dateRange][0].format('YYYY-MM-DD') === start &&
            dateRanges[dateRange][1].format('YYYY-MM-DD') === end,
    );

const _activateOptionsMatchingSharedFilters = (filter: FilterConfig, sharedFilter: QueryFilter) => {
    let { options } = filter;

    options = options.map(option => {
        const haveChildren = option.children;

        const result = haveChildren
            ? _parseChildren(option, sharedFilter, filter)
            : _selectOptionIfMatches(sharedFilter, filter, option);

        if (result) {
            ({ filter } = result);

            return result.option;
        }

        return option;
    });

    return {
        ...filter,
        options,
    };
};

const _parseChildren = (option: FilterOptionHeader, sharedFilter: QueryFilter, filter: FilterConfig) => {
    let { children } = option;
    children = children.map((child: FilterOption) => {
        const result = _selectOptionIfMatches(sharedFilter, filter, child);

        if (result) {
            ({ filter } = result);

            return result.option;
        }

        return result.option;
    });
    option = { ...option, children };

    return { filter, option };
};

const _applySharedCompFilter = (comparableDates: QueryFilter[], filter: FilterConfig) => {
    let { selected } = filter;

    if (comparableDates?.length) {
        const start = comparableDates.filter(c => c.op === 'gte')[0].value;
        const end = comparableDates.filter(c => c.op === 'lte')[0].value;
        const isCustomComparable = comparableDates[0].key === 'custom';
        selected = [
            selected[0],
            {
                description: `comp: ${!isCustomComparable ? comparableDates[0].key : `${start} - ${end}`}`,
                type: 'comp',
                compType: comparableDates[0].key,
                compDates: [ start, end ],
            } as any,
        ];
    }

    return { ...filter, selected };
};

const _selectOptionIfMatches = (sharedFilter: QueryFilter, filter: FilterConfig, option: FilterOptionHeader) => {
    const { code, active } = option;
    const filterContainsSharedValue = sharedFilter.value.find(
        (value: any) => checkStrictIn(value, code) || checkIn(value, code),
    );

    if (filterContainsSharedValue && !active) {
        return selectOptionAux(filter, option);
    }

    return null;
};
