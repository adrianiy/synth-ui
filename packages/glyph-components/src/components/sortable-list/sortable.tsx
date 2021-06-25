import { Component, Prop, h, State, Event, EventEmitter } from '@stencil/core';
import { SortableOption, SortableChildrenEvent } from 'glyph-core';
import { cls } from '../../utils/utils';
import Sortable, { SortableOptions } from 'sortablejs';

@Component({
    tag: 'glyph-sortable',
    styleUrl: 'sortable.scss',
    shadow: true,
})
export class SortableComponent {
    /** List to sort */
    @Prop() list: SortableOption[];
    /** Children flag */
    @Prop() isChildren: boolean;
    /** [SortableJS](https://github.com/SortableJS/Sortable#options) list configuration */
    @Prop() config: SortableOptions = {};
    /** height property (makes list scrollable) */
    @Prop() height: number;
    /** Value renderer, if not set list will render `name` property */
    @Prop() valueGetter: (item: any) => string;
    /** Child value change */
    @Prop() childSortCallback: (SortedList: string[]) => any;
    /** Event emitted on drag end emitting new list configuration */
    @Event() sortChange: EventEmitter<string[]>;
    /** Event emitted on drag end emitting new list configuration */
    @Event() childrenSortChange: EventEmitter<SortableChildrenEvent>;
    /** Event emitted on drag end emitting new list configuration */
    @Event() add: EventEmitter<string[]>;
    /** Event emitted on drag end emitting new list configuration */
    @Event() remove: EventEmitter<string[]>;

    @State() useHover: boolean = true;

    private _sortableJsInstance: Sortable;

    private _createSortable = (el: HTMLElement) => {
        this._sortableJsInstance = new Sortable(el, {
            filter: '.ignore-element',
            scroll: true,
            ...this.config,
            onStart: () => {
                this.useHover = false;
            },
            onSort: () => {
                if (this.isChildren) {
                    this.childSortCallback(this._sortableJsInstance.toArray());
                } else {
                    this.sortChange.emit(this._sortableJsInstance.toArray());
                }
            },
            onAdd: () => {
                this.add.emit(this._sortableJsInstance.toArray());
            },
            onRemove: () => {
                this.remove.emit(this._sortableJsInstance.toArray());
            },
        });
    };

    private _handleActionClick = (item: SortableOption) => () => {
        item.action.action(item);
    };

    private _handleChildrenSortChange = (item: SortableOption) => (sortedList: string[]) => {
        this.childrenSortChange.emit({ item, sortedList });
    };

    render() {
        const haveIcon = this.list.some(({ icon }) => icon);

        return (
            <ul ref={this._createSortable} style={{ height: `${this.height}px` }} class="sortable-list__container">
                {this.list.map(item => (
                    <li
                        data-id={item.id}
                        class={cls({
                            'fill-icon': haveIcon && !item.icon,
                            'use-hover': this.useHover,
                            'ignore-element': item.notSortable,
                            'header': !!item.children,
                        })}
                    >
                        <glyph-sortable-element
                            item={item}
                            haveIcon={haveIcon}
                            valueGetter={this.valueGetter}
                            actionClick={this._handleActionClick(item)}
                            childrenSort={this._handleChildrenSortChange(item)}
                        />
                    </li>
                ))}
            </ul>
        );
    }
}
