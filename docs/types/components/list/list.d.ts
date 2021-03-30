import { Row } from './list.model';
export declare class ListComponent {
  /** Loading state. If true will render skeleton loader */
  loading: boolean;
  /** Component data. Fields preffixed with `_` will not render */
  data: Row[];
  /** Rows that has no data on these fields will not render */
  filterFields: string[];
  /** Default sorting field, it could be a private or public field */
  defaultSortField: string;
  /** Extra i18n translation object */
  i18n: {
    [key: string]: string;
  };
  /** Show decimals flag */
  decimals: boolean;
  /** Expandable flag */
  expandable: boolean;
  /** Rows limit. If not set will take `16` as default value or `10` in small screens */
  limit: number;
  /** Enable download xlsx file */
  enableDownload: boolean;
  /** Force component update if flag is true  */
  update: boolean;
  element: HTMLElement;
  sort: string;
  sortField: string;
  currentPage: number;
  showAll: boolean;
  private _fields;
  private _parsedList;
  private _isMobile;
  private _pages;
  private _i18n;
  componentWillLoad(): Promise<void>;
  componentWillRender(): void;
  private _initializeVariables;
  private _toggleShowAll;
  private _changePage;
  private _changeSort;
  private _parseData;
  private _setListConfig;
  private _filterListData;
  private _sortListData;
  private _setOriginalIndex;
  private _renderTable;
  private _renderPages;
  private _renderPagination;
  private _renderLoading;
  private _renderNoData;
  render(): any;
}
