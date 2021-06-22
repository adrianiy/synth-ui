import { h, Component, Prop, Element, State, Event, EventEmitter } from '@stencil/core';
import { Flex } from '../../utils/layout';
import { cls, getComponentClosestLanguage } from '../../utils/utils';
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import weekDay from 'dayjs/plugin/weekday';
import isBetween from 'dayjs/plugin/isBetween';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import 'dayjs/locale/es';
import 'dayjs/locale/en';

dayjs.extend(updateLocale);
dayjs.extend(weekDay);
dayjs.extend(isBetween);
dayjs.extend(isSameOrAfter);

@Component({
    tag: 'glyph-calendar',
    styleUrl: './calendar.scss',
    shadow: true,
})
export class CalendarComponent {
    /** Minimum allowed date */
    @Prop() minDate: Date = dayjs().startOf('year').toDate();
    /** Maximum allowed date */
    @Prop() maxDate: Date = new Date();
    /** Minimum allowed date */
    @Prop() minDateAux: Date = dayjs().startOf('year').toDate();
    /** Maximum allowed date */
    @Prop() maxDateAux: Date = new Date();
    /** Selected start date */
    @Prop() startDate: Date = new Date();
    /** Selected end date */
    @Prop() endDate: Date = new Date();
    /** Secondary selected start date */
    @Prop() startDateAux: Date = new Date();
    /** Secondary selected end date */
    @Prop() endDateAux: Date = new Date();
    /** Secondary selection. Shows selection in orange */
    @Prop() secondary: boolean;
    /** Allow single day selection */
    @Prop() singleSelect: boolean;
    /** Number of months to be shown. 2 by default */
    @Prop() months: number = 2;
    /** Element reference */
    @Element() element: HTMLGlyphCalendarElement;
    /** Event triggered on date selection */
    @Event() dateSelect: EventEmitter<{ startDate: Date; endDate: Date }>;
    /** Event triggered on aux date selection */
    @Event() dateSelectAux: EventEmitter<{ startDate: Date; endDate: Date }>;

    @State() currentMonth: dayjs.Dayjs;
    @State() selectedStartDate: dayjs.Dayjs;
    @State() selectedStartDateAux: dayjs.Dayjs;
    @State() currentHoveredDate: dayjs.Dayjs;
    @State() currentHoveredDateAux: dayjs.Dayjs;

    componentWillLoad() {
        this.currentMonth = dayjs(this.endDate);
        const lang = getComponentClosestLanguage(this.element);
        dayjs.locale(lang);
        dayjs.updateLocale(lang, { weekStart: 1 });
    }

    private _prevMonth = () => {
        this.currentMonth = this.currentMonth.subtract(1, 'month');
    };

    private _nextMonth = () => {
        this.currentMonth = this.currentMonth.add(1, 'month');
    };

    private _selectDate = (startDate: Date, endDate: Date) => {
        this.startDate = startDate;
        this.endDate = endDate;

        this.dateSelect.emit({
            startDate,
            endDate,
        });
    };

    private _selectDateAux = (startDate: Date, endDate: Date) => {
        this.startDateAux = startDate;
        this.endDateAux = endDate;

        this.dateSelectAux.emit({
            startDate,
            endDate,
        });
    };

    private _selectMonth = (month: dayjs.Dayjs) => () => {
        if (!this.secondary) {
            this._selectDate(month.startOf('month').toDate(), month.endOf('month').toDate());
        }
    };

    private _secondarySelection = (day: dayjs.Dayjs) => {
        if (this.singleSelect) {
            this._selectDateAux(day.toDate(), day.toDate());
        } else if (!this.selectedStartDateAux) {
            this.selectedStartDateAux = day;
            [ this.startDateAux, this.endDateAux ] = [ null, null ];
        } else {
            const isValidSelection = day.isSameOrAfter(this.selectedStartDateAux, 'day');

            if (isValidSelection) {
                this._selectDateAux(this.selectedStartDateAux.toDate(), day.toDate());
                this.selectedStartDateAux = null;
                this.currentHoveredDateAux = null;
            } else {
                this.selectedStartDateAux = null;
                this._handleDayClick(day)();
            }
        }
    };

    private _primarySelection = (day: dayjs.Dayjs) => {
        if (this.singleSelect) {
            this._selectDate(day.toDate(), day.toDate());
        } else if (!this.selectedStartDate) {
            this.selectedStartDate = day;
            [ this.startDate, this.endDate ] = [ null, null ];
        } else {
            const isValidSelection = day.isSameOrAfter(this.selectedStartDate, 'day');

            if (isValidSelection) {
                this._selectDate(this.selectedStartDate.toDate(), day.toDate());
                this.selectedStartDate = null;
                this.currentHoveredDate = null;
            } else {
                this.selectedStartDate = null;
                this._handleDayClick(day)();
            }
        }
    };

