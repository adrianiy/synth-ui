import { h, Component, Element, Event, EventEmitter, Prop, State, Listen, Method } from '@stencil/core';
import { DateRange, ComparableType, UIInterface, SelectorOption, FilterSelectEvent } from 'glyph-core-poc';
import { Flex } from '../../utils/layout';
import { cls, getLocaleComponentStrings } from '../../utils/utils';
import { Icon } from '../../utils/icons';
import PerfectScrollbar from 'perfect-scrollbar';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

@Component({
    tag: 'glyph-date-filter',
    styleUrl: 'date-filter.scss',
    shadow: true,
})
export class DateFilterComponent {
    /** Base path to get assets */
    @Prop() basePath: string;
    /** Filter description */
    @Prop({ mutable: true }) description: string;
    /** Active flag */
    @Prop({ mutable: true }) active: boolean;
    /** Minimum available date */
    @Prop() minDate: Date;
    /** Maximum available date */
    @Prop() maxDate: Date;
    /** Minimum available comp date */
    @Prop() minComparableDate: Date;
    /** Maximum available comp date */
    @Prop() maxComparableDate: Date;
    /** Optional date ranges */
    @Prop() dateRanges: DateRange[];
    /** Allow single day selection */
    @Prop() singleSelect: boolean;
    /** Number of months to be shown. 2 by default */
    @Prop() months: number = 2;
    /** Comparabel type */
    @Prop({ mutable: true }) comparableType: ComparableType = ComparableType.commercial;
    /** Selected start date */
    @Prop({ mutable: true }) startDate: Date;
    /** Selected end date */
    @Prop({ mutable: true }) endDate: Date;
    /** Selected comparable start date */
    @Prop({ mutable: true }) comparableStartDate: Date;
    /** Selected comparable end date */
    @Prop({ mutable: true }) comparableEndDate: Date;
    /** Comparable options */
    @Prop() comparableOptions: SelectorOption[];
    /** Extra i18n translation object */
    @Prop() i18n: { [key: string]: string } = {};
    /** **optional** force locale change if html lang is not interpreted */
    @Prop() locale: string;
    /** Filter chip interface ['MODERN', 'CLASSIC'] */
    @Prop() interface: UIInterface = UIInterface.classic;
    /** Date selection event */
    @Event() dateSelection: EventEmitter<FilterSelectEvent>;
    /** Clear selected filters callback */
    @Event() clearEvent: EventEmitter<any>;
    /** Element reference */
    @Element() element: HTMLGlyphDateFilterElement;
    /** Filter expanded flag */
    @State() expanded: boolean = false;
    /** Comparable input active flag */
    @State() comparableActive: boolean = false;
    /** Custom comparable flag */
    @State() isCustomComparable: boolean = false;
    /** Chip description */
    @State() chipDescription: string;
    /** Scrollbar element */
    @State() ps: PerfectScrollbar;

    private _i18n: { [key: string]: string };

    @Listen('click', { target: 'window' })
    clickOutside(event: any) {
        if (!event.composedPath().includes(this.element)) {
            this.expanded = false;
        }
    }

    componentWillRender() {
        this._getChipDescription();
    }

    /* eslint-disable @stencil/decorators-style, @stencil/async-methods  */
    /** This method will return image height */
    @Method()
    async clearFilter() {
        this._onClear();
    }

    async componentWillLoad() {
        const componentI18n = await getLocaleComponentStrings(
            [ 'date-filter' ],
            this.element,
            this.basePath,
            this.locale,
        );
        this._i18n = { ...componentI18n, ...this.i18n };
    }

    private _scrollbarInit = (ps: PerfectScrollbar) => {
        if (!this.ps) {
            this.ps = ps;
        }
    };

    private _getChipDescription = () => {
        const comparable = this._getComparableText();

        this.active = !this._isDefault();
        this.chipDescription =
            this.description ||
            `${dayjs(this.startDate).format('YYYY-MM-DD')} - ${dayjs(this.endDate).format('YYYY-MM-DD')}${comparable}`;
    };

    private _expandFilter = () => {
        this.expanded = !this.expanded;
    };

    private _changeActiveInput = (value: boolean) => () => {
        this.comparableActive = value;
    };

    private _onClear = (event?: any) => {
        this.comparableActive = false;
        this.isCustomComparable = false;
        this._setDefault();
        this.expanded = false;
        this.clearEvent.emit();
        event?.stopPropagation();
    };

    private _isDefault = () => {
        const defaultValue = this.dateRanges.find(range => range.isDefault);

        if (defaultValue) {
            const { startDate, endDate } = defaultValue;
            return this.startDate === startDate && this.endDate === endDate;
        }
    };

