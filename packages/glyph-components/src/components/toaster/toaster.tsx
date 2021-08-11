import { Component, Prop, h, State, Element } from '@stencil/core';
import { ToasterEvent, ToasterTypes } from 'glyph-core-poc';
import { Icon } from '../../utils/icons';
import { Flex } from '../../utils/layout';
import { cls, getLocaleComponentStrings } from '../../utils/utils';

@Component({
    tag: 'glyph-toaster',
    styleUrl: 'toaster.scss',
    shadow: true,
})
export class ToasterComponent {
    /** Base path to get assets */
    @Prop() basePath: string;
    /** Id of event that trigger toaster show */
    @Prop() eventId: string;
    /** Time to live for shown toaster */
    @Prop() ttl: number;
    /** Extra i18n translation object */
    @Prop() i18n: { [key: string]: string } = {};
    /** **optional** force locale change if html lang is not interpreted */
    @Prop() locale: string;
    /** Element reference */
    @Element() element: HTMLGlyphToasterElement;

    /** Toaster text */
    @State() text: string;
    /** Toaster icon */
    @State() icon: string;
    /** Toaster type */
    @State() ttype: ToasterTypes;
    /** Toaster visibility */
    @State() visible: boolean;
    /** Current ttl countdown */
    @State() currentTtl: number;

    private _countdown: any;
    private _i18n: { [key: string]: string } = {};

    componentWillLoad() {
        this._initializeVariables();
        window.addEventListener(this.eventId as any, event => this._handleToasterTrigger(event.detail));
    }

    disconnectedCallback() {
        window.removeEventListener(this.eventId as any, event => this._handleToasterTrigger(event.detail));
    }

    private _toggleVisibility = (value?: boolean) => () => {
        this.visible = value ?? !this.visible;
    };

    private async _initializeVariables() {
        const componentI18n = await getLocaleComponentStrings([ 'toaster' ], this.element, this.basePath, this.locale);
        this._i18n = { ...componentI18n, ...this.i18n };
    }

    private _handleToasterTrigger = (event: ToasterEvent) => {
        this.text = event.text;
        this.icon = event.icon;
        this.ttype = event.type;
        this.visible = true;
        if (this.ttl) {
            this.currentTtl = this.ttl;
            this._countdown = setInterval(() => {
                this.currentTtl = this.currentTtl - 1;
                if (!this.currentTtl) {
                    clearInterval(this._countdown);
                    this.visible = false;
                }
            }, 1);
        }
    };

    render() {
        return (
            this.visible && (
                <Flex row middle center class="toaster__wrapper">
                    <Flex class={cls('toaster__container', 'animated fadeInDown', this.ttype)}>
                        <Flex row middle>
                            <Icon class="toaster__wrapper__icon--decoration" icon={this.icon} />
                            <span>{this.text}</span>
                            {!this.ttl && (
                                <button class="close" onClick={this._toggleVisibility(false)}>
                                    {this._i18n['close']}
                                </button>
                            )}
                        </Flex>
                        {this.ttl && (
                            <div class="ttl-bar__container">
                                <div class="ttl-bar" style={{ width: `${(this.currentTtl / this.ttl) * 100}%` }} />
                            </div>
                        )}
                    </Flex>
                </Flex>
            )
        );
    }
}
