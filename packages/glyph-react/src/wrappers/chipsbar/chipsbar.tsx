import { actions, FilterSelectEvent, FilterUpdateEvent, Store, UIInterface } from 'glyph-core';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlyphChipsbar } from '../../components';

function GlyphReactChipsbar({ uiInterface }: GlyphReactChipsbarProps) {
    const dispatch = useDispatch();
    const filtersConfig = useSelector((state: Store) => state.filters.filtersConfig);

    const handleSelectFilter = (event: CustomEvent<FilterSelectEvent>) => {
        dispatch(actions.filters.selectOption(event.detail));
    };

    const handleFilterUpdate = (event: CustomEvent<FilterUpdateEvent>)=>{
        dispatch(actions.filters.updateFilter(event.detail));
    };

    const handleFilterClear = (event: CustomEvent<string>) => {
        dispatch(actions.filters.clearFilter(event.detail));
    };

    const handleClearAll = () => {
        dispatch(actions.filters.clearAll());
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
