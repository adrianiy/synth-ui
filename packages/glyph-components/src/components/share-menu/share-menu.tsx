import { Component, Element, Prop, State, h, Listen } from '@stencil/core';
import { ToasterTypes, UIInterface } from 'glyph-core-poc';
import { Icon } from '../../utils/icons';
import { Flex } from '../../utils/layout';
import { cls, getLocaleComponentStrings } from '../../utils/utils';

@Component({
    tag: 'glyph-share-menu',
    styleUrl: 'share-menu.scss',
    shadow: true,
})
export class ShareMenuComponent {
    /** Base path to get assets */
    @Prop() basePath: string;
    /** Application title */
    @Prop() appTitle: string;
    /** Application subtitle */
    @Prop() appSubtitle: string;
    /** Extra i18n translation object */
    @Prop() i18n: { [key: string]: string } = {};
    /** **optional** force locale change if html lang is not interpreted */
    @Prop() locale: string;
    /** Interface type ['MODERN', 'CLASSIC'] */
    @Prop() interface: UIInterface = UIInterface.classic;
    /** Event triggered when user clicks outside component container */
    @Prop() outsideCallback: () => void;
    /** Element reference */
    @Element() element: HTMLGlyphShareMenuElement;

    /** share filters flag */
    @State() shareFilters: boolean = false;

    private _i18n: { [key: string]: string };

    @Listen('click', { target: 'window' })
    clickOutside(event: any) {
        if (!event.path.some((el: HTMLElement) => el.closest?.('.share-menu__container'))) {
            this.outsideCallback();
        }
    }

    async componentWillLoad() {
        await this._initializeVariables();
    }

    private async _initializeVariables() {
        const componentI18n = await getLocaleComponentStrings([ 'share-menu' ], this.element, this.basePath, this.locale);
        this._i18n = { ...componentI18n, ...this.i18n };
    }

    private _toggleShare = () => {
        this.shareFilters = !this.shareFilters;
    };

    private _handleCopy = () => {
        const copylistener = (e: ClipboardEvent) => {
            e.clipboardData.setData('text/plain', location.href);
            e.preventDefault();
        };

        document.addEventListener('copy', copylistener);
        let success = 0;
        try {
            document.execCommand('copy');
            success = 1;
        } catch (err) {
            success = 0;
        } finally {
            document.removeEventListener('copy', copylistener);
        }
        window.dispatchEvent(
            new CustomEvent('copyLink', {
                detail: {
                    text: this._i18n[success ? 'copyDone' : 'copyFail'],
                    icon: success ? 'checkmark' : 'close',
                    type: success ? ToasterTypes.succes : ToasterTypes.fail,
                },
            }),
        );
    };

    render() {
        return (
            <Flex class={cls('share-menu__container', this.interface)}>
                <span class="url">{location.href}</span>
                <span class="caption">{[ this.appTitle, this.appSubtitle ].filter(chunk => chunk).join(' - ')}</span>
                <Flex row spaced class="button__container">
                    <Flex row middle class="link" onClick={this._handleCopy}>
                        <Icon icon="link" />
                        <span>{this._i18n['copy']}</span>
                    </Flex>
                    <Flex row middle>
                        <span>{this._i18n['shareFilters']}</span>
                        <glyph-toggler
                            active={this.shareFilters}
                            interface={this.interface}
                            onClick={this._toggleShare}
                        />
                    </Flex>
                </Flex>
                <glyph-toaster basePath={this.basePath} eventId="copyLink" ttl={1000} />
            </Flex>
        );
    }
}
