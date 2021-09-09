import { FilterUpdateEvent } from 'glyph-core-poc';

import React from 'react';
import { GlyphChipsbar } from '../../components';
import { useFiltersConfig } from '../../providers/filter-state';

function GlyphReactChipsbar({ uiInterface, locale, i18n, basePath }: GlyphReactChipsbarProps) {
    const { filtersConfig, updateFiltersConfig, updateFilter, clearAll } = useFiltersConfig();

    const handleSelectFilter = () => {
        updateFiltersConfig(filtersConfig || {});
    };

    const handleFilterUpdate = (event: CustomEvent<FilterUpdateEvent>) => {
        updateFilter(event.detail);
    };

    const handleFilterClear = () => {
        updateFiltersConfig(filtersConfig || {});
    };

    const handleClearAll = () => {
        clearAll();
    };

    return (
        <GlyphChipsbar
            basePath={basePath}
            interface={uiInterface}
            locale={locale}
            i18n={i18n}
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
    uiInterface: string;
    i18n?: any;
    locale?: string;
    basePath?: string;
}

GlyphReactChipsbar.defaultProps = {
    uiInterface: 'classic',
} as GlyphReactChipsbarProps;

export default GlyphReactChipsbar;
