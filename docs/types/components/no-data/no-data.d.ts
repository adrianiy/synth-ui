export declare class NoDataComponent {
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
  element: HTMLSynthNoDataElement;
  private _i18n;
  componentWillLoad(): Promise<void>;
  private _simpleRender;
  private _advancedRender;
  render(): any;
}
