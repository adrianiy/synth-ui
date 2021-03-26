import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FiltersConfig } from 'synth-core/dist/models';
import { actions } from 'synth-core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class SynthFilterService {
    @dispatch() setScreen = actions.filters.setScreen;
    @dispatch() initialize = actions.filters.initialize;

    constructor(protected _translate: TranslateService) {}

    initializeFilters(
        filterEntities: any = {},
        screen: string = '',
        baseConfig: FiltersConfig = {},
        initialFilters: any = {}
    ) {
        this.initialize(filterEntities, screen, baseConfig, initialFilters, desc => this._translate.instant(desc));
    }
}
