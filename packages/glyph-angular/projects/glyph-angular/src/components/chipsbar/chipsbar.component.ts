import { Component, Input } from '@angular/core';
import { FiltersConfig, FilterSelectEvent, UIInterface } from 'glyph-core';
import { GlyphFilterService } from '../../services/services.module';

@Component({
    selector: 'glyph-ng-chipsbar',
    templateUrl: './chipsbar.component.html',
})
export class ChipsbarComponent {
    /** Filters interface *MODERN* | *CLASSIC* */
    @Input() interface: UIInterface;

    filtersConfig: FiltersConfig = {};

    constructor(private _filterService: GlyphFilterService) {}

    onFilterSelect(event: CustomEvent<FilterSelectEvent>) {
        this._filterService.selectOption(event.detail);
    }
}
