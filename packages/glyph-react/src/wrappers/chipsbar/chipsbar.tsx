import { FilterSelectEvent, FilterUpdateEvent, UIInterface } from 'glyph-core';

import React from 'react';
import { GlyphChipsbar } from '../../components';
import { useFiltersConfig } from '../../providers/filter-state';

function GlyphReactChipsbar({ uiInterface, locale, basePath }: GlyphReactChipsbarProps) {
    const { filtersConfig, selectFilter, updateFilter, clearFilter, clearAll } = useFiltersConfig();

    const handleSelectFilter = (event: CustomEvent<FilterSelectEvent>) => {
        selectFilter(event.detail);
    };

    const handleFilterUpdate = (event: CustomEvent<FilterUpdateEvent>) => {
        updateFilter(event.detail);
    };

    const handleFilterClear = (event: CustomEvent<string>) => {
        clearFilter(event.detail);
    };

    const handleClearAll = () => {
        clearAll();
    };

    return (
        <GlyphChipsbar
            basePath={basePath}
            interface={uiInterface}
            locale={locale}
            filtersConfig={filtersConfig}
            onFilterSelect={handleSelectFilter}
            onUpdateFilter={handleFilterUpdate}
            onFilterClear={handleFilterClear}
            onClearAll={handleClearAll}
        />
    );
}

export interface GlyphReactChipsbarProps {
    /** UI interface *modern* | *classic* */
    uiInterface: UIInterface;
    locale?: string;
    basePath?: string;
}

GlyphReactChipsbar.defaultProps = {
    uiInterface: 'classic',
} as GlyphReactChipsbarProps;

export default GlyphReactChipsbar;
