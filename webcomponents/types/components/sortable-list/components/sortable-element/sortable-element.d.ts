import { SortableOption } from 'glyph-core-poc';
export declare class SortableElementComponent {
  /** Sortable item configuration */
  item: SortableOption;
  /** This variable should be truthy if any element in list renders an icon to align items */
  haveIcon: boolean;
  /** Value renderer, if not set list will render `name` property */
  valueGetter: (item: any) => string;
  /** Action click callback */
  actionClick: () => any;
  /** Children sort callback */
  childrenSort: (sortedList: string[]) => any;
  expanded: boolean;
  private _handleRowClick;
  render(): any;
}
