import { Component, h, Host, Prop } from '@stencil/core';
import { getGrowthColor } from '../../../../utils/color.utils';
import { distributions, RowLayout } from '../../../../utils/layout';
import { numeralFormat } from '../../../../utils/utils';
import { Cell, Row } from '../../list.model';

@Component({
    tag: 'synth-list-row',
    styleUrl: 'row.scss',
    shadow: false,
})
export class RowComponent {
    /* row data */
    @Prop() row: Row;
    /* total flag */
    @Prop() isTotal: boolean;
    /* expandable flag */
    @Prop() expandable: boolean;
    /* i18n object with translations */
    @Prop() i18n: any = {};

    private _expandRow() {}

    private _getRowClass() {
        return `${this.isTotal && 'total'} ${!this.expandable && 'child-disabled'} ${this.row._expanded && 'expanded'}`;
    }

    private _renderCell(cell: Cell) {
        const { value, decoration, ...formatArgs } = cell;
        const formattedValue = numeralFormat(value, ...Object.values(formatArgs));
        const color = decoration && getGrowthColor(formattedValue, decoration);

        return <td class={color}>{formattedValue}</td>;
    }

    private _renderRow = (row = this.row) => {
        return (
            <tr role="button" class={this._getRowClass()} onClick={() => this.expandable && this._expandRow()}>
                <td>
                    <RowLayout distribution={distributions.MIDDLE}>
                        {this.expandable && <em class="material-icons">expand_more</em>}
                        <span>{this.i18n[row.name] || row.name}</span>
                    </RowLayout>
                </td>
                {Object.keys(row)
                    .filter(field => !field.startsWith('_') && field !== 'name')
                    .map(field => this._renderCell(row[field]))}
            </tr>
        );
    };

    private _renderChildren() {
        return this.row._expanded && this.row._children?.map(this._renderRow);
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
