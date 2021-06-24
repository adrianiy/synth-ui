import { Component, Input } from '@angular/core';
import { FiltersConfig, FilterSelectEvent, FilterUpdateEvent, UIInterface } from 'glyph-core';
import { Observable } from 'rxjs';
import { FilterService } from '../../services';

@Component({
    selector: 'glyph-ng-chipsbar',
    templateUrl: './chipsbar.component.html',
})
export class ChipsbarComponent {
    /** Filters interface *MODERN* | *CLASSIC* */
    @Input() interface: UIInterface;

    /** @ignore Filters state */
    filtersConfig: Observable<FiltersConfig>;

    constructor(private _filterService: FilterService) {
        this.filtersConfig = _filterService.filtersConfig;
        /* eslint-disable no-console */
        _filterService.comparableType.subscribe(res => console.log(res));
    }

    /** @ignore Filter selection event */
    onFilterSelect(event: CustomEvent<FilterSelectEvent>) {
        this._filterService.selectOption(event.detail);
    }

    /** @ignore Filter clear event */
    onFilterClear(event: CustomEvent<string>) {
        this._filterService.clearFilter(event.detail);
    }

    /** @ignore Filter update event */
    onFilterUpdate(event: CustomEvent<FilterUpdateEvent>) {
        this._filterService.update(event.detail);
    }

    /** @ignore Clear all filters event */
    onClearAll() {
        this._filterService.clearAllFilters();
    }
}
