import { Component, getAssetPath, Prop, h, State, Element } from '@stencil/core';
import { Brands, UIInterface, UserData, Screen, TimelineEvent } from 'glyph-core';
import { Icon } from '../../utils/icons';
import { Flex } from '../../utils/layout';
import { cls } from '../../utils/utils';

@Component({
    tag: 'glyph-header',
    styleUrl: 'header.scss',
    shadow: true,
})
export class HeaderComponent {
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
    /** Calendar events */
    @Prop() calendarEvents: TimelineEvent[];
    /** Events */
    @Prop() events: TimelineEvent[];
    /** Interface type ['MODERN', 'CLASSIC'] */
    @Prop() interface: UIInterface = UIInterface.classic;
    /** Extra i18n translation object */
    @Prop() i18n: { [key: string]: string } = {};
    /** Element reference */
    @Element() element: HTMLGlyphHeaderElement;

    /** show user menu flag */
    @State() showUserMenu: boolean = false;
    /** show apps menu flag */
    @State() showAppsMenu: boolean = false;
    /** show share menu flag */
    @State() showShareMenu: boolean = false;
    /** show timeline flag */
    @State() showTimeline: boolean = false;

    private _renderShare = () => {
        return (
            <Flex row middle center className="widget__container">
                <div class="share" onClick={() => (this.showShareMenu = !this.showShareMenu)}>
                    <div class="square">
                        <div class="square--bite" />
                    </div>
                    <Icon icon="reply" className="share" />
                </div>
                {this.showShareMenu && (
                    <glyph-share-menu
                        class="widget__menu widget__menu--share animated fadeIn"
                        appTitle={this.appTitle}
                        appSubtitle={this.appSubtitle}
                        interface={this.interface}
                        outsideCallback={() => (this.showShareMenu = false)}
                        i18n={this.i18n}
                    />
                )}
            </Flex>
        );
    };

    private _renderSearch = () => {
        return <Icon button icon="search" />;
    };

    private _renderMenu = () => {
        return (
            <Flex row middle center className="widget__container">
                <Icon button icon="apps" onClick={() => (this.showAppsMenu = !this.showAppsMenu)} />
                {this.showAppsMenu && (
                    <glyph-app-menu
                        class="widget__menu widget__menu--apps animated fadeIn"
                        apps={this.appData}
                        outsideCallback={() => (this.showAppsMenu = false)}
                        i18n={this.i18n}
                    />
                )}
            </Flex>
        );
    };

    private _renderTimeline = () => {
        return <Icon button icon="calendar_today" onClick={() => (this.showTimeline = !this.showTimeline)} />;
    };

    private _renderAvatar = () => {
        return (
            <Flex row middle center className="widget__container">
                <glyph-avatar {...this.userData} onClick={() => (this.showUserMenu = !this.showUserMenu)} />
                {this.showUserMenu && (
                    <glyph-user-menu
                        class="widget__menu widget__menu--user animated fadeIn"
                        name={this.userData.name}
                        outsideCallback={() => (this.showUserMenu = false)}
                        i18n={this.i18n}
                    />
                )}
            </Flex>
        );
    };

    private _renderTimelineSidebar = () => {
        return (
            <Flex
                className={cls(
                    'widget__menu widget__menu--sidebar animated',
                    this.interface === UIInterface.classic ? 'fadeInRight' : 'fadeIn',
                )}
            >
                <glyph-timeline
                    calendarEvents={this.calendarEvents}
                    events={this.events}
                    i18n={this.i18n}
                    interface={this.interface}
                    outsideCallback={() => (this.showTimeline = false)}
                />
            </Flex>
        );
    };

    render() {
        return (
            <Flex row spaced middle className={cls('header__container', this.interface)}>
                <Flex row middle className="header--left">
                    <img
                        class={cls(this.brand && 'clickable')}
                        src={getAssetPath(`./assets/brands/icon_${this.activeBrand}.svg`)}
                    />
                    <Flex left>
                        <h2>{this.appTitle}</h2>
                        <h4>{this.appSubtitle}</h4>
                    </Flex>
                </Flex>
                <div class="header--right">
                    {this.search && this._renderSearch()}
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
