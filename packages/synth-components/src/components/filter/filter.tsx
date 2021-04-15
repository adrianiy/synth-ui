import { Component, Prop, h, State, Host, Element, Event, EventEmitter } from '@stencil/core';
import { distributions, Flex } from '../../utils/layout';
import { FilterOptionHeader, SelectedFilter } from 'synth-core';

@Component({
    tag: 'synth-filter',
    styleUrl: 'filter.scss',
    shadow: true,
})
export class FilterComponent {
    /** Filter description */
    @Prop() description: string;
    /** Filter plural */
    @Prop() plural: string;
    /** Filter options */
    @Prop() options: FilterOptionHeader[];
    /** Multiselect flag. True if filter allows multiselect toggler */
    @Prop() haveMultiSelect: boolean = true;
    /** This flag is true if multiselect is active */
    @Prop() multiSelect: boolean = false;
    /** Filter selected */
    @Prop() selected: SelectedFilter[];
    /** Search placeholder */
    @Prop() searchPlaceholder: string;
    /** Extra i18n translation object */
    @Prop() i18n: { [key: string]: string } = {};
    /** Option click event */
    @Event() optionClickEvent: EventEmitter<any>;
    /** Clear selected filters callback */
    @Event() clearEvent: EventEmitter<any>;
    /** Multiselect toggler callback */
    @Event() multiSelectEvent: EventEmitter<any>;
    /** Element reference */
    @Element() element: HTMLSynthFilterElement;
    /** Chip description */
    @State() chipDescription: string;
    /** Filter expanded flag */
    @State() expanded: boolean = false;
    /** Filter search value */
    @State() searchValue: string;

    componentWillRender() {
        this._changeDescription();
    }

    private _expandFilter = () => {
        this.expanded = !this.expanded;
    };

    private _closeFilter = () => {
        this.expanded = false;
    };

    private _optionClick = (option: FilterOptionHeader) => {
        this.optionClickEvent.emit(option);

        if (!this.multiSelect && !option.header) {
            this._expandFilter();
        }
    };

    private _multiSelectClick = () => {
        this.multiSelectEvent.emit();
    };

    private _onClear = (event: any) => {
        if (this.selected.length) {
            this.clearEvent.emit();
            event.stopPropagation();
        }
    };

    private _changeDescription() {
        if (this.selected.length > 0) {
            this.chipDescription =
                this.selected.length > 1 ? `${this.selected.length} ${this.plural}` : this.selected[0].description;
        } else {
            this.chipDescription = this.description;
        }
    }

    private _renderFilterOptions() {
        return (
            <synth-filter-options
                description={this.description}
                options={this.options}
                haveMultiSelect={this.haveMultiSelect}
                multiSelect={this.multiSelect}
                searchPlaceholder={this.searchPlaceholder}
                i18n={this.i18n}
                optionClickEvent={this._optionClick}
                multiSelectEvent={this._multiSelectClick}
                closeEvent={this._closeFilter}
            />
        );
    }

    render() {
        return (
            <Host>
                <Flex
                    row
                    distribution={[distributions.MIDDLE]}
                    className={`filter-chip ${!!this.selected.length && 'active'} ${this.expanded && 'expanded'}`}
                    onClick={this._expandFilter}
                >
                    <span>{this.chipDescription}</span>
                    <em class="material-icons" onClick={this._onClear}>
                        {this.selected.length ? 'close' : 'arrow_drop_down'}
                    </em>
                </Flex>
                {this.expanded && this._renderFilterOptions()}
            </Host>
        );
    }
}
