export declare class ShareMenuComponent {
  /** Base path to get assets */
  basePath: string;
  /** Application title */
  appTitle: string;
  /** Application subtitle */
  appSubtitle: string;
  /** Extra i18n translation object */
  i18n: {
    [key: string]: string;
  };
  /** **optional** force locale change if html lang is not interpreted */
  locale: string;
  /** Interface type ['MODERN', 'CLASSIC'] */
  interface: string;
  /** Event triggered when user clicks outside component container */
  outsideCallback: () => void;
  /** Element reference */
  element: HTMLGlyphShareMenuElement;
  /** share filters flag */
  shareFilters: boolean;
  private _i18n;
  clickOutside(event: any): void;
  componentWillLoad(): void;
  private _initializeVariables;
  private _toggleShare;
  private _handleCopy;
  render(): any;
}
