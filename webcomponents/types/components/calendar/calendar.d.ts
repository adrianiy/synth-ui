import { EventEmitter } from '../../stencil-public-runtime';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import 'dayjs/locale/en';
import { ComparableType } from 'glyph-core-poc';
export declare class CalendarComponent {
  /** Minimum allowed date */
  minDate: Date;
  /** Maximum allowed date */
  maxDate: Date;
  /** Minimum allowed date */
  minDateAux: Date;
  /** Maximum allowed date */
  maxDateAux: Date;
  /** Selected start date */
  startDate: Date;
  /** Selected end date */
  endDate: Date;
  /** Secondary selected start date */
  startDateAux: Date;
  /** Secondary selected end date */
  endDateAux: Date;
  /** Activate seconday selection display */
  auxActive: boolean;
  /** Secondary selection. Shows selection in orange. **requires auxActive** */
  secondary: boolean;
  /** Allow single day selection */
  singleSelect: boolean;
  /** Number of months to be shown. 2 by default */
  months: number;
  /** Filter chip interface ['MODERN', 'CLASSIC'] */
  interface: string;
  /** Element reference */
  element: HTMLGlyphCalendarElement;
  /** Event triggered on date selection */
  dateSelect: EventEmitter<{
    startDate: Date;
    endDate: Date;
    comparableType?: ComparableType;
  }>;
  /** Event triggered on aux date selection */
  dateSelectAux: EventEmitter<{
    startDate: Date;
    endDate: Date;
  }>;
  monthTables: dayjs.Dayjs[];
  endMonth: dayjs.Dayjs;
  startMonth: dayjs.Dayjs;
  selectedStartDate: dayjs.Dayjs;
  selectedStartDateAux: dayjs.Dayjs;
  currentHoveredDate: dayjs.Dayjs;
  currentHoveredDateAux: dayjs.Dayjs;
  componentWillLoad(): void;
  private _getMonths;
  private _prevMonth;
  private _nextMonth;
  private _selectDate;
  private _selectDateAux;
  private _selectMonth;
  private _secondarySelection;
  private _primarySelection;
  private _handleDayClick;
  private _handleDayHover;
  private _checkInRange;
  private _checkInAuxRange;
  private _renderHeader;
  private _renderDaysHeader;
  private _renderWeekRows;
  private _renderCalendar;
  render(): any;
}
