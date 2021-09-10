import { EventEmitter } from '../../stencil-public-runtime';
export declare class InputComponent {
  /** Placeholder */
  placeholder: string;
  /** Input value */
  value: any;
  /** Minimum available for inputs (dates or ranges) */
  min: any;
  /** Maximum availabla for inputs (dates or ranges) */
  max: any;
  /** Input type */
  inputType: string;
  /** Input should auto focus */
  autoFocus: boolean;
  /** Style input as an error */
  error: boolean;
  /** Flag to disable input */
  disabled: boolean;
  /** Renders input in a box */
  box: boolean;
  /** Search flag, renders a search icon if `box` is false */
  search: boolean;
  /** Filter chip interface ['MODERN', 'CLASSIC'] */
  interface: string;
  /** Text change event */
  inputChange: EventEmitter<string>;
  /** Enter key event */
  enterKey: EventEmitter<any>;
  /** Input reference */
  ref: HTMLInputElement;
  /** Password visibility */
  passVisible: boolean;
  /** Range value */
  rangeValue: number;
  /** In transition */
  inTransition: boolean;
  private _knobSize;
  onValueChange(): void;
  componentWillLoad(): void;
  componentWillRender(): void;
  private _getThumbPosition;
  private _togglePassVisibility;
  private _checkInputType;
  private _handleInputChange;
  private _handleInputOnChange;
  private _handleKeyUp;
  private _increaseValue;
  private _decreaseValue;
  private _renderNumberControls;
  private _renderRangeThumb;
  render(): any;
}
