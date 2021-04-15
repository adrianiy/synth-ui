import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FiltersConfig } from 'glyph-core/dist/models';
import { actions } from 'glyph-core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class SynthFilterService {
    /**
     * Action to change screen name. This will be used in multi-screen
     * aps to set filter visibility, and get correct query filters
     */
    @dispatch() setScreen = actions.filters.setScreen;
    /** Action to trigger filter initialization */
    @dispatch() initialize = actions.filters.initialize;

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
        initialFilters: any = {}
    ) {
        this.initialize(filterEntities, screen, baseConfig, initialFilters, (desc) => this._translate.instant(desc));
    }
}
