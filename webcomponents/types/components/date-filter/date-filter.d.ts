import { EventEmitter } from '../../stencil-public-runtime';
import { ComparableType, SelectorOption, FilterSelectEvent, FilterOptionHeader } from 'glyph-core-poc';
import PerfectScrollbar from 'perfect-scrollbar';
export declare class DateFilterComponent {
  /** Base path to get assets */
  basePath: string;
  /** Active flag */
  active: boolean;
  /** Filter options */
  options: FilterOptionHeader[];
  /** Minimum available date */
  minDate: Date;
  /** Maximum available date */
  maxDate: Date;
  /** Minimum available comp date */
  minComparableDate: Date;
  /** Maximum available comp date */
  maxComparableDate: Date;
  /** Allow single day selection */
  singleSelect: boolean;
  /** Number of months to be shown. 2 by default */
  months: number;
  /** Comparabel type */
  comparableType: ComparableType;
  /** Comparable options */
  comparableOptions: SelectorOption[];
  /** Extra i18n translation object */
  i18n: {
    [key: string]: string;
  };
  /** **optional** force locale change if html lang is not interpreted */
  locale: string;
  /** Filter chip interface ['MODERN', 'CLASSIC'] */
  interface: string;
  /** Date selection event */
  dateSelection: EventEmitter<FilterSelectEvent>;
  /** Clear selected filters callback */
  clearEvent: EventEmitter<any>;
  /** Element reference */
  element: HTMLGlyphDateFilterElement;
  /** Filter expanded flag */
  expanded: boolean;
  /** Filter description */
  description: string;
  /** Start date */
  startDate: Date;
  /** End date */
  endDate: Date;
  /** Comparable input active flag */
  comparableActive: boolean;
  /** Comprable start date */
  comparableStartDate: Date;
  /** Comprable end date */
  comparableEndDate: Date;
  /** Custom comparable flag */
  isCustomComparable: boolean;
  /** Chip description */
  chipDescription: string;
  /** Scrollbar element */
  ps: PerfectScrollbar;
  private _i18n;
  clickOutside(event: any): void;
  componentWillRender(): void;
  /** This method will return image height */
  clearFilter(): Promise<void>;
  componentWillLoad(): void;
  private _scrollbarInit;
  private _getDateValues;
  private _expandFilter;
  private _changeActiveInput;
  private _onClear;
  private _setDefault;
  private _selectRange;
  private _selectCustomDate;
  private _selectDate;
  private _selectCompDate;
  private _selectOption;
  private _handleInputStart;
  private _handeInputEnd;
  private _handleComparableInputStart;
  private _handeComparableInputEnd;
  private _handleApply;
  private _renderDateRanges;
  private _renderCalendars;
  private _renderComparableInputs;
  private _renderCurrentInputs;
  private _renderInputs;
  private _renderCalendarDrilldown;
  private _getComparableText;
  render(): any;
}
