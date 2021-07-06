import React from 'react';
import { actions, FilterSelectEvent, FilterUpdateEvent, rootReducer, Store } from 'glyph-core';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(
    rootReducer,
    /* istanbul ignore next */
    (window as any)['__REDUX_DEVTOOLS_EXTENSION__']?.(),
);

const FilterStateProvider = ({ children }: { children: any }) => <Provider store={store}>{children}</Provider>;

export const useFilters = () => {
    const { queryFilters = [], filtersConfig } = useSelector((state: Store) => state.filters);
    const dateFilter = filtersConfig?.date || {};
    const { compDates, comparableType } = dateFilter;
    const startDate = queryFilters.find(filter => filter.key === 'local_date' && filter.op === 'gte')?.value;
    const endDate = queryFilters.find(filter => filter.key === 'local_date' && filter.op === 'lte')?.value;
    const queryParams = queryFilters
        .filter(filter => filter.key !== 'local_date')
        .reduce(
            (acc, curr) => ({
                ...acc,
                [curr.key.replace('cod_', '')]: curr.value,
            }),
            { startDate, endDate },
        );

    return { queryFilters, queryParams, compDates, comparableType };
};

export const useFiltersConfig = () => {
    const dispatch = useDispatch();
    const { filtersConfig } = useSelector((state: Store) => state.filters);

    const selectFilter = (selection: FilterSelectEvent) => {
        dispatch(actions.filters.selectOption(selection));
    };

    const updateFilter = (update: FilterUpdateEvent) => {
        dispatch(actions.filters.updateFilter(update));
    };

    const clearFilter = (filterCode: string) => {
        dispatch(actions.filters.clearFilter(filterCode));
    };

    const clearAll = () => {
        dispatch(actions.filters.clearAll());
    };

    return { filtersConfig, selectFilter, updateFilter, clearFilter, clearAll };
};

export default FilterStateProvider;
