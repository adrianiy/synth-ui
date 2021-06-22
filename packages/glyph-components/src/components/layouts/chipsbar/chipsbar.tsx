import { Component, Event, EventEmitter, Prop, State, h, Element } from '@stencil/core';
import {
    DateFilter,
    FiltersConfig,
    FilterSelectEvent,
    FilterUpdateEvent,
    DateSelectionEvent,
    UIInterface,
    ComparableType,
} from 'glyph-core';
import { Flex } from '../../../utils/layout';
import { getLocaleComponentStrings } from '../../../utils/utils';

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
    /** Date selection event */
    @Event() dateSelection: EventEmitter<DateSelectionEvent>;
    /** Date selection event */
    @Event() comparableDateSelection: EventEmitter<DateSelectionEvent>;
    /** Comparable type change event */
    @Event() comparableChange: EventEmitter<ComparableType>;
    /** Filter clear event */
    @Event() filterClear: EventEmitter<string>;
    /** Filter multiselect event */
    @Event() updateFilter: EventEmitter<FilterUpdateEvent>;
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

    private _handleDateSelect = ({ detail: option }: CustomEvent<DateSelectionEvent>) => {
        this.dateSelection.emit(option);
    };

    private _handleComparableDateSelect = ({ detail: option }: CustomEvent<DateSelectionEvent>) => {
        this.comparableDateSelection.emit(option);
    };

    private _handleComparableChange = ({ detail: compType }: CustomEvent<ComparableType>) => {
        this.comparableChange.emit(compType);
    };

    private _handleFilterConfig = () => {
        // TODO: configure filters method
        alert('TODO: configure filters');
    };

    private _handleClearAll = () => {
        this.clearAll.emit();
    };

    private _renderDateChip = (dateFilter: DateFilter) => {
        const { comparableType, comparableOptions } = dateFilter;
        const { startDate, endDate, description, isDefault } = dateFilter.selected[0];
        const { startDate: compStartDate, endDate: compEndDate } = dateFilter.compDates?.[0] || {};

        comparableOptions.forEach(opt => (opt.active = opt.value === comparableType));

        return (
            <glyph-date-filter
                interface={this.interface}
                startDate={startDate}
                endDate={endDate}
                comparableStartDate={compStartDate}
                comparableEndDate={compEndDate}
                description={description}
                active={!isDefault}
                comparableType={comparableType}
                comparableOptions={comparableOptions}
                {...dateFilter}
                onDateSelection={this._handleDateSelect}
                onComparableDateSelection={this._handleComparableDateSelect}
                onComparableChange={this._handleComparableChange}
                onClearEvent={this._handleFilterClear('date')}
            />
        );
    };

    private _renderChips = () => {
        const chips = Object.keys(this.filtersConfig || {}).filter(key => key !== 'date');
        const dateFilter = this.filtersConfig.date;

        return (
            <Flex row class="chips__container">
                {[
                    this._renderDateChip(dateFilter),
                    ...chips.map(chip => (
                        <glyph-filter
                            {...this.filtersConfig[chip]}
                            interface={this.interface}
                            i18n={this._i18n}
                            onOptionClickEvent={this._handleOptionClick(chip)}
                            onClearEvent={this._handleFilterClear(chip)}
                            onMultiSelectEvent={this._handleMultiSelect(chip)}
                        />
                    )),
                ]}
            </Flex>
        );
    };

    private _renderButtons = () => {
        return (
            <Flex middle class="buttons__container">
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
            <Flex row middle spaced class="chipsbar__container">
                {this._renderChips()}
                {this._renderButtons()}
            </Flex>
        );
    }
}
