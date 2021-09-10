import { EventEmitter } from '../../stencil-public-runtime';
export declare class PaginationComponent {
  /** Number of pages to be rendered */
  pages: number;
  /** Active page */
  activePage: number;
  /** Pagination limit in first group */
  limit: number;
  /** Number of pages to be grouped if list is larger than limit */
  pageGroups: number;
  /** Event emitted on page click */
  setPage: EventEmitter<number>;
  private _changePage;
  private _renderPage;
  private _renderPageGroups;
  private _getThresholds;
  private _getPageGroupConfig;
  render(): any;
}