    private _setDefault = () => {
        const defaultValue = this.dateRanges.find(range => range.isDefault);

        if (defaultValue) {
            this._selectRange(defaultValue)();
        }
    };

    private _selectRange = (dateRange: DateRange) => () => {
        this._selectDate({ detail: dateRange } as any);
    };

    private _selectDate = ({
        detail: { startDate, endDate, description, comparableType, ...rest },
    }: CustomEvent<FilterSelectEvent>) => {
        const event = {
            description,
            startDate,
            endDate,
            comparableStartDate: this.comparableStartDate,
            comparableEndDate: this.comparableEndDate,
            comparableType: comparableType || this.comparableType,
            ...rest,
        };

        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.comparableType = comparableType || this.comparableType;
        this._getChipDescription();
        this.dateSelection.emit(event);
        this.expanded = false;
    };

    private _selectCompDate = ({ detail: { startDate, endDate } }: CustomEvent<FilterSelectEvent>) => {
        this.comparableStartDate = startDate;
        this.comparableEndDate = endDate;
        this._getChipDescription();
    };

    private _selectOption = ({ detail: { name, value } }: CustomEvent<SelectorOption>) => {
        this.comparableType = value as ComparableType;
        this.isCustomComparable = this.comparableType === ComparableType.custom;
        this.comparableOptions.forEach(option => (option.active = option.name === name));

        if (this.isCustomComparable) {
            const dayDiff = dayjs(this.endDate).diff(dayjs(this.startDate), 'day');
            this.comparableStartDate = dayjs(this.startDate)
                .subtract(dayDiff + 1, 'day')
                .toDate();
            this.comparableEndDate = dayjs(this.startDate).subtract(1, 'day').toDate();
            this.comparableActive = true;
        }
        this._getChipDescription();
    };

    private _handleInputStart = ({ detail: startDate }: CustomEvent<string>) => {
        const isAllowed = dayjs(startDate).isSameOrBefore(dayjs(this.endDate));

        if (isAllowed) {
            this.startDate = dayjs(startDate).toDate();
        }
    };

    private _handeInputEnd = ({ detail: endDate }: CustomEvent<string>) => {
        const isAllowed = dayjs(endDate).isSameOrAfter(dayjs(this.startDate));

        if (isAllowed) {
            this.endDate = dayjs(endDate).toDate();
        }
    };

    private _handleComparableInputStart = ({ detail: startDate }: CustomEvent<string>) => {
        const isAllowed = dayjs(startDate).isSameOrBefore(dayjs(this.comparableEndDate));

        if (isAllowed) {
            this.comparableStartDate = dayjs(startDate).toDate();
        }
    };

    private _handeComparableInputEnd = ({ detail: endDate }: CustomEvent<string>) => {
        const isAllowed = dayjs(endDate).isSameOrAfter(dayjs(this.comparableStartDate));

        if (isAllowed) {
            this.comparableEndDate = dayjs(endDate).toDate();
        }
    };

    private _handleApply = () => {
        this._selectDate({
            detail: {
                startDate: this.startDate,
                endDate: this.endDate,
            },
        } as any);
        this._getChipDescription();
    };

    private _renderDateRanges = () => {
        return (
            this.dateRanges && (
                <glyph-scroll tiny initCallback={this._scrollbarInit} containerClass="date-filter__date-ranges">
                    <ul class="date-filter__date-ranges">
                        {this.dateRanges.map(range => {
                            const active = this.description === range.description;

                            return (
                                <li onClick={this._selectRange(range)} class={{ active }}>
                                    <Flex row middle spaced>
                                        <span>{this._i18n[range.description]}</span>
                                        {active && <em class="material-icons">checkmark</em>}
                                    </Flex>
                                </li>
                            );
                        })}
                    </ul>
                </glyph-scroll>
            )
        );
    };

    private _renderCalendars = () => {
        return (
            <glyph-calendar
                minDate={this.minDate}
                maxDate={this.maxDate}
                minDateAux={this.minComparableDate}
                maxDateAux={this.maxComparableDate}
                startDate={this.startDate}
                endDate={this.endDate}
                startDateAux={this.isCustomComparable && this.comparableStartDate}
                endDateAux={this.isCustomComparable && this.comparableEndDate}
                months={this.months}
                auxActive={this.isCustomComparable}
                secondary={this.isCustomComparable && this.comparableActive}
                onDateSelect={this._selectDate}
                onDateSelectAux={this._selectCompDate}
            />
        );
    };

