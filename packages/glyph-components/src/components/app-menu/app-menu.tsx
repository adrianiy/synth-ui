import { Component, Element, Listen, Prop, h, State } from '@stencil/core';
import { Screen } from 'glyph-core';
import { Icon } from '../../utils/icons';
import { Flex } from '../../utils/layout';
import { cls, getLocaleComponentStrings } from '../../utils/utils';

@Component({
    tag: 'glyph-app-menu',
    styleUrl: 'app-menu.scss',
    shadow: true,
})
export class AppMenuComponent {
    /** List of apps */
    @Prop() apps: Screen[];
    /** Extra i18n translation object */
    @Prop() i18n: { [key: string]: string } = {};
    /** Event triggered when user clicks outside component container */
    @Prop() outsideCallback: () => void;
    /** Element reference */
    @Element() element: HTMLGlyphAppMenuElement;
    /** App search value */
    @State() searchValue: string;

    private _i18n: any;

    @Listen('click', { target: 'window' })
    clickOutside(event: any) {
        if (!event.path.some((el: HTMLElement) => el.closest?.('.app-menu__container'))) {
            this.outsideCallback();
        }
    }

    async componentWillLoad() {
        await this._initializeVariables();
    }

    private async _initializeVariables() {
        const componentI18n = await getLocaleComponentStrings([ 'app-menu' ], this.element);
        this._i18n = { ...componentI18n, ...this.i18n };
    }

    private _navigateTo = (option: Screen) => () => {
        option.navigation();
    };

    private _inSearch({ name }) {
        return !this.searchValue || name.toLowerCase().includes(this.searchValue.toLowerCase());
    }

    private _handleInputChange = (event: any) => {
        this.searchValue = event.target.value;
    };

    private _handleKeyUp = (event: any) => {
        const isEnter = event.key === 'Enter';
        if (isEnter) {
            const visibleOptions = this.apps.filter(option => this._inSearch(option));

            if (visibleOptions.length === 1) {
                this._navigateTo(visibleOptions[0])();
            }
        }
    };

    private _renderApps = () => {
        return (
            <div class="app__container">
                {this.apps
                    .filter((app: Screen) => this._inSearch(app))
                    .map((app: Screen) => (
                        <Flex
                            center
                            middle
                            className={cls('app', { active: app.active })}
                            onClick={this._navigateTo(app)}
                        >
                            <Icon icon={app.icon} />
                            <span title={this._i18n[app.name] || app.name}>{this._i18n[app.name] || app.name}</span>
                        </Flex>
                    ))}
            </div>
        );
    };

    render() {
        return (
            <Flex className="app-menu__container">
                <Flex row spaced middle className="menu__header">
                    <Flex row>
                        <Icon icon="search" />
                        <input
                            placeholder={this._i18n['searchPlaceholder']}
                            type="text"
                            onKeyUp={this._handleKeyUp}
                            onInput={this._handleInputChange}
                        />
                    </Flex>
                </Flex>
                {this._renderApps()}
            </Flex>
        );
    }
}
