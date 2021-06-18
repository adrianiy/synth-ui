import { h, Component, Event, EventEmitter, Prop } from '@stencil/core';
import { Flex } from '../../utils/layout';
import { cls } from '../../utils/utils';

@Component({
    tag: 'glyph-pagination',
    styleUrl: 'pagination.scss',
    shadow: true,
})
export class PaginationComponent {
    /** Number of pages to be rendered */
    @Prop() pages: number;
    /** Active page */
    @Prop() activePage: number;
    /** Pagination limit in first group */
    @Prop() limit: number = undefined;
    /** Number of pages to be grouped if list is larger than limit */
    @Prop() pageGroups: number = 3;
    /** Event emitted on page click */
    @Event() setPage: EventEmitter<number>;

    private _changePage = (page: number) => () => {
        this.setPage.emit(page);
    };

    private _renderPage = (page: number) => {
        return (
            <Flex
                row
                middle
                className={cls(page === this.activePage && 'active', 'pagination__container__page')}
                onClick={this._changePage(page)}
            >
                {page + 1}
            </Flex>
        );
    };

    private _renderPageGroups = () => {
        const pages = [ -1, 0, 1 ].map(i => this.activePage + i);

        return pages.map(this._renderPage);
    };

    private _getThresholds = () => {
        return {
            upperThreshold: this.pages - this.limit,
            lowerThreshold: this.limit - 1,
        };
    };

    private _getPageGroupConfig = () => {
        const { upperThreshold, lowerThreshold } = this._getThresholds();
        const upperLimit = (this.limit + 1) * -1;
        const hasLimit = this.pages > this.limit;
        const hasToRenderGroups = this.limit && this.activePage >= lowerThreshold && this.activePage < upperThreshold;

        return {
            initialStart: 0,
            initialEnd: this.activePage >= lowerThreshold && this.limit ? 1 : this.limit,
            finalStart: this.activePage < upperThreshold ? -2 : upperLimit,
            finalEnd: -1,
            hasToRenderGroups,
            hasLimit,
        };
    };

    render() {
        if (isNaN(this.limit)) {
            this.limit = undefined;
        }
        const pageArray = Array(this.pages)
            .fill(0)
            .map((_, i) => i);
        const {
            initialStart,
            initialEnd,
            finalStart,
            finalEnd,
            hasToRenderGroups,
            hasLimit,
        } = this._getPageGroupConfig();

        return (
            <Flex row middle className="pagination__container">
                {pageArray.slice(initialStart, initialEnd).map(this._renderPage)}
                {hasLimit && <em class="material-icons">more_horiz</em>}
                {hasToRenderGroups && this._renderPageGroups()}
                {hasToRenderGroups && <em class="material-icons">more_horiz</em>}
                {hasLimit && pageArray.slice(finalStart, finalEnd).map(this._renderPage)}
            </Flex>
        );
    }
}
