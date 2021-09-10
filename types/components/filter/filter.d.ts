import { EventEmitter } from '../../stencil-public-runtime';
import { FilterOptionHeader, FilterSelectEvent } from 'glyph-core-poc';
export declare class FilterComponent {
  /** Base path to get assets */
  basePath: string;
  /** Filter description */
  description: string;
  /** Filter plural */
  plural: string;
  /** Filter options */
  options: FilterOptionHeader[];
  /** Multiselect flag. True if filter allows multiselect toggler */
  haveMultiSelect: boolean;
  /** This flag is true if multiselect is active */
  multiSelect: boolean;
  /** Search placeholder */
  searchPlaceholder: string;
  /** Extra i18n translation object */
  i18n: {
    [key: string]: string;
  };
  /** **optional** force locale change if html lang is not interpreted */
  locale: string;
  /** Filter chip interface ['MODERN', 'CLASSIC'] */
  interface: string;
  /** Option click event */
  optionClick: EventEmitter<FilterSelectEvent>;
  /** Clear selected filters callback */
  clear: EventEmitter<any>;
  /** Multiselect toggler callback */
  multiSelectEvent: EventEmitter<any>;
  /** Element reference */
  element: HTMLGlyphFilterElement;
  /** Filter expanded flag */
  expanded: boolean;
  /** Filter search value */
  searchValue: string;
  /** Active status flag */
  active: boolean;
  /** Chip description value */
  chipDescription: string;
  clickOutside(event: any): void;
  componentWillLoad(): void;
  componentWillRender(): void;
  /** This method will return image height */
  clearFilter(): Promise<void>;
  private _getChipDescription;
  private _expandFilter;
  private _closeFilter;
  private _optionClick;
  private _multiSelectClick;
  private _onClear;
  private _getActiveOptions;
  private _clear;
  private _renderFilterOptions;
  render(): any;
}
