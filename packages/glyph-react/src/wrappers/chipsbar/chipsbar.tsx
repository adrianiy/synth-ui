import { FilterSelectEvent, FilterUpdateEvent, UIInterface } from 'glyph-core';

import React from 'react';
import { GlyphChipsbar } from '../../components';
import { useFilters, useFiltersConfig } from '../../providers/filter-state';

function GlyphReactChipsbar({ uiInterface }: GlyphReactChipsbarProps) {
    const { filtersConfig, selectFilter, updateFilter, clearFilter, clearAll } = useFiltersConfig();
    const { filters } = useFilters();

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
            interface={uiInterface}
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
}

GlyphReactChipsbar.defaultProps = {
    uiInterface: 'classic',
} as GlyphReactChipsbarProps;

export default GlyphReactChipsbar;
