import { Component, Element, h } from '@stencil/core';
import { distributions, RowLayout } from '../../utils/layout';
import { getLocaleComponentStrings } from '../../utils/utils';

@Component({
    tag: 'synth-no-data',
    styleUrl: 'no-data.scss',
    shadow: true,
})
export class NoDataComponent {
    @Element() element: HTMLElement;
    private _i18n: any;

    async componentWillLoad() {
        this._i18n = await getLocaleComponentStrings(['no-data'], this.element);
    }

    render() {
        return (
            <RowLayout distribution={[distributions.MIDDLE]}>
                <em class="material-icons">error_outline</em>
                {this._i18n.noData}
            </RowLayout>
        );
    }
}
