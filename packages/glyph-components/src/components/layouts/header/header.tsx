import { Component, getAssetPath, Prop, h, State, Element, EventEmitter, Event } from '@stencil/core';
import {
    Brands,
    UIInterface,
    UserData,
    Screen,
    TimelineEvent,
    UserMenuConfiguration,
    SelectorOption,
} from 'glyph-core';
import { Icon } from '../../../utils/icons';
import { Flex } from '../../../utils/layout';
import { cls } from '../../../utils/utils';

@Component({
    tag: 'glyph-header',
    styleUrl: 'header.scss',
    shadow: true,
})
export class HeaderComponent {
    /** Base path to get assets */
    @Prop() basePath: string;
    /** Brand selector flag */
    @Prop() brand: boolean;
    /** User avatar flag */
    @Prop() avatar: boolean;
    /** Timeline flag */
    @Prop() timeline: boolean;
    /** View menu flag */
    @Prop() menu: boolean;
    /** Share menu flag */
    @Prop() share: boolean;
    /** Search flag */
    @Prop() search: boolean;
    /** Notification flag */
    @Prop() notifications: boolean;
    /** Application title */
    @Prop() appTitle: string;
    /** Application subtitle */
    @Prop() appSubtitle: string;
    /** Application brand */
    @Prop() activeBrand: Brands;
    /** User data */
    @Prop() userData: UserData;
    /** Apps data */
    @Prop() appData: Screen[];
    /** User menu config */
    @Prop() userMenuConfig: UserMenuConfiguration;
    /** Calendar events */
    @Prop() calendarEvents: TimelineEvent[];
    /** Events */
    @Prop() events: TimelineEvent[];
    /** Interface type ['MODERN', 'CLASSIC'] */
    @Prop() interface: UIInterface = UIInterface.classic;
    /** Extra i18n translation object */
    @Prop() i18n: { [key: string]: string } = {};
    /** **optional** force locale change if html lang is not interpreted */
    @Prop() locale: string;
    /** Element reference */
    @Element() element: HTMLGlyphHeaderElement;
    /** Language change event */
    @Event() langChange: EventEmitter<SelectorOption>;
    /** Theme change event */
    @Event() themeChange: EventEmitter<SelectorOption>;
    /** Decimals change event */
    @Event() decimalsChange: EventEmitter<boolean>;
    /** Logout event */
    @Event() logout: EventEmitter<any>;

    /** show user menu flag */
    @State() showUserMenu: boolean = false;
    /** show apps menu flag */
    @State() showAppsMenu: boolean = false;
    /** show share menu flag */
    @State() showShareMenu: boolean = false;
    /** show timeline flag */
    @State() showTimeline: boolean = false;
    /** show notifications flag */
    @State() showNotifications: boolean = false;

    private _toggleShareMenu = (value?: boolean) => () => {
        this.showShareMenu = value ?? !this.showShareMenu;
    };

    private _toggleShowAppsMenu = (value?: boolean) => () => {
        this.showAppsMenu = value ?? !this.showAppsMenu;
    };

    private _toggleShowUserMenu = (value?: boolean) => () => {
        this.showUserMenu = value ?? !this.showUserMenu;
    };

    private _toggleShowTimeline = (value?: boolean) => () => {
        this.showTimeline = value ?? !this.showTimeline;
    };

    private _toggleNotifications = (value?: boolean) => () => {
        this.showNotifications = value ?? !this.showNotifications;
    };

    private _handleLangChange = ({ detail }: CustomEvent) => {
        this.langChange.emit(detail);
    };

    private _handleThemeChange = ({ detail }: CustomEvent) => {
        this.themeChange.emit(detail);
    };

    private _handleDecimalChange = ({ detail }: CustomEvent) => {
        this.decimalsChange.emit(detail);
    };

    private _handleLogout = () => {
        this.logout.emit();
    };

    private _renderShare = () => {
        return this.interface === UIInterface.redesign ? (
            <glyph-icon icon="share-outlined" onClick={this._toggleShareMenu()} button />
        ) : (
            <Flex row middle center class="widget__container">
                <div class="share" onClick={this._toggleShareMenu()}>
                    <div class="square">
                        <div class="square--bite" />
                    </div>
                    <Icon icon="reply" class="share" />
                </div>
            </Flex>
        );
    };

    private _renderSearch = () => {
        return <glyph-icon button material={this.interface !== UIInterface.redesign} icon="search" />;
    };

    private _renderNotifications = () => {
        return (
            <Flex row middle center class="widget__container">
                <glyph-icon
                    button
                    material={this.interface !== UIInterface.redesign}
                    icon={this.interface === UIInterface.redesign ? 'notification-outlined' : 'notifications'}
                    onClick={this._toggleNotifications()}
                />
            </Flex>
        );
    };

