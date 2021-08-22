import { Component, Element, h, Prop } from '@stencil/core';
import { Icon } from '../../utils/icons';
import { Flex } from '../../utils/layout';
import { getComponentLocale } from '../../utils/utils';
import { NoDataType } from './no-data.model';
import es from './i18n/no-data.i18n.es.json';
import en from './i18n/no-data.i18n.en.json';
import state from '../../utils/store/context.store';

@Component({
    tag: 'glyph-no-data',
    styleUrl: 'no-data.scss',
    shadow: true,
})
export class NoDataComponent {
    /** Base path to get assets */
    @Prop() basePath: string;
    /** Render mode [ 'simple' | 'complex' ] */
    @Prop() mode: string = NoDataType.Simple;
    /** Top text only applies if render mode is advanced */
    @Prop() text: string;
    /** Bottom text. only applies if render mode is advanced */
    @Prop() bottomText: string;
    /** Extra i18n translation object */
    @Prop() i18n: { [key: string]: string } = {};
    /** **optional** force locale change if html lang is not interpreted */
    @Prop() locale: string;

    @Element() element: HTMLGlyphNoDataElement;

    private _i18n: any;

    componentWillLoad() {
        const componentI18n = getComponentLocale(this.element, { es, en });
        this._i18n = { ...componentI18n, ...this.i18n };
        this.basePath = this.basePath || state.basePath;
    }

    private _simpleRender() {
        return (
            <Flex row middle class={`no-data ${this.mode}`}>
                <Icon icon="error_outline" />
                {this.text || this._i18n.noData}
            </Flex>
        );
    }

    private _advancedRender() {
        return (
            <Flex center class={`no-data ${this.mode}`}>
                <Icon outlined icon="report_problem" />
                <h3>{this.text}</h3>
                <p>{this.bottomText}</p>
            </Flex>
        );
    }

    render() {
        return this.mode === NoDataType.Simple ? this._simpleRender() : this._advancedRender();
    }
}
