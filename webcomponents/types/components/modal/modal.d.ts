import { EventEmitter } from '../../stencil-public-runtime';
export declare class ModalComponent {
  /** Modal visibility flag */
  visible: boolean;
  /** Modal title */
  modalTitle: string;
  /** Modal padded flag */
  padded: boolean;
  /** Modal min with */
  maxWidth: string;
  /** Modal min height */
  maxHeight: string;
  /** Close button flag */
  closeButton: boolean;
  /** Cancel button text. Renders button if set */
  cancelButton: string;
  /** Apply button text. Renders button if set */
  applyButton: string;
  /** Interface type ['MODERN', 'CLASSIC'] */
  interface: string;
  /** close event */
  close: EventEmitter<any>;
  /** apply event */
  apply: EventEmitter<any>;
  /** cancel event */
  cancel: EventEmitter<any>;
  componentWillLoad(): void;
  private _checkClose;
  private _onClose;
  private _onApply;
  private _onCancel;
  private _renderHeader;
  private _renderButtons;
  render(): any;
}
