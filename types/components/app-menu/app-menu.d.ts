import { Screen } from 'glyph-core-poc';
export declare class AppMenuComponent {
  /** Base path to get assets */
  basePath: string;
  /** List of apps */
  apps: Screen[];
  /** Flag to activate search input */
  hasSearch: boolean;
  /** Extra i18n translation object */
  i18n: {
    [key: string]: string;
  };
  /** **optional** force locale change if html lang is not interpreted */
  locale: string;
  /** Event triggered when user clicks outside component container */
  outsideCallback: () => void;
  /** Interface type ['MODERN', 'CLASSIC'] */
  interface: string;
  /** Element reference */
  element: HTMLGlyphAppMenuElement;
  /** App search value */
  searchValue: string;
  private _i18n;
  clickOutside(event: any): void;
  componentWillLoad(): void;
  private _initializeVariables;
  private _navigateTo;
  private _inSearch;
  private _handleInputChange;
  private _handleKeyUp;
  private _renderApps;
  private _renderSearch;
  render(): any;
}
