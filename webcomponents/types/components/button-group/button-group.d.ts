import { Button, ButtonGroupStyle, Alignment } from 'glyph-core-poc';
export declare class ButtonGroupComponent {
  /** Buttons configuration */
  buttons: Button[];
  /** Button group size ['big', 'small'] */
  size: ButtonGroupStyle;
  /** Button alignment ['left', 'center', 'right'] */
  alignment: Alignment;
  /** Application interface */
  interface: string;
  componentWillLoad(): void;
  private _handleClick;
  private _renderTitle;
  private _renderSubtitle;
  render(): any;
}
