import { actions } from 'glyph-core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FilterStateProvider from '../providers/filter-state';
import { FiltersConfig } from './configs';
import { FilterEntities } from './filters';

export const WithFilters = (Story: any) => {
    return (
        <FilterStateProvider>
            <Story />
        </FilterStateProvider>
    );
};

export const InitializeFilters = (Story: any) => {
    const dispatch = useDispatch();

    useEffect(() => {
        async function loadFilters() {
            dispatch(actions.filters.initialize(FilterEntities, 'test', FiltersConfig, {}, desc => desc));
        }

        loadFilters();
    }, [ dispatch ]);

    return <Story />;
};

export const CustomHeight = (height: number) => (Story: any) => {
    return (
        <div style={{ height }}>
            <Story />
        </div>
    );
};