    private _renderComparableInputs = () => {
        const active = this.isCustomComparable || this.comparableActive;
        const diff = this.comparableType === ComparableType.calendar ? 365 : 364;

        const startDate = this.isCustomComparable
            ? this.comparableStartDate
            : dayjs(this.startDate).subtract(diff, 'day');
        const endDate = this.isCustomComparable ? this.comparableEndDate : dayjs(this.endDate).subtract(diff, 'day');

        return [
            <Flex row spaced top class="input__header">
                <h5>{this._i18n['Comparable date']}</h5>
                {this.comparableOptions?.length && (
                    <glyph-selector
                        options={this.comparableOptions}
                        interface={this.interface}
                        onOptionSelect={this._selectOption}
                    />
                )}
            </Flex>,
            <Flex row spaced class={cls('date-filter__inputs__comparable', { active })}>
                <glyph-input
                    box
                    disabled={!this.isCustomComparable}
                    input-type="date"
                    value={dayjs(startDate).format('YYYY-MM-DD')}
                    min={dayjs(this.minComparableDate).format('YYYY-MM-DD')}
                    max={dayjs(this.maxComparableDate).format('YYYY-MM-DD')}
                    onClick={this._changeActiveInput(true)}
                    onInputChange={this._handleComparableInputStart}
                />
                <glyph-input
                    box
                    disabled={!this.isCustomComparable}
                    input-type="date"
                    value={dayjs(endDate).format('YYYY-MM-DD')}
                    min={dayjs(this.minComparableDate).format('YYYY-MM-DD')}
                    max={dayjs(this.maxComparableDate).format('YYYY-MM-DD')}
                    onClick={this._changeActiveInput(true)}
                    onInputChange={this._handeComparableInputEnd}
                />
            </Flex>,
        ];
    };

    private _renderCurrentInputs = () => {
        const active = !this.isCustomComparable || !this.comparableActive;

        return [
            <h5>{this._i18n['Current date']}</h5>,
            <Flex row spaced class={cls('date-filter__inputs__current', { active })}>
                <glyph-input
                    box
                    input-type="date"
                    onInputChange={this._handleInputStart}
                    value={dayjs(this.startDate).format('YYYY-MM-DD')}
                    min={dayjs(this.minDate).format('YYYY-MM-DD')}
                    max={dayjs(this.maxDate).format('YYYY-MM-DD')}
                    onClick={this._changeActiveInput(false)}
                />
                <glyph-input
                    box
                    input-type="date"
                    onInputChange={this._handeInputEnd}
                    value={dayjs(this.endDate).format('YYYY-MM-DD')}
                    min={dayjs(this.minDate).format('YYYY-MM-DD')}
                    max={dayjs(this.maxDate).format('YYYY-MM-DD')}
                    onClick={this._changeActiveInput(false)}
                />
            </Flex>,
        ];
    };

    private _renderInputs = () => {
        return (
            <Flex column left class="date-filter__inputs">
                {this._renderCurrentInputs()}
                {this._renderComparableInputs()}
                <Flex row right middle class="date-filter__inputs__buttons">
                    <glyph-button text={this._i18n['apply']} interface={this.interface} onClick={this._handleApply} />
                </Flex>
            </Flex>
        );
    };

    private _renderCalendarDrilldown = () => {
        return (
            <div class={cls('date-filter__container', this.interface)}>
                {this._renderDateRanges()}
                {this._renderCalendars()}
                {this._renderInputs()}
            </div>
        );
    };

    private _getComparableText = () => {
        switch (this.comparableType) {
            case ComparableType.calendar:
                return ` - Comp: ${this._i18n[this.comparableType]}`;
            case ComparableType.custom:
                return ` - Comp: ${dayjs(this.comparableStartDate).format('YYYY-MM-DD')} - ${dayjs(
                    this.comparableEndDate,
                ).format('YYYY-MM-DD')}`;
            default:
                return '';
        }
    };

    render() {
        const active = this.active;

        return (
            <Flex class={this.interface}>
                <Flex
                    row
                    middle
                    class={cls(
                        'filter-chip',
                        {
                            expanded: this.expanded,
                            active,
                        },
                        this.interface,
                    )}
                    onClick={this._expandFilter}
                >
                    <span
                        class={cls('label--l', {
                            'label--l--medium': this.interface === UIInterface.redesign,
                        })}
                    >
                        {this._i18n[this.chipDescription] || this.chipDescription}
                    </span>
                    <Icon
                        onClick={active ? this._onClear : null}
                        icon={
                            active
                                ? 'close'
                                : this.interface === UIInterface.classic
                                    ? 'arrow_drop_down'
                                    : 'expand_more'
                        }
                    />
                </Flex>
                {this.expanded && this._renderCalendarDrilldown()}
            </Flex>
        );
    }
}
