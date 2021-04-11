import { Component, Event, EventEmitter, Prop, State, h, Element } from '@stencil/core';
import { FiltersConfig } from 'synth-core';
import { distributions, RowLayout } from '../../utils/layout';
import { getLocaleComponentStrings } from '../../utils/utils';

@Component({
    tag: 'synth-chipsbar',
    styleUrl: 'chipsbar.scss',
    shadow: true,
})
export class ChipsBarComponent {
    /** Filters configuration object */
    @Prop() filtersConfig: FiltersConfig;
    /** Extra i18n translation object */
    @Prop() i18n: { [key: string]: string } = {};
    /** Filter select event */
    @Event() filterSelect: EventEmitter<any>;
    /** Filter clear event */
    @Event() filterClear: EventEmitter<any>;
    /** Filter multiselect event */
    @Event() filterMultiSelect: EventEmitter<any>;
    /** Clear all filters event */
    @Event() clearAll: EventEmitter<any>;

    /** scroll state flag */
    @State() scrolled: boolean = false;

    /** Element reference */
    @Element() element: HTMLSynthChipsbarElement;

    private _i18n: any;

    async componentWillLoad() {
        await this._initializeVariables();
    }

    private async _initializeVariables() {
        const componentI18n = await getLocaleComponentStrings([ 'chipsbar' ], this.element);
        this._i18n = { ...componentI18n, ...this.i18n };
    }

    private _handleOptionClick = (event: any) => {
        this.filterSelect.emit(event);
    };

    private _handleFilterClear = (event: any) => {
        this.filterClear.emit(event);
    };

    private _handleMultiSelect = (event: any) => {
        this.filterMultiSelect.emit(event);
    };

    private _handleFilterConfig = () => {
        // TODO: configure filters method
        alert('TODO: configure filters');
    };

    private _handleClearAll = () => {
        this.clearAll.emit();
    };

    private _renderChips = () => {
        const chips = Object.keys(this.filtersConfig || {});

        return (
            <RowLayout className="chips__container">
                {chips.map(chip => (
                    <synth-filter
                        {...this.filtersConfig[chip]}
                        i18n={this._i18n}
                        onOptionClickEvent={this._handleOptionClick}
                        onClearEvent={this._handleFilterClear}
                        onMultiSelectEvent={this._handleMultiSelect}
                    />
                ))}
            </RowLayout>
        );
    };

    private _renderButtons = () => {
        return (
            <RowLayout className="buttons__container" distribution={distributions.MIDDLE}>
                <synth-button icon="close" onClick={this._handleClearAll} />
                <synth-button text={this._i18n['configFilters']} onClick={this._handleFilterConfig} />
            </RowLayout>
        );
    };

    render() {
        return (
            <RowLayout className="chipsbar__container" distribution={[ distributions.MIDDLE, distributions.SPACED ]}>
                {this._renderChips()}
                {this._renderButtons()}
            </RowLayout>
        );
    }
}
