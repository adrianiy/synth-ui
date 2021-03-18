import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FiltersConfig } from '../../store/models';
import actions from './../../store/actions';

@Injectable()
export class SynthFilterService {
    constructor() {}

    @dispatch() initialize = actions.filters.initialize;

    initializeFilters(
        filterEntities: any = {},
        screen: string = '',
        baseConfig: FiltersConfig = {},
        initialFilters: any = {}
    ) {
        this.initialize(filterEntities, screen, baseConfig, initialFilters);
    }
}
