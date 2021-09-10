import { FilterOptionHeader } from 'glyph-core-poc';
import PerfectScrollbar from 'perfect-scrollbar';
export declare class FilterOptionsComponent {
  /** Base path to get assets */
  basePath: string;
  /** Filter description */
  description: string;
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
  optionClickEvent: (option: FilterOptionHeader) => void;
  /** Multiselect toggler callback */
  multiSelectEvent: () => void;
  /** Close callback */
  closeEvent: () => void;
  /** Element reference */
  element: HTMLGlyphFilterOptionsElement;
  /** Filter search value */
  searchValue: string;
  /** Scrollbar element */
  ps: PerfectScrollbar;
  private _i18n;
  componentDidRender(): void;
  componentWillLoad(): void;
  private _scrollbarInit;
  private _optionClick;
  private _multiSelectClick;
  private _initializeVariables;
  private _handleInputChange;
  private _handleKeyUp;
  private _renderSearch;
  private _renderMultiSelect;
  private _renderOptionsList;
  render(): any;
}
