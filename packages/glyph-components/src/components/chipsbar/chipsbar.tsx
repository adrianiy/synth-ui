import { Component, Event, EventEmitter, Prop, State, h, Element } from '@stencil/core';
import { FiltersConfig, FilterSelectEvent, UIInterface } from 'glyph-core';
import { Flex } from '../../utils/layout';
import { getLocaleComponentStrings } from '../../utils/utils';

@Component({
    tag: 'glyph-chipsbar',
    styleUrl: 'chipsbar.scss',
    shadow: true,
})
export class ChipsBarComponent {
    /** Filters configuration object */
    @Prop() filtersConfig: FiltersConfig;
    /** Extra i18n translation object */
    @Prop() i18n: { [key: string]: string } = {};
    /** Interface type [ 'MODERN', 'CLASSIC' ] */
    @Prop() interface: UIInterface = UIInterface.classic;
    /** Filter select event */
    @Event() filterSelect: EventEmitter<FilterSelectEvent>;
    /** Filter clear event */
    @Event() filterClear: EventEmitter<any>;
    /** Filter multiselect event */
    @Event() filterMultiSelect: EventEmitter<any>;
    /** Clear all filters event */
    @Event() clearAll: EventEmitter<any>;

    /** scroll state flag */
    @State() scrolled: boolean = false;

    /** Element reference */
    @Element() element: HTMLGlyphChipsbarElement;

    private _i18n: any;

    async componentWillLoad() {
        await this._initializeVariables();
    }

    private async _initializeVariables() {
        const componentI18n = await getLocaleComponentStrings([ 'chipsbar' ], this.element);
        this._i18n = { ...componentI18n, ...this.i18n };
    }

    private _handleOptionClick = (key: string) => (ev: CustomEvent<FilterSelectEvent>) => {
        const event = { ...ev.detail, filterCode: key };
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
            <Flex row className="chips__container">
                {chips.map(chip => (
                    <glyph-filter
                        {...this.filtersConfig[chip]}
                        interface={this.interface}
                        i18n={this._i18n}
                        onOptionClickEvent={this._handleOptionClick(chip)}
                        onClearEvent={this._handleFilterClear}
                        onMultiSelectEvent={this._handleMultiSelect}
                    />
                ))}
            </Flex>
        );
    };

    private _renderButtons = () => {
        return (
            <Flex middle className="buttons__container">
                <glyph-button icon="close" interface={this.interface} onClick={this._handleClearAll} />
                <glyph-button
                    text={this._i18n['configFilters']}
                    interface={this.interface}
                    onClick={this._handleFilterConfig}
                />
            </Flex>
        );
    };

    render() {
        return (
            <Flex row middle spaced className="chipsbar__container">
                {this._renderChips()}
                {this._renderButtons()}
            </Flex>
        );
    }
}
