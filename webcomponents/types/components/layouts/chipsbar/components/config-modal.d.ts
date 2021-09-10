import { EventEmitter } from '../../../../stencil-public-runtime';
import { FiltersConfig } from 'glyph-core-poc';
export declare class ConfigModalComponent {
  /** Filters configuration */
  filtersConfig: FiltersConfig;
  /** Extra i18n translation object */
  i18n: {
    [key: string]: string;
  };
  /** Hide zara south filters active */
  hideZaraSouth: boolean;
  /** Interface type [ 'MODERN', 'CLASSIC' ] */
  interface: string;
  /** Filter configuration change event */
  configChange: EventEmitter<FiltersConfig>;
  /** Hidden filters */
  hiddenFilters: string[];
  /** Visible filters */
  visibleFilters: string[];
  /** Filter under edition */
  editableFilter: string;
  /** State of zara south filters hidden */
  zaraSouthHidden: boolean;
  componentWillLoad(): void;
  private _closeEditableFilter;
  private _toggleZaraSouth;
  private _checkZaraSouthHide;
  private _getCode;
  private _handleSortChange;
  private _handleOptionSortChange;
  private _handleChildrenSortChange;
  private _handleAdd;
  private _handleEdit;
  private _handleOptionVisibility;
  private _handleChildrenVisibility;
  private _renderSortableList;
  private _renderSortableOptions;
  private _renderZaraSouthToggler;
  render(): any;
}
