import { ComplexSelectorOptions, SelectorOption } from 'glyph-core-poc';
import PerfectScrollbar from 'perfect-scrollbar';
export declare class SelectorOptionsComponent {
  /** Selector options */
  options: SelectorOption[];
  /** Complex selector options */
  complexOptions: ComplexSelectorOptions;
  /** Multiselect flag */
  multiSelect: boolean;
  /** Max height configuration */
  maxHeight: number;
  /** Search placeholder text. If defined a search input will render */
  searchPlaceholder: string;
  /** Option click event */
  optionClickEvent: (option: SelectorOption) => void;
  /** Close event */
  closeEvent: () => void;
  /** Interface type ['MODERN', 'CLASSIC'] */
  interface: string;
  /** Scrollbar element */
  ps: PerfectScrollbar;
  /** Element reference */
  element: HTMLGlyphSelectorOptionsElement;
  /** Search text */
  searchValue: string;
  clickOutside(event: any): void;
  componentWillLoad(): void;
  private _scrollbarInit;
  private _selectOption;
  private _handleInputChange;
  private _handleEnter;
  private _renderSearch;
  private _renderCheckbox;
  private _inSearch;
  private _renderComplexOptions;
  private _renderSimpleOptions;
  private _renderOptions;
  private _renderOptionName;
  render(): any;
}
