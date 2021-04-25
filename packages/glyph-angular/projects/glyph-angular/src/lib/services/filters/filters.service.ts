import { Injectable } from '@angular/core';
import { dispatch, select } from '@angular-redux/store';
import { actions, FiltersConfig, FilterSelectEvent, FilterUpdateEvent } from 'glyph-core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable()
export class FilterService {
    /**
     * Action to change screen name. This will be used in multi-screen
     * aps to set filter visibility, and get correct query filters
     */
    @dispatch() changeScreen = actions.filters.setScreen;
    /** Action to trigger filter initialization */
    @dispatch() initialize = actions.filters.initialize;
    /** Action to trigger filter selection */
    @dispatch() select = actions.filters.selectOption;
    /** Action to trigger filter clear */
    @dispatch() clear = actions.filters.clearFilter;
    /** Action to trigger clear all filters */
    @dispatch() clearAll = actions.filters.clearAll;
    /** Action to trigger filter update */
    @dispatch() update = actions.filters.updateFilter;

    /** filters state */
    @select([ 'filters', 'filtersConfig' ]) filtersConfig: Observable<FiltersConfig>;

    constructor(protected _translate: TranslateService) {}

    /**
     * Initialize filters state.
     * Get filters from localStorage and merge them with **baseConfig** and **filterEntities**.
     *
     * @param filterEntities set of filters received from DB
     * @param screen current active screen
     * @param baseConfig basic filter structure
     * @param initialFilters which filters should be active on first load
     */
    initializeFilters(
        filterEntities: any = {},
        screen: string = '',
        baseConfig: FiltersConfig = {},
        initialFilters: any = {},
    ) {
        this.initialize(filterEntities, screen, baseConfig, initialFilters, desc => this._translate.instant(desc));
    }

    /**
     * Change screen in filters state
     *
     * @param screen current active screen
     */
    setScreen(screen: string) {
        this.changeScreen(screen);
    }

    /**
     * Apply filter selction, toggles option `active` status and add option to selected array
     *
     * @param selection Selection data
     */
    selectOption(selection: FilterSelectEvent) {
        this.select(selection);
    }

    /**
     * Clear the selected options in a filter
     *
     * @param filterCode filter key
     */
    clearFilter(filterCode: string) {
        this.clear(filterCode);
    }

    /**
     * Clear all selected fitlers
     */
    clearAllFilters() {
        this.clearAll();
    }

    /**
     * Update some filter with a new configuration
     *
     * @param filterCode filter key
     */
    updateFilter(update: FilterUpdateEvent) {
        this.update(update);
    }
}
