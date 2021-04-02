import { Component, h, Host, Prop } from '@stencil/core';
import { getGrowthColor } from '../../../../utils/color.utils';
import { distributions, RowLayout } from '../../../../utils/layout';
import { numeralFormat } from '../../../../utils/utils';
import { Cell, Row, RowAction } from '../../list.model';

@Component({
    tag: 'synth-list-row',
    styleUrl: 'row.scss',
    shadow: false,
})
export class RowComponent {
    /** row data */
    @Prop() row: Row;
    /**  total flag */
    @Prop() isTotal: boolean;
    /** expandable flag */
    @Prop() expandable: boolean;
    /** i18n object with translations */
    @Prop() i18n: any = {};

    private _expandRow() {
        if (this.expandable) {
            // TODO implement expand logic
        }
    }

    private _getRowClass() {
        return `${this.isTotal && 'total'} ${!this.expandable && 'child-disabled'} ${this.row._expanded && 'expanded'}`;
    }

    private _renderCell(cell: Cell) {
        const { value, decoration, ...formatArgs } = cell;
        const formattedValue = numeralFormat(value, ...Object.values(formatArgs));
        const color = decoration && getGrowthColor(formattedValue, decoration);

        return <td class={color}>{formattedValue}</td>;
    }

    private _renderMultiActions(actions: RowAction[]) {
        return (
            <div class="row-action__list">
                <h4>{this.i18n['actions']}</h4>
                {actions.map(action => (
                    <div class="row-action row middle space-between" onClick={action.action}>
                        <span>{action.title}</span>
                        <em class="material-icons">{action.icon}</em>
                    </div>
                ))}
            </div>
        );
    }

    private _renderActions(actions: RowAction[]) {
        if (actions?.length) {
            return (
                <div class="row-action__wrapper">
                    <div class="row-action__container row middle center">
                        {actions.length === 1 ? (
                            <em class="row-action material-icons" onClick={actions[0].action}>
                                {actions[0].icon}
                            </em>
                        ) : (
                            <em class="material-icons">more_horiz</em>
                        )}
                        {actions.length > 1 && this._renderMultiActions(actions)}
                    </div>
                </div>
            );
        }
    }

    private _renderRow = (row = this.row) => {
        return (
            <tr role="button" class={this._getRowClass()} onClick={this._expandRow}>
                <td>
                    <RowLayout distribution={distributions.MIDDLE}>
                        {this.expandable && <em class="material-icons">expand_more</em>}
                        <span>{this.i18n[row.name] || row.name}</span>
                    </RowLayout>
                </td>
                {Object.keys(row)
                    .filter(field => !field.startsWith('_') && field !== 'name')
                    .map(field => this._renderCell(row[field]))}
                {this._renderActions(row._actions)}
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
