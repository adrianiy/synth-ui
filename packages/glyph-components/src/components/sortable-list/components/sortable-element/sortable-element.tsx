import { h, Component, Prop, State } from '@stencil/core';
import { SortableOption } from 'glyph-core-poc';
import { SortableOptions } from 'sortablejs';
import { Icon } from '../../../../utils/icons';
import { Flex } from '../../../../utils/layout';
import { cls } from '../../../../utils/utils';

@Component({
    tag: 'glyph-sortable-element',
    styleUrl: './sortable-element.scss',
    shadow: true,
})
export class SortableElementComponent {
    /** Sortable item configuration */
    @Prop() item: SortableOption;
    /** This variable should be truthy if any element in list renders an icon to align items */
    @Prop() haveIcon: boolean;
    /** Value renderer, if not set list will render `name` property */
    @Prop() valueGetter: (item: any) => string;
    /** Action click callback */
    @Prop() actionClick: () => any;
    /** Children sort callback */
    @Prop() childrenSort: (sortedList: string[]) => any;

    @State() expanded: boolean = false;

    private _handleRowClick = () => {
        if (this.item.children) {
            this.expanded = !this.expanded;
        }
    };

    render() {
        const { name, icon, children, action, style } = this.item;
        const config: SortableOptions = {
            group: `sortable-children--${name}`,
            sort: true,
        };

        return (
            <Flex column>
                <Flex
                    middle
                    row
                    spaced
                    class={cls('sortable-item', { header: !!children })}
                    style={style}
                    onClick={this._handleRowClick}
                >
                    <Flex middle row class="name">
                        {children && <Icon icon={this.expanded ? 'remove' : 'add'} />}
                        {icon && !children && <Icon icon="drag_indicator" class={icon} />}
                        {this.valueGetter ? this.valueGetter(this.item) : name}
                    </Flex>
                    {action && <Icon class="action" icon={action.icon} onClick={this.actionClick} />}
                </Flex>
                {this.expanded && (
                    <glyph-sortable isChildren config={config} list={children} childSortCallback={this.childrenSort} />
                )}
            </Flex>
        );
    }
}
