import { Component, Element, Prop, h, EventEmitter, Event, Listen } from '@stencil/core';
import { Icon } from '../../utils/icons';
import { Flex } from '../../utils/layout';
import { getLocaleComponentStrings } from '../../utils/utils';

@Component({
    tag: 'glyph-user-menu',
    styleUrl: 'user-menu.scss',
    shadow: true,
})
export class UserMenuComponent {
    /** User name */
    @Prop() name: string;
    /** Extra i18n translation object */
    @Prop() i18n: { [key: string]: string } = {};
    /** Event triggered when user clicks outside component container */
    @Prop() outsideCallback: () => void;
    /** Logout event, trigger an event identified with **logout** key */
    @Event() logout: EventEmitter<any>;
    /** Element reference */
    @Element() element: HTMLGlyphUserMenuElement;

    private _i18n: { [key: string]: string };

    @Listen('click', { target: 'window' })
    clickOutside(event: any) {
        if (!event.path.some((el: HTMLElement) => el.closest?.('.user-menu__container'))) {
            this.outsideCallback();
        }
    }

    async componentWillLoad() {
        await this._initializeVariables();
    }

    private async _initializeVariables() {
        const componentI18n = await getLocaleComponentStrings(['user-menu'], this.element);
        this._i18n = { ...componentI18n, ...this.i18n };
    }

    private _handleLogout = () => {
        this.logout.emit();
    };

    render() {
        return (
            <Flex left className="user-menu__container">
                <Flex>
                    <span class="caption caption--small">{this._i18n['user']}</span>
                    <h2>{this.name}</h2>
                </Flex>
                <div class="separator" />
                <Flex row middle className="option">
                    <Icon icon="settings" />
                    <span>{this._i18n['settings']}</span>
                </Flex>
                <div class="separator" />
                <Flex row middle className="option logout" onClick={this._handleLogout}>
                    <Icon icon="power_settings_new" />
                    <span>{this._i18n['logout']}</span>
                </Flex>
            </Flex>
        );
    }
}
