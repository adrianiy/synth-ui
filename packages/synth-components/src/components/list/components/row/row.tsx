import { Component, h, Host, Prop } from '@stencil/core';
import { distributions, RowLayout } from '../../../../utils/layout';
import { Cell, Row, RowAction } from 'synth-core';
import { getCellValues } from '../../utils/list';

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
    /** expand row callback */
    @Prop() expandHandle: (row: Row) => () => any;
    /** Render fields */
    @Prop() fields: string[];

    private _getRowClass(child = false) {
        return `${this.isTotal && 'total'} ${child && 'child'} ${!this.expandable && 'child-disabled'} ${
            this.row._expanded && 'expanded'
        }`;
    }

    private _renderCell(cell: Cell) {
        const { color, formattedValue } = getCellValues(cell);

        return <td class={color}>{formattedValue}</td>;
    }

    private _renderMultiActions(actions: RowAction[]) {
        return (
            <div class="row-action__list">
                <h4>{this.i18n['actions']}</h4>
                {actions.map(action => (
                    <RowLayout
                        className="row-action"
                        distribution={[ distributions.MIDDLE, distributions.SPACED ]}
                        onClick={action.action}
                    >
                        <span>{action.title}</span>
                        <em class="material-icons">{action.icon}</em>
                    </RowLayout>
                ))}
            </div>
        );
    }

    private _renderActions(actions: RowAction[]) {
        if (actions?.length) {
            return (
                <div class="row-action__wrapper">
                    <RowLayout
                        className="row-action__container"
                        distribution={[ distributions.MIDDLE, distributions.CENTER ]}
                    >
                        {actions.length === 1 ? (
                            <em class="row-action material-icons" onClick={actions[0].action}>
                                {actions[0].icon}
                            </em>
                        ) : (
                            <em class="material-icons">more_horiz</em>
                        )}
                        {actions.length > 1 && this._renderMultiActions(actions)}
                    </RowLayout>
                </div>
            );
        }
    }

    private _renderRow = (row = this.row, child = false) => {
        if (row._loading) {
            return (
                <tr class={this._getRowClass(child)}>
                    <td colSpan={this.fields.length + 1} class="loader">
                        <synth-sk-loader />
                    </td>
                </tr>
            );
        }
        return (
            <tr role="button" class={this._getRowClass(child)} onClick={this.expandHandle(row)}>
                <td>
                    <RowLayout distribution={distributions.MIDDLE}>
                        {this.expandable && !child && <em class="material-icons">expand_more</em>}
                        <span>{this.i18n[row.name] || row.name}</span>
                    </RowLayout>
                </td>
                {this.fields.map(field => this._renderCell(row[field]))}
                {this._renderActions(row._actions)}
            </tr>
        );
    };

    private _renderChildren() {
        return this.row._children?.map(child => this._renderRow(child, true));
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
