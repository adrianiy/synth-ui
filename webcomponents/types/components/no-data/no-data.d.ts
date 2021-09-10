export declare class NoDataComponent {
  /** Base path to get assets */
  basePath: string;
  /** Render mode [ 'simple' | 'complex' ] */
  mode: string;
  /** Top text only applies if render mode is advanced */
  text: string;
  /** Bottom text. only applies if render mode is advanced */
  bottomText: string;
  /** Extra i18n translation object */
  i18n: {
    [key: string]: string;
  };
  /** **optional** force locale change if html lang is not interpreted */
  locale: string;
  element: HTMLGlyphNoDataElement;
  private _i18n;
  componentWillLoad(): void;
  private _simpleRender;
  private _advancedRender;
  render(): any;
}
