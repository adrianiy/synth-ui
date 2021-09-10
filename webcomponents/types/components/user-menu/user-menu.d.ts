import { EventEmitter } from '../../stencil-public-runtime';
import { SelectorOption } from 'glyph-core-poc';
export declare class UserMenuComponent {
  /** Base path to get assets */
  basePath: string;
  /** User name */
  name: string;
  /** Application languages */
  languages: SelectorOption[];
  /** Application themes */
  themes: SelectorOption[];
  /** Show decimal config flag */
  decimals: boolean;
  /** Show custom config button */
  customConfig: boolean;
  /** Interface type ['MODERN', 'CLASSIC'] */
  interface: string;
  /** Extra i18n translation object */
  i18n: {
    [key: string]: string;
  };
  /** **optional** force locale change if html lang is not interpreted */
  locale: string;
  /** Event triggered when user clicks outside component container */
  outsideCallback: () => void;
  /** Logout event, trigger an event identified with **logout** key */
  logout: EventEmitter<any>;
  /** Language change event */
  langChange: EventEmitter<SelectorOption>;
  /** Theme change event */
  themeChange: EventEmitter<SelectorOption>;
  /** Decimals change event */
  decimalsChange: EventEmitter<boolean>;
  /** Custom config event */
  customConfigChange: EventEmitter<any>;
  /** Element reference */
  element: HTMLGlyphUserMenuElement;
  /** Show decimals flag */
  showDecimals: boolean;
  private _i18n;
  clickOutside(event: any): void;
  componentWillLoad(): void;
  private _initializeVariables;
  private _handleLangChange;
  private _handleThemeChange;
  private _handleDecimalsChange;
  private _handleLogout;
  private _handleCustomConfig;
  render(): any;
}
