import { addNewFilter, selectOptionAux } from './filter.utils';
import { checkIn, checkStrictIn } from '../../utils/utils';
import { FiltersState } from '../../models';
import { QueryFilter } from '../../models';
import { FilterConfig } from '../../models';
import { DateFilter, DateRange, FilterOption, FilterOptionHeader, FiltersConfig } from '../../models/filters';
import dayjs from 'dayjs';
import MinMax from 'dayjs/plugin/minMax';
import { ComparableType } from 'src/enums';

dayjs.extend(MinMax);

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
    const { filtersConfig } = state;
    let { date } = filtersConfig;
    const { dateRanges } = date;
    const start = dayjs(sharedFilters.filter(filter => filter.op === 'gte')[0].value).toDate();
    const end = dayjs(sharedFilters.filter(filter => filter.op === 'lte')[0].value).toDate();

    const dateRange = _getDateRange(dateRanges, start, end);

    date = _applyDateFilter(dateRange, date, start, end);
    date = _applySharedCompFilter(comparableFilter, date);
    date.comparableType = comparableFilter[0].key as ComparableType;

    return {
        ...filtersConfig,
        date,
    };
};

const _applyDateFilter = (dateRange: DateRange, dateFilter: DateFilter, startDate: Date, endDate: Date) => {
    if (dateRange) {
        const { description, startDate: start, endDate: end } = dateRange;
        return addNewFilter(dateFilter, { description, startDate: start, endDate: end });
    } else {
        const { minDate, maxDate } = dateFilter;

        startDate = dayjs.min(dayjs.max(dayjs(startDate), dayjs(minDate)), dayjs(maxDate)).toDate();
        endDate = dayjs.min(dayjs.max(dayjs(startDate), dayjs(minDate)), dayjs(maxDate)).toDate();

        return addNewFilter(dateFilter, { description: `${startDate} - ${endDate}`, startDate, endDate });
    }
};

const _getDateRange = (dateRanges: DateRange[], start: Date, end: Date) =>
    dateRanges.find(dateRange => dateRange.startDate === start && dateRange.endDate === end);

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
                startDate: dayjs(start).toDate(),
                endDate: dayjs(end).toDate(),
            },
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
