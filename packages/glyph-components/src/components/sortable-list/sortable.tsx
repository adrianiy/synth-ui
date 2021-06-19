import { Component, Prop, h, State, Event, EventEmitter } from '@stencil/core';
import { SortableOption } from 'glyph-core';
import { cls } from '../../utils/utils';
import Sortable, { SortableOptions } from 'sortablejs';
import { Icon } from '../../utils/icons';
import { Flex } from '../../utils/layout';

@Component({
    tag: 'glyph-sortable',
    styleUrl: 'sortable.scss',
    shadow: true,
})
export class SortableComponent {
    /** List to sort */
    @Prop() list: SortableOption[];
    /** [SortableJS](https://github.com/SortableJS/Sortable#options) list configuration */
    @Prop() config: SortableOptions = {};
    /** Value renderer, if not set list will render `name` property */
    @Prop() valueGetter: (item: any) => string;
    /** Event emitted on drag end emitting new list configuration */
    @Event() sortChange: EventEmitter<SortableOption[]>;

    @State() useHover: boolean = true;
    @State() sortedList: SortableOption[] = [];

    private _sortableJsInstance: Sortable;

    componentDidLoad() {
        this.sortedList = this.list.map((item, index) => ({ ...item, index }));
    }

    private _createSortable = (el: HTMLElement) => {
        this._sortableJsInstance = new Sortable(el, {
            filter: '.ignore-element',
            ...this.config,
            onStart: () => {
                this.useHover = false;
            },
            onEnd: () => {
                const sortedIds = this._sortableJsInstance.toArray();
                const sortedList = sortedIds.map(id => {
                    const { index: _, ...item } = this.sortedList.find(({ index }) => id === `gui-${index}`);

                    return item;
                });
                this.sortChange.emit(sortedList);
            },
        });
    };

    render() {
        const haveIcon = this.sortedList.some(({ icon }) => icon);
        return (
            <ul ref={this._createSortable} class="sortable-list__container">
                {this.sortedList.map(item => (
                    <li
                        data-id={`gui-${item.index}`}
                        class={cls({
                            'fill-icon': haveIcon && !item.icon,
                            'use-hover': this.useHover,
                            'ignore-element': item.notSortable,
                        })}
                    >
                        <Flex middle row spaced>
                            <Flex middle row>
                                {item.icon && <Icon icon="drag_indicator" />}
                                {this.valueGetter ? this.valueGetter(item) : item.name}
                            </Flex>
                            {item.action && (
                                <Icon className="action" icon={item.action.icon} onClick={item.action.action} />
                            )}
                        </Flex>
                    </li>
                ))}
            </ul>
        );
    }
}
