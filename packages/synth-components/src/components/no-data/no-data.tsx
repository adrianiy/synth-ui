import { Component, Element, h, Prop } from '@stencil/core';
import { ColumnLayout, distributions, RowLayout } from '../../utils/layout';
import { getLocaleComponentStrings } from '../../utils/utils';
import { NoDataType } from './no-data.model';

@Component({
    tag: 'synth-no-data',
    styleUrl: 'no-data.scss',
    shadow: true,
})
export class NoDataComponent {
    /** Render mode [ 'simple' | 'complex' ] */
    @Prop() mode: string = NoDataType.Simple;
    /** Top text only applies if render mode is advanced */
    @Prop() text: string;
    /** Bottom text. only applies if render mode is advanced */
    @Prop() bottomText: string;
    /** Extra i18n translation object */
    @Prop() i18n: { [key: string]: string } = {};

    @Element() element: HTMLSynthNoDataElement;

    private _i18n: any;

    async componentWillLoad() {
        const componentI18n = await getLocaleComponentStrings([ 'no-data' ], this.element);
        this._i18n = { ...componentI18n, ...this.i18n };
    }

    private _simpleRender() {
        return (
            <RowLayout className={`no-data ${this.mode}`} distribution={[ distributions.MIDDLE ]}>
                <em class="material-icons">error_outline</em>
                {this._i18n.noData}
            </RowLayout>
        );
    }

    private _advancedRender() {
        return (
            <ColumnLayout className={`no-data ${this.mode}`} distribution={[ distributions.CENTER ]}>
                <em class="material-icons-outlined">report_problem</em>
                <h3>{this.text}</h3>
                <p>{this.bottomText}</p>
            </ColumnLayout>
        );
    }

    render() {
        return this.mode === NoDataType.Simple ? this._simpleRender() : this._advancedRender();
    }
}
