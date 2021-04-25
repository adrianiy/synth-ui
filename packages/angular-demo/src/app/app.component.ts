import { Component, OnInit } from '@angular/core';
import { FilterService } from 'glyph-angular';
import { FiltersConfig } from '../config/filters.config';
import { DataService } from './services/data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'ng-demo';

    constructor(private _filtersService: FilterService, private _dataService: DataService) {}

    ngOnInit() {
        this.initializeFilter();
    }

    async initializeFilter() {
        this._filtersService.initializeFilters(await this._dataService.getFiltersConfig(), 'test', FiltersConfig);
    }
}
