import { Component, Element, Prop, h, EventEmitter, Event, Listen, State } from '@stencil/core';
import { SelectorOption, UIInterface } from 'glyph-core';
import { Flex } from '../../utils/layout';
import { cls, getLocaleComponentStrings } from '../../utils/utils';

@Component({
    tag: 'glyph-user-menu',
    styleUrl: 'user-menu.scss',
    shadow: true,
})
export class UserMenuComponent {
    /** Base path to get assets */
    @Prop() basePath: string;
    /** User name */
    @Prop() name: string;
    /** Application languages */
    @Prop() languages: SelectorOption[];
    /** Application themes */
    @Prop() themes: SelectorOption[];
    /** Show decimal config flag */
    @Prop() decimals: boolean;
    /** Show custom config button */
    @Prop() customConfig: boolean;
    /** Interface type ['MODERN', 'CLASSIC'] */
    @Prop() interface: UIInterface = UIInterface.classic;
    /** Extra i18n translation object */
    @Prop() i18n: { [key: string]: string } = {};
    /** **optional** force locale change if html lang is not interpreted */
    @Prop() locale: string;
    /** Event triggered when user clicks outside component container */
    @Prop() outsideCallback: () => void;
    /** Logout event, trigger an event identified with **logout** key */
    @Event() logout: EventEmitter<any>;
    /** Language change event */
    @Event() langChange: EventEmitter<SelectorOption>;
    /** Theme change event */
    @Event() themeChange: EventEmitter<SelectorOption>;
    /** Decimals change event */
    @Event() decimalsChange: EventEmitter<boolean>;
    /** Custom config event */
    @Event() customConfigChange: EventEmitter<any>;
    /** Element reference */
    @Element() element: HTMLGlyphUserMenuElement;

    /** Show decimals flag */
    @State() showDecimals: boolean = false;

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
        const componentI18n = await getLocaleComponentStrings([ 'user-menu' ], this.element, this.basePath, this.locale);
        this._i18n = { ...componentI18n, ...this.i18n };
    }

    private _handleLangChange = (option: CustomEvent<SelectorOption>) => {
        this.languages = this.languages.map(lang => ({ ...lang, active: lang.value === option.detail.value }));
        this.langChange.emit(option.detail);
    };

    private _handleThemeChange = (option: CustomEvent<SelectorOption>) => {
        this.themes = this.themes.map(theme => ({ ...theme, active: theme.value === option.detail.value }));
        this.themeChange.emit(option.detail);
    };

    private _handleDecimalsChange = () => {
        this.decimalsChange.emit(this.showDecimals);
    };

    private _handleLogout = () => {
        this.logout.emit();
    };

    private _handleCustomConfig = () => {
        this.customConfigChange.emit();
    };

    render() {
        return (
            <Flex left class={cls('user-menu__container', this.interface)}>
                <Flex>
                    <span class="caption caption--small">{this._i18n['user']}</span>
                    {this.interface === 'classic' ? <span class="caption">{this.name}</span> : <h2>{this.name}</h2>}
                </Flex>
                <div class="separator" />
                {this.languages && (
                    <Flex class="user-menu__container__row">
                        <Flex row middle spaced>
                            <span class="caption">{this._i18n['pickLang']}</span>
                            <glyph-selector
                                options={this.languages}
                                onOptionSelect={this._handleLangChange}
                                interface={this.interface}
                            />
                        </Flex>
                        <div class="separator" />
                    </Flex>
                )}
                {this.themes && (
                    <Flex class="user-menu__container__row">
                        <Flex row middle spaced>
                            <span class="caption">{this._i18n['pickTheme']}</span>
                            <glyph-selector
                                options={this.themes}
                                onOptionSelect={this._handleThemeChange}
                                interface={this.interface}
                            />
                        </Flex>
                        <div class="separator" />
                    </Flex>
                )}
                {this.decimals && (
                    <Flex class="user-menu__container__row">
                        <Flex row middle spaced>
                            <span class="caption">{this._i18n['showDecimals']}</span>
                            <glyph-toggler
                                onClick={this._handleDecimalsChange}
                                active={this.showDecimals}
                                interface={this.interface}
                            />
                        </Flex>
                        <div class="separator" />
                    </Flex>
                )}
                {this.customConfig && (
                    <Flex class="user-menu__container__row">
                        <Flex row middle left class="option" onClick={this._handleCustomConfig}>
                            <glyph-icon
                                material={this.interface !== UIInterface.redesign}
                                icon={this.interface !== UIInterface.redesign ? 'settings' : 'settings-outlined'}
                            />
                            <span class="caption">{this._i18n['settings']}</span>
                        </Flex>
                        <div class="separator" />
                    </Flex>
                )}
                <Flex row middle class="option logout" onClick={this._handleLogout}>
                    <glyph-icon icon="power_settings_new" button material />
                    <span>{this._i18n['logout']}</span>
                </Flex>
            </Flex>
        );
    }
}
