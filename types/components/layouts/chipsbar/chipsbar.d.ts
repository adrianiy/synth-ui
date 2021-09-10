import { EventEmitter } from '../../../stencil-public-runtime';
import { FiltersConfig, FilterSelectEvent, FilterUpdateEvent } from 'glyph-core-poc';
export declare class ChipsBarComponent {
  /** Base path to get assets */
  basePath: string;
  /** Filters configuration object */
  filtersConfig: FiltersConfig;
  /** Hide zara south filters active */
  hideZaraSouth: boolean;
  /** Extra i18n translation object */
  i18n: {
    [key: string]: string;
  };
  /** **optional** force locale change if html lang is not interpreted */
  locale: string;
  /** Interface type */
  interface: string;
  /** Filter select event */
  filterSelect: EventEmitter<FilterSelectEvent>;
  /** Filter clear event */
  filterClear: EventEmitter<string>;
  /** Filter multiselect event */
  updateFilter: EventEmitter<FilterUpdateEvent>;
  /** Clear all filters event */
  clearAll: EventEmitter<any>;
  /** scroll state flag */
  scrolled: boolean;
  /** Modal configuration visibility flag */
  configModal: boolean;
  /** Element reference */
  element: HTMLGlyphChipsbarElement;
  private _i18n;
  private _refs;
  componentWillLoad(): void;
  private _initializeVariables;
  private _handleOptionClick;
  private _handleFilterClear;
  private _handleMultiSelect;
  private _handleFilterConfig;
  private _handleConfigChange;
  private _handleClearAll;
  private _renderChips;
  private _renderButtons;
  private _renderConfigurationModal;
  render(): any;
}
