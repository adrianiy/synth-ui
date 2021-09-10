import { EventEmitter } from '../../stencil-public-runtime';
import { SortableOption, SortableChildrenEvent } from 'glyph-core-poc';
import { SortableOptions } from 'sortablejs';
export declare class SortableComponent {
  /** List to sort */
  list: SortableOption[];
  /** Children flag */
  isChildren: boolean;
  /** [SortableJS](https://github.com/SortableJS/Sortable#options) list configuration */
  config: SortableOptions;
  /** height property (makes list scrollable) */
  height: number;
  /** Value renderer, if not set list will render `name` property */
  valueGetter: (item: any) => string;
  /** Child value change */
  childSortCallback: (SortedList: string[]) => any;
  /** Event emitted on drag end emitting new list configuration */
  sortChange: EventEmitter<string[]>;
  /** Event emitted on drag end emitting new list configuration */
  childrenSortChange: EventEmitter<SortableChildrenEvent>;
  /** Event emitted on drag end emitting new list configuration */
  add: EventEmitter<string[]>;
  /** Event emitted on drag end emitting new list configuration */
  remove: EventEmitter<string[]>;
  useHover: boolean;
  private _sortableJsInstance;
  private _createSortable;
  private _handleActionClick;
  private _handleChildrenSortChange;
  render(): any;
}
