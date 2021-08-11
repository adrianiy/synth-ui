import { Component, Event, EventEmitter, Prop, State, h, Element, Host } from '@stencil/core';
import { FiltersConfig, FilterSelectEvent, FilterUpdateEvent, UIInterface } from 'glyph-core-poc';
import { Flex } from '../../../utils/layout';
import { cls, getLocaleComponentStrings } from '../../../utils/utils';

@Component({
    tag: 'glyph-chipsbar',
    styleUrl: 'chipsbar.scss',
    shadow: true,
})
export class ChipsBarComponent {
    /** Base path to get assets */
    @Prop() basePath: string;
    /** Filters configuration object */
    @Prop() filtersConfig: FiltersConfig;
    /** Hide zara south filters active */
    @Prop() hideZaraSouth: boolean = true;
    /** Extra i18n translation object */
    @Prop() i18n: { [key: string]: string } = {};
    /** **optional** force locale change if html lang is not interpreted */
    @Prop() locale: string;
    /** Interface type */
    @Prop() interface: UIInterface = UIInterface.classic;
    /** Filter select event */
    @Event() filterSelect: EventEmitter<FilterSelectEvent>;
    /** Filter clear event */
    @Event() filterClear: EventEmitter<string>;
    /** Filter multiselect event */
    @Event() updateFilter: EventEmitter<FilterUpdateEvent>;
    /** Clear all filters event */
    @Event() clearAll: EventEmitter<any>;

    /** scroll state flag */
    @State() scrolled: boolean = false;
    /** Modal configuration visibility flag */
    @State() configModal: boolean = false;

    /** Element reference */
    @Element() element: HTMLGlyphChipsbarElement;

    private _i18n: any;
    private _refs: any[];

    async componentWillLoad() {
        await this._initializeVariables();
    }

    private async _initializeVariables() {
        const componentI18n = await getLocaleComponentStrings([ 'chipsbar' ], this.element, this.basePath, this.locale);
        this._refs = [];
        this._i18n = { ...componentI18n, ...this.i18n };
    }

    private _handleOptionClick = (key: string) => ({ detail }: CustomEvent<FilterSelectEvent>) => {
        if (key === 'date') {
            this.filtersConfig[key] = { ...this.filtersConfig[key], ...detail };
        }
        const event = { ...detail, filterCode: key };
        this.filterSelect.emit(event);
    };

    private _handleFilterClear = (key: string) => () => {
        this.filterClear.emit(key);
    };

    private _handleMultiSelect = (key: string) => () => {
        const filter = this.filtersConfig[key];

        this.updateFilter.emit({
            filterCode: key,
            checkMultiSelect: true,
            filter: { ...filter, multiSelect: !filter.multiSelect },
        });
    };

    private _handleFilterConfig = (value: boolean) => () => {
        this.configModal = value;
    };

    private _handleConfigChange = (event: CustomEvent<FiltersConfig>) => {
        Object.keys(event.detail).forEach((key: string) =>
            this.updateFilter.emit({ filterCode: key, checkMultiSelect: false, filter: event.detail[key] }),
        );
    };

    private _handleClearAll = () => {
        this._refs.forEach(ref => {
            ref['clearFilter']?.();
        });
        this.clearAll.emit();
    };

    private _renderChips = () => {
        const chips = Object.keys(this.filtersConfig || {})
            .filter(key => this.filtersConfig[key].visible)
            .sort((a, b) => this.filtersConfig[a].position - this.filtersConfig[b].position);

        return (
            <Flex row class="chips__container">
                {chips.map(chip =>
                    chip === 'date' ? (
                        <glyph-date-filter
                            {...this.filtersConfig[chip]}
                            ref={ref => this._refs.push(ref)}
                            basePath={this.basePath}
                            locale={this.locale}
                            interface={this.interface}
                            onDateSelection={this._handleOptionClick(chip)}
                            onClearEvent={this._handleFilterClear(chip)}
                        />
                    ) : (
                        <glyph-filter
                            {...this.filtersConfig[chip]}
                            ref={ref => this._refs.push(ref)}
                            basePath={this.basePath}
                            locale={this.locale}
                            interface={this.interface}
                            i18n={this._i18n}
                            onOptionClick={this._handleOptionClick(chip)}
                            onClear={this._handleFilterClear(chip)}
                            onMultiSelectEvent={this._handleMultiSelect(chip)}
                        />
                    ),
                )}
            </Flex>
        );
    };

    private _renderButtons = () => {
        return (
            <Flex middle class="buttons__container">
                <glyph-button
                    class="label--l"
                    text={this._i18n['configFilters']}
                    action={this.interface === UIInterface.redesign}
                    interface={this.interface}
                    onClick={this._handleFilterConfig(true)}
                />
                <glyph-button
                    class={this.interface === UIInterface.redesign ? 'label--l label--l--medium' : ''}
                    action={this.interface === UIInterface.redesign}
                    icon={this.interface !== UIInterface.redesign ? 'close' : undefined}
                    text={this.interface === UIInterface.redesign ? this._i18n['cleanFilters'] : ''}
                    interface={this.interface}
                    onClick={this._handleClearAll}
                />
            </Flex>
        );
    };

    private _renderConfigurationModal = () => {
        return (
            <glyph-modal
                visible={true}
                modalTitle={this._i18n['configFilters']}
                interface={this.interface}
                closeButton
                onClose={this._handleFilterConfig(false)}
            >
                <glyph-config-modal
                    filtersConfig={this.filtersConfig}
                    hideZaraSouth={this.hideZaraSouth}
                    interface={this.interface}
                    i18n={this._i18n}
                    onConfigChange={this._handleConfigChange}
                />
            </glyph-modal>
        );
    };

    render() {
        return (
            <Host style={{ zIndex: this.configModal ? '99' : 'inherit' }}>
                <Flex row middle spaced class={cls('chipsbar__container', this.interface)}>
                    {this._renderChips()}
                    {this._renderButtons()}
                </Flex>
                {this.configModal && this._renderConfigurationModal()}
            </Host>
        );
    }
}
