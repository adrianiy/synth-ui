import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FilterStateProvider from '../providers/filter-state';
import { FiltersConfig } from './configs';
import { FilterEntities } from './filters';
import { actions } from 'glyph-core';

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

export const WithFilters = (Story: any) => {
    return (
        <FilterStateProvider>
            <Story />
        </FilterStateProvider>
    );
};

export const WithCustomHeight = (height: number) => (Story: any) => {
    return (
        <div style={{ height }}>
            <Story />
        </div>
    );
};

export const WithCustomGlobals = (Story: any, context: any) => {
    const { theme, locale, fontSize } = context.globals;
    const bodyElement = document.getElementsByTagName('body')[0];
    bodyElement.className = theme;

    return (
        <div className={theme} lang={locale} style={{ '--gui-font--base': fontSize } as any}>
            <Story {...context} />
        </div>
    );
};
