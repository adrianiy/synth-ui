import { Component, h, Host, Prop } from '@stencil/core';
import { DecorationType, getGrowthColor } from '../../../../utils/color.utils';
import { distributions, RowLayout } from '../../../../utils/layout';
import { FieldsConfig, Row } from '../../list.model';

@Component({
    tag: 'synth-list-row',
    styleUrl: 'row.scss',
    shadow: false,
})
export class RowComponent {
    /* row data */
    @Prop() row: Row;
    /* field configuration that will compose row cells */
    @Prop() fieldsConfig: FieldsConfig[];
    /* total flag */
    @Prop() isTotal: boolean;
    /* decoration type */
    @Prop() decorationType: DecorationType;
    /* expandable flag */
    @Prop() expandable: boolean;
    /* i18n object with translations */
    @Prop() i18n: any;

    private _expandRow() {}

    private _getRowClass() {
        return `${this.isTotal && 'total'} ${!this.expandable && 'child-disabled'} ${this.row._expanded && 'expanded'}`;
    }

    private _renderCell(field: FieldsConfig, row: Row) {
        const title = field.title();
        const isGrowth = field.preffix.includes('growth_');
        const color = isGrowth && getGrowthColor(row[title], this.decorationType);

        return <td class={color}>{row[title]}</td>;
    }

    private _renderRow(row = this.row) {
        return (
            <tr role="button" class={this._getRowClass()} onClick={() => this.expandable && this._expandRow()}>
                <td>
                    <RowLayout distribution={distributions.MIDDLE}>
                        {this.expandable && <em class="material-icons">expand_more</em>}
                        <span>{this.i18n[row.name] || row.name}</span>
                    </RowLayout>
                </td>
                {this.fieldsConfig.map(field => this._renderCell(field, row))}
            </tr>
        );
    }

    private _renderChildren() {
        return this.row.children?.map(this._renderRow);
    }

    render() {
        return (
            <Host class="row__container">
                {this._renderRow()}
                {this._renderChildren()}
            </Host>
        );
    }
}