    private _handleDayClick = (day: dayjs.Dayjs) => () => {
        if (this.secondary) {
            this._secondarySelection(day);
        } else {
            this._primarySelection(day);
        }
    };

    private _handleDayHover = (day: dayjs.Dayjs) => () => {
        if (this.secondary && this.selectedStartDateAux) {
            this.currentHoveredDateAux = day;
        } else if (!this.secondary && this.selectedStartDate) {
            this.currentHoveredDate = day;
        }
    };

    private _checkInRange = (day: dayjs.Dayjs) => {
        return (
            this.selectedStartDate &&
            day.isSameOrAfter(this.selectedStartDate, 'day') &&
            this.currentHoveredDate &&
            day.isBetween(this.selectedStartDate, this.currentHoveredDate, 'day', '[]')
        );
    };

    private _checkInAuxRange = (day: dayjs.Dayjs) => {
        return (
            this.selectedStartDateAux &&
            day.isSameOrAfter(this.selectedStartDateAux, 'day') &&
            this.currentHoveredDateAux &&
            day.isBetween(this.selectedStartDateAux, this.currentHoveredDateAux, 'day', '[]')
        );
    };

    private _renderHeader = (position: number, month: dayjs.Dayjs) => {
        const isLowerLimit = position === 1;
        const isUpperLimit = position === this.months;
        const minDate = this.secondary ? this.minDateAux : this.minDate;
        const maxDate = this.secondary ? this.maxDateAux : this.maxDate;
        const beforeDisabled = month.isSame(minDate, 'month');
        const afterDisabled = month.isSame(maxDate, 'month');

        return (
            <Flex row spaced middle class="calendar__header">
                <span
                    class={{ calendar__header__arrow: true, before: true, disabled: beforeDisabled }}
                    onClick={!beforeDisabled ? this._prevMonth : null}
                >
                    {isLowerLimit && <em class="material-icons">chevron_left</em>}
                </span>
                <span class="calendar__header__month" onClick={this._selectMonth(month)}>
                    {month.format('MMM YYYY')}
                </span>
                <span
                    class={{ calendar__header__arrow: true, after: true, disabled: afterDisabled }}
                    onClick={!afterDisabled ? this._nextMonth : null}
                >
                    {isUpperLimit && <em class="material-icons">chevron_right</em>}
                </span>
            </Flex>
        );
    };

    private _renderDaysHeader = () => {
        const days = Array(7)
            .fill(0)
            .map((_, i) => dayjs().weekday(i));

        return days.map(day => (
            <Flex middle center class="calendar__days__container__header">
                {day.format('dd')}
            </Flex>
        ));
    };

    private _renderWeekRows = (month: dayjs.Dayjs) => {
        const minDate = this.secondary ? this.minDateAux : this.minDate;
        const maxDate = this.secondary ? this.maxDateAux : this.maxDate;
        const monthStart = month.startOf('month');
        const monthEnd = month.endOf('month');
        const firstDayOfMonth = monthStart.day();
        const startDate = monthStart.subtract(firstDayOfMonth - 1, 'days');
        const days = Array(6 * 7).fill(0);

        return days.map((_, i) => {
            const day = startDate.add(i, 'day');
            const selectable = day.isBetween(monthStart, monthEnd, 'day', '[]');
            const disabled = !day.isBetween(dayjs(minDate), dayjs(maxDate), 'day', '[]');
            const selected = this.startDate && this.endDate && day.isBetween(this.startDate, this.endDate, 'day', '[]');
            const secondarySelected =
                this.startDateAux && this.endDateAux && day.isBetween(this.startDateAux, this.endDateAux, 'day', '[]');
            const inRange = this._checkInRange(day);
            const inAuxRange = this._checkInAuxRange(day);

            return (
                <Flex
                    middle
                    center
                    class={cls('calendar__days__container__day', {
                        selectable,
                        disabled,
                        selected,
                        'secondary': this.secondary,
                        'selected--secondary': secondarySelected,
                        'in-range': inRange,
                        'in-range--secondary': inAuxRange,
                    })}
                    onClick={this._handleDayClick(day)}
                    onMouseEnter={this._handleDayHover(day)}
                >
                    {day.format('D')}
                </Flex>
            );
        });
    };

    private _renderCalendar = (position: number) => {
        const monthDiff = this.months - position;
        const month = this.currentMonth.subtract(monthDiff, 'month');

        return (
            <Flex top center class="calendar">
                {this._renderHeader(position, month)}
                <div class="calendar__days__container">
                    {this._renderDaysHeader()}
                    {this._renderWeekRows(month)}
                </div>
            </Flex>
        );
    };

    render() {
        const monthTables = Array(this.months)
            .fill(0)
            .map((_, i) => i + 1);

        return (
            <Flex row center top class="calendar__container">
                {monthTables.map(this._renderCalendar)}
            </Flex>
        );
    }
}
