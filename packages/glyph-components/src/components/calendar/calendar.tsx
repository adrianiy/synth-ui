import { h, Component, Prop, Element, State, Event, EventEmitter } from '@stencil/core';
import { Flex } from '../../utils/layout';
import { cls, getComponentClosestLanguage } from '../../utils/utils';
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import weekDay from 'dayjs/plugin/weekday';
import isBetween from 'dayjs/plugin/isBetween';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import minMax from 'dayjs/plugin/minMax';
import 'dayjs/locale/es';
import 'dayjs/locale/en';
import { ComparableType, UIInterface } from 'glyph-core-poc';

dayjs.extend(updateLocale);
dayjs.extend(weekDay);
dayjs.extend(isBetween);
dayjs.extend(isSameOrAfter);
dayjs.extend(minMax);

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
    /** Activate seconday selection display */
    @Prop() auxActive: boolean;
    /** Secondary selection. Shows selection in orange. **requires auxActive** */
    @Prop() secondary: boolean;
    /** Allow single day selection */
    @Prop() singleSelect: boolean;
    /** Number of months to be shown. 2 by default */
    @Prop() months: number = 2;
    /** Filter chip interface ['MODERN', 'CLASSIC'] */
    @Prop() interface: UIInterface = UIInterface.classic;
    /** Element reference */
    @Element() element: HTMLGlyphCalendarElement;
    /** Event triggered on date selection */
    @Event() dateSelect: EventEmitter<{ startDate: Date; endDate: Date; comparableType?: ComparableType }>;
    /** Event triggered on aux date selection */
    @Event() dateSelectAux: EventEmitter<{ startDate: Date; endDate: Date }>;

    @State() monthTables: dayjs.Dayjs[];
    @State() endMonth: dayjs.Dayjs;
    @State() startMonth: dayjs.Dayjs;
    @State() selectedStartDate: dayjs.Dayjs;
    @State() selectedStartDateAux: dayjs.Dayjs;
    @State() currentHoveredDate: dayjs.Dayjs;
    @State() currentHoveredDateAux: dayjs.Dayjs;

    componentWillLoad() {
        this._getMonths();
        const lang = getComponentClosestLanguage(this.element);
        dayjs.locale(lang);
        dayjs.updateLocale(lang, { weekStart: 1 });
    }

    private _getMonths() {
        const startMonth = dayjs(this.startDate);
        const endMonth = dayjs(this.endDate);
        const sameMonth = startMonth.isSame(endMonth, 'month');
        if (sameMonth) {
            this.startMonth = startMonth.subtract(this.months - 1, 'month');
        } else {
            this.startMonth = startMonth;
        }

        this.endMonth = endMonth;
        this.monthTables = Array(this.months)
            .fill(0)
            .map((_, i) => {
                const first = i === 0;
                const last = i === this.months - 1;
                return first ? this.startMonth : last ? this.endMonth : this.startMonth.add(i, 'month');
            });
    }

    private _prevMonth = (position: any) => () => {
        this.monthTables = this.monthTables.map((month: dayjs.Dayjs, _position: number) => {
            if (position === _position) {
                return month.subtract(1, 'month');
            }
            return month;
        });
    };

    private _nextMonth = (position: any) => () => {
        this.monthTables = this.monthTables.map((month: dayjs.Dayjs, _position: number) => {
            if (position === _position) {
                return month.add(1, 'month');
            }
            return month;
        });
    };

    private _selectDate = (startDate: Date, endDate: Date, comparableType?: ComparableType) => {
        this.startDate = startDate;
        this.endDate = endDate;

        this.dateSelect.emit({
            startDate,
            endDate,
            comparableType,
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
            const maxDate = dayjs.min(month.endOf('month'), dayjs(this.maxDate));
            const minDate = dayjs.max(month.startOf('month'), dayjs(this.minDate));

            this._selectDate(minDate.toDate(), maxDate.toDate(), ComparableType.calendar);
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
            this.auxActive &&
            this.selectedStartDateAux &&
            day.isSameOrAfter(this.selectedStartDateAux, 'day') &&
            this.currentHoveredDateAux &&
            day.isBetween(this.selectedStartDateAux, this.currentHoveredDateAux, 'day', '[]')
        );
    };

    private _renderHeader = (position: number, month: dayjs.Dayjs) => {
        const isRedesign = this.interface === UIInterface.redesign;
        const isLowerLimit = position === 0 || isRedesign;
        const isUpperLimit = position === this.months - 1 || isRedesign;
        const minDate = this.secondary ? this.minDateAux : this.minDate;
        const maxDate = this.secondary ? this.maxDateAux : this.maxDate;
        const beforeDisabled =
            month.isSame(minDate, 'month') ||
            (isRedesign &&
                this.monthTables[position - 1] &&
                month.subtract(1, 'month').isSame(this.monthTables[position - 1], 'month'));
        const afterDisabled =
            month.isSame(maxDate, 'month') ||
            (isRedesign &&
                this.monthTables[position + 1] &&
                month.add(1, 'month').isSame(this.monthTables[position + 1], 'month'));

        return (
            <Flex row spaced middle class="calendar__header">
                <span
                    class={{ calendar__header__arrow: true, before: true, disabled: beforeDisabled }}
                    onClick={!beforeDisabled ? this._prevMonth(position) : null}
                >
                    {isLowerLimit && <em class="material-icons">chevron_left</em>}
                </span>
                <span
                    class={cls('calendar__header__month', {
                        'label--l--medium': this.interface === UIInterface.redesign,
                    })}
                    onClick={this._selectMonth(month)}
                >
                    {month.format(this.interface === UIInterface.redesign ? 'MMMM YYYY' : 'MMM YYYY')}
                </span>
                <span
                    class={{ calendar__header__arrow: true, after: true, disabled: afterDisabled }}
                    onClick={!afterDisabled ? this._nextMonth(position) : null}
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
                this.auxActive &&
                this.startDateAux &&
                this.endDateAux &&
                day.isBetween(this.startDateAux, this.endDateAux, 'day', '[]');
            const inRange = this._checkInRange(day);
            const inAuxRange = this._checkInAuxRange(day);
            const isFirst =
                (this.startDate && day.isSame(this.startDate, 'day')) ||
                (this.selectedStartDate && day.isSame(this.selectedStartDate, 'day'));
            const isLast =
                (this.endDate && day.isSame(this.endDate, 'day')) ||
                (this.currentHoveredDate && day.isSame(this.currentHoveredDate, 'day'));
            const current = day.isSame(new Date(), 'day');

            return (
                <Flex
                    middle
                    center
                    class={cls('calendar__days__container__day', {
                        selectable,
                        disabled,
                        selected,
                        current,
                        'secondary': this.auxActive && this.secondary,
                        'selected--secondary': secondarySelected,
                        'in-range': inRange,
                        'in-range--secondary': inAuxRange,
                        'first': isFirst,
                        'last': isLast,
                    })}
                    onClick={this._handleDayClick(day)}
                    onMouseEnter={this._handleDayHover(day)}
                >
                    {day.format('D')}
                </Flex>
            );
        });
    };

    private _renderCalendar = (month: dayjs.Dayjs, position: number) => {
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
        return (
            <Flex row center top class={cls('calendar__container', this.interface)}>
                {this.monthTables.map(this._renderCalendar)}
            </Flex>
        );
    }
}