    private _renderMenu = () => {
        return (
            <Flex row middle center class="widget__container">
                <glyph-icon
                    button
                    material={this.interface !== UIInterface.redesign}
                    icon={this.interface === UIInterface.redesign ? 'grid-underlined' : 'apps'}
                    onClick={this._toggleShowAppsMenu()}
                />
            </Flex>
        );
    };

    private _renderTimeline = () => {
        return (
            <glyph-icon
                button
                material={this.interface !== UIInterface.redesign}
                icon={this.interface === UIInterface.redesign ? 'calendar-outlined' : 'calendar_today'}
                onClick={this._toggleShowTimeline()}
            />
        );
    };

    private _renderAvatar = () => {
        return (
            <Flex row middle center class="widget__container">
                <glyph-avatar {...this.userData} interface={this.interface} onClick={this._toggleShowUserMenu()} />
            </Flex>
        );
    };

    private _renderTimelineSidebar = () => {
        return (
            <Flex
                class={cls(
                    'widget__menu widget__menu--sidebar animated',
                    this.interface !== UIInterface.modern ? 'fadeInRight' : 'fadeIn',
                )}
            >
                <glyph-timeline
                    basePath={this.basePath}
                    calendarEvents={this.calendarEvents}
                    events={this.events}
                    i18n={this.i18n}
                    locale={this.locale}
                    interface={this.interface}
                    outsideCallback={this._toggleShowTimeline(false)}
                />
            </Flex>
        );
    };

    private _renderMenus = () => {
        return [
            <div
                class={cls('widget__menu__container widget__menu__container--user', {
                    active: this.showUserMenu,
                })}
            >
                {this.showUserMenu && (
                    <glyph-user-menu
                        class="widget__menu widget__menu--user"
                        basePath={this.basePath}
                        name={this.userData.name}
                        outsideCallback={this._toggleShowUserMenu(false)}
                        i18n={this.i18n}
                        locale={this.locale}
                        interface={this.interface}
                        {...this.userMenuConfig}
                        onLangChange={this._handleLangChange}
                        onThemeChange={this._handleThemeChange}
                        onDecimalsChange={this._handleDecimalChange}
                        onLogout={this._handleLogout}
                    />
                )}
            </div>,
            <div
                class={cls('widget__menu__container widget__menu__container--apps', {
                    active: this.showAppsMenu,
                    right: this.timeline,
                })}
            >
                {this.showAppsMenu && (
                    <glyph-app-menu
                        basePath={this.basePath}
                        class="widget__menu widget__menu--apps"
                        apps={this.appData}
                        outsideCallback={this._toggleShowAppsMenu(false)}
                        i18n={this.i18n}
                        locale={this.locale}
                    />
                )}
            </div>,
            <div
                class={cls('widget__menu__container widget__menu__container--share', {
                    'active': this.showShareMenu,
                    'right': this.timeline || this.menu,
                    'right--big': this.timeline && this.menu,
                })}
            >
                {this.showShareMenu && (
                    <glyph-share-menu
                        class="widget__menu widget__menu--share"
                        basePath={this.basePath}
                        appTitle={this.appTitle}
                        appSubtitle={this.appSubtitle}
                        interface={this.interface}
                        outsideCallback={this._toggleShareMenu(false)}
                        i18n={this.i18n}
                        locale={this.locale}
                    />
                )}
            </div>,
            <div
                class={cls('widget__menu__container widget__menu__container--notifications', {
                    'active': this.showNotifications,
                    'right': this.timeline || this.menu || this.share,
                    'right--big': [ this.timeline, this.menu, this.share ].filter(Boolean).length === 2,
                    'right--large': this.timeline && this.menu && this.share,
                })}
            >
                {this.showNotifications && (
                    <glyph-notifications
                        class="widget__menu widget__menu--notifications"
                        outsideCallback={this._toggleNotifications(false)}
                    >
                        <slot />
                    </glyph-notifications>
                )}
            </div>,
        ];
    };

    render() {
        return (
            <Flex row spaced middle class={cls('header__container', this.interface)}>
                {this._renderMenus()}
                <div class="background"></div>
                <Flex row middle class="header--left">
                    {this.brand && (
                        <img
                            class={cls({ clickable: this.brand })}
                            src={getAssetPath(`${this.basePath || '..'}/assets/brands/icon_${this.activeBrand}.svg`)}
                        />
                    )}
                    <Flex left>
                        <h2>{this.appTitle}</h2>
                        <h4>{this.appSubtitle}</h4>
                    </Flex>
                </Flex>
                <div class="header--right">
                    {this.search && this._renderSearch()}
                    {this.notifications && this._renderNotifications()}
                    {this.share && this._renderShare()}
                    {this.menu && this._renderMenu()}
                    {this.timeline && this._renderTimeline()}
                    {this.avatar && this.userData && this._renderAvatar()}
                </div>
                {this.showTimeline && this._renderTimelineSidebar()}
            </Flex>
        );
    }
}
