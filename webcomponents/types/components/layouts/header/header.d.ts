import { EventEmitter } from '../../../stencil-public-runtime';
import { Brands, UserData, Screen, TimelineEvent, UserMenuConfiguration, SelectorOption, Brand } from 'glyph-core-poc';
export declare class HeaderComponent {
  /** Base path */
  basePath: string;
  /** Brand selector flag */
  brand: boolean;
  /** Available brands list */
  brandList: Brand[];
  /** User avatar flag */
  avatar: boolean;
  /** Timeline flag */
  timeline: boolean;
  /** View menu flag */
  menu: boolean;
  /** Share menu flag */
  share: boolean;
  /** Search flag */
  search: boolean;
  /** Notification flag */
  notifications: boolean;
  /** Application title */
  appTitle: string;
  /** Application subtitle */
  appSubtitle: string;
  /** Application brand */
  activeBrand: Brands;
  /** User data */
  userData: UserData;
  /** Apps data */
  appData: Screen[];
  /** User menu config */
  userMenuConfig: UserMenuConfiguration;
  /** Calendar events */
  calendarEvents: TimelineEvent[];
  /** Events */
  events: TimelineEvent[];
  /** Interface type ['MODERN', 'CLASSIC'] */
  interface: string;
  /** Extra i18n translation object */
  i18n: {
    [key: string]: string;
  };
  /** **optional** force locale change if html lang is not interpreted */
  locale: string;
  /** Element reference */
  element: HTMLGlyphHeaderElement;
  /** Language change event */
  langChange: EventEmitter<SelectorOption>;
  /** Theme change event */
  themeChange: EventEmitter<SelectorOption>;
  /** Decimals change event */
  decimalsChange: EventEmitter<boolean>;
  /** Brand change event */
  brandChange: EventEmitter<Brand>;
  /** Custom config change */
  customConfigChange: EventEmitter<any>;
  /** Logout event */
  logout: EventEmitter<any>;
  /** show user menu flag */
  showUserMenu: boolean;
  /** show apps menu flag */
  showAppsMenu: boolean;
  /** show share menu flag */
  showShareMenu: boolean;
  /** show timeline flag */
  showTimeline: boolean;
  /** show notifications flag */
  showNotifications: boolean;
  /** show brand menu */
  showBrands: boolean;
  componentWillRender(): void;
  private _toggleShareMenu;
  private _toggleShowAppsMenu;
  private _toggleShowUserMenu;
  private _toggleShowTimeline;
  private _toggleNotifications;
  private _toggleBrandsMenu;
  private _handleLangChange;
  private _handleThemeChange;
  private _handleDecimalChange;
  private _handleCustomConfigChange;
  private _handleLogout;
  private _handleBrandChange;
  private _renderShare;
  private _renderSearch;
  private _renderNotifications;
  private _renderMenu;
  private _renderTimeline;
  private _renderAvatar;
  private _renderTimelineSidebar;
  private _renderMenus;
  private _renderBrands;
  render(): any;
}
