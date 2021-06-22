import { Component, h, Host, Prop } from '@stencil/core';
import { Flex } from '../../../../utils/layout';
import { Cell, Row, RowAction } from 'glyph-core';
import { Icon } from '../../../../utils/icons';
import { Format } from '../../../../utils/format';

@Component({
    tag: 'glyph-list-row',
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
        return (
            <td>
                <Format config={cell} decorate />
            </td>
        );
    }

    private _renderMultiActions(actions: RowAction[]) {
        return (
            <div class="row-action__list">
                <h4>{this.i18n['actions']}</h4>
                {actions.map(action => (
                    <Flex row middle spaced class="row-action" onClick={action.action}>
                        <span>{action.title}</span>
                        <Icon icon={action.icon} />
                    </Flex>
                ))}
            </div>
        );
    }

    private _renderActions(actions: RowAction[]) {
        if (actions?.length) {
            return (
                <div class="row-action__wrapper">
                    <Flex row middle center class="row-action__container">
                        {actions.length === 1 ? (
                            <Icon class="row-action" icon={actions[0].icon} onClick={actions[0].action} />
                        ) : (
                            <Icon icon="more_horiz" />
                        )}
                        {actions.length > 1 && this._renderMultiActions(actions)}
                    </Flex>
                </div>
            );
        }
    }

    private _renderRow = (row = this.row, child = false) => {
        if (row._loading) {
            return (
                <tr class={this._getRowClass(child)}>
                    <td colSpan={this.fields.length + 1} class="loader">
                        <glyph-sk-loader />
                    </td>
                </tr>
            );
        }
        return (
            <tr role="button" class={this._getRowClass(child)} onClick={this.expandHandle(row)}>
                <td>
                    <Flex row middle>
                        {this.expandable && !child && <em class="material-icons">expand_more</em>}
                        <span>{this.i18n[row.name] || row.name}</span>
                    </Flex>
                </td>
                {this.fields.map(field => this._renderCell(row[field]))}
                {this._renderActions(row._actions)}
            </tr>
        );
    };

    private _renderChildren() {
        return this.row._children?.map((child: Row) => this._renderRow(child, true));
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
