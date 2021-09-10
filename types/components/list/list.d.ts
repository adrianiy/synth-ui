import { EventEmitter } from '../../stencil-public-runtime';
import { Row } from 'glyph-core-poc';
export declare class ListComponent {
  /** Base path to get assets */
  basePath: string;
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
  /** **optional** force locale change if html lang is not interpreted */
  locale: string;
  /** Show decimals flag */
  decimals: boolean;
  /** Expandable flag */
  expandable: boolean;
  /** Rows limit. If not set will take `16` as default value or `10` in small screens */
  limit: number;
  /** Pagination limit */
  paginationLimit: number;
  /** Number of pages to be grouped if list is larger than limit */
  pageGroups: number;
  /** Enable download xlsx file */
  enableDownload: boolean;
  /** Force component update if flag is true  */
  update: boolean;
  /** Element reference */
  element: HTMLGlyphListElement;
  /** Sort value */
  sort: string;
  /** Sort field */
  sortField: string;
  /** Current page */
  currentPage: number;
  /** Show all flag */
  showAll: boolean;
  /** Parsed list */
  parsedList: Row[];
  /** Expand row event */
  expandRow: EventEmitter<Row>;
  private _fields;
  private _isMobile;
  private _pages;
  private _i18n;
  onDataChange(): void;
  componentWillLoad(): void;
  private _initializeVariables;
  private _toggleShowAll;
  private _changePage;
  private _changeSort;
  private _downloadExcel;
  private _expandRow;
  private _parseData;
  private _setListConfig;
  private _filterListData;
  private _sortListData;
  private _setOriginalIndex;
  private _setCurrentStateFields;
  private _renderTable;
  private _renderPages;
  private _renderPagination;
  private _renderLoading;
  private _renderNoData;
  render(): any;
}
