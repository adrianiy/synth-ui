import { Component, Input } from '@angular/core';
import { FiltersConfig, FilterSelectEvent, UIInterface } from 'glyph-core';
import { Observable } from 'rxjs';
import { FilterService } from '../../services';

@Component({
    selector: 'glyph-ng-chipsbar',
    templateUrl: './chipsbar.component.html',
})
export class ChipsbarComponent {
    /** Filters interface *MODERN* | *CLASSIC* */
    @Input() interface: UIInterface;

    filtersConfig: Observable<FiltersConfig>;

    constructor(private _filterService: FilterService) {
        this.filtersConfig = _filterService.filtersConfig;
    }

    onFilterSelect(event: CustomEvent<FilterSelectEvent>) {
        this._filterService.selectOption(event.detail);
    }
}
