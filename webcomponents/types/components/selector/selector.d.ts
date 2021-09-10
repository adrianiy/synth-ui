import { EventEmitter } from '../../stencil-public-runtime';
import { ComplexSelectorOptions, SelectorOption } from 'glyph-core-poc';
export declare class SelectorComponent {
  /** Selector label */
  label: string;
  /** Max height configuration */
  maxHeight: number;
  /** Selector disabled state */
  disabled: boolean;
  /** Selector options */
  options: SelectorOption[];
  /** Complex selector options */
  complexOptions: ComplexSelectorOptions;
  /** Multiselect flag */
  multiSelect: boolean;
  /** Search placeholder text. If defined a search input will render */
  searchPlaceholder: string;
  /** Interface type ['MODERN', 'CLASSIC'] */
  interface: string;
  /** on change callback */
  optionSelect: EventEmitter<SelectorOption>;
  /** Element reference */
  element: HTMLGlyphSelectorElement;
  /** Selected option */
  selectedOptions: SelectorOption[];
  /** Options selector drilldown flag */
  optionsDrilldown: boolean;
  componentWillLoad(): void;
  componentWillRender(): void;
  private _getSelectedOptions;
  private _toggleContainer;
  private _selectOption;
  render(): any;
}
