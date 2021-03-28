import { Component, Element, h, Prop, State } from '@stencil/core';
import { Row } from './list.model';
import { filterEmptyRows, sortList } from './utils/list';
import { getLocaleComponentStrings } from '../../utils/utils';
import { ColumnLayout, distributions, RowLayout } from '../../utils/layout';

const LIMIT = 16;
const RESPONSIVE_LIMIT = 10;

@Component({
    tag: 'synth-list',
    styleUrl: 'list.scss',
    shadow: true,
})
export class ListComponent {
    /** Loading state. If true will render skeleton loader */
    @Prop() loading: boolean;
    /** Component data. Fields preffixed with `_` will not render */
    @Prop() data: Row[];
    /** Rows that has no data on these fields will not render */
    @Prop() filterFields: string[];
    /** Default sorting field, it could be a private or public field */
    @Prop() defaultSortField: string;
    /** Extra i18n translation object */
    @Prop() i18n: { [key: string]: string } = {};
    /** Show decimals flag */
    @Prop() decimals: boolean;
    /** Expandable flag */
    @Prop() expandable: boolean;
    /** Rows limit. If not set will take `16` as default value or `10` in small screens */
    @Prop({ mutable: true }) limit: number;
    /** Enable download xlsx file */
    @Prop() enableDownload: boolean = false;
    /** Force component update if flag is true  */
    @Prop({ mutable: true }) update: boolean = false;
    /* Element reference */
    @Element() element: HTMLElement;
    /* Sort value */
    @State() sort = 'default';
    /* Sort field */
    @State() sortField: string;
    /* current page */
    @State() currentPage: number = 0;
    /* show all flag */
    @State() showAll: boolean = false;

    private _fields = [];
    private _parsedList: Row[] = [];
    private _isMobile = false;
    private _pages = [];
    private _i18n: any;

    async componentWillLoad() {
        await this._initializeVariables();
    }

    componentWillRender() {
        if (this.data?.length) {
            this._fields = Object.keys(this.data[0])
                .filter(key => !key.startsWith('_') && key !== 'name')
                .map(key => key);
        }
        this._parseData();
    }

    private async _initializeVariables() {
        const componentI18n = await getLocaleComponentStrings([ 'list',  'no-data' ], this.element);
        this._i18n = { ...componentI18n, ...this.i18n };
        this._isMobile = window.innerWidth < 1050;

        if (!this.limit) {
            this.limit = this._isMobile ? RESPONSIVE_LIMIT : LIMIT;
        }
    }

    private _toggleShowAll() {
        this.showAll = !this.showAll;
    }

    private _changePage(page: number) {
        this.currentPage = page;
    }

    private _changeSort(sort: string, key: string) {
        this.sort = this.sort === sort ? 'default' : sort;

        this.sortField = key;
        this._parseData();
    }

    private _parseData() {
        this._parsedList = this._setListConfig();
        this._pages = Array(Math.round(this._parsedList.length / this.limit)).fill(0);
    }

    private _setListConfig() {
        return this._sortListData(this._filterListData(), this.sortField);
    }

    private _filterListData() {
        if (this.filterFields) {
            this._setOriginalIndex();

            return filterEmptyRows(this.data, this.filterFields);
        } else {
            return this.data;
        }
    }

    private _sortListData(list: any, field: string) {
        const customSort = this.sort !== 'default';

        if (customSort) {
            list = [ list[0] ].concat(sortList(list.slice(1), field, this.sort));
        }
        return list;
    }

    private _setOriginalIndex() {
        this.data.forEach((row, index) => (row['_originalIndex'] = index));
    }

    private _renderTable = () => (
        <table>
            <thead>
                <th />
                {this._fields.map(field => {
                    const isDesc = this.sort === 'desc';
                    const isSortField = this.sortField === field;

                    return (
                        <th>
                            <RowLayout className="nowrap" distribution={distributions.RIGHT}>
                                {this._i18n[field] || field}
                                <em
                                    role="button"
                                    class={`material-icons ${!isDesc && isSortField && 'active'}`}
                                    onClick={() => this._changeSort('asc', field)}
                                >
                                    arrow_upward
                                </em>
                                <em
                                    role="button"
                                    class={`material-icons ${isDesc && isSortField && 'active'}`}
                                    onClick={() => this._changeSort('desc', field)}
                                >
                                    arrow_downward
                                </em>
                            </RowLayout>
                        </th>
                    );
                })}
            </thead>
            {this._parsedList[0]._isTotal && (
                <synth-list-row row={this._parsedList[0]} isTotal expandable={this.expandable} i18n={this._i18n} />
            )}
            {this._parsedList
                .slice(this._parsedList[0]._isTotal ? 1 : 0)
                .slice(
                    this.showAll ? 0 : this.currentPage * this.limit,
                    this.showAll ? undefined : (this.currentPage + 1) * this.limit,
                )
                .map(row => (
                    <synth-list-row row={row} isTotal={row._isTotal} expandable={this.expandable} i18n={this._i18n} />
                ))}
        </table>
    );

    private _renderPages() {
        return this._pages.map((_, index) => (
            <span
                role="button"
                class={`pagination__page ${this.currentPage === index && 'active'}`}
                onClick={() => this._changePage(index)}
            >
                {index + 1}
            </span>
        ));
    }

    private _renderPagination() {
        return (
            <RowLayout distribution={[ distributions.MIDDLE, distributions.SPACED ]} className="pagination__container">
                <RowLayout className="pagination">{!this.showAll && this._renderPages()}</RowLayout>
                <RowLayout className="actions">
                    <span class="view-all" onClick={() => this._toggleShowAll()}>
                        {this._i18n[this.showAll ? 'viewless' : 'viewmore']}
                    </span>
                    {this.enableDownload && <em class="material-icons download">get_app</em>}
                </RowLayout>
            </RowLayout>
        );
    }

    private _renderLoading = () => {
        return Array(this.limit + 1)
            .fill(0)
            .map(() => <synth-sk-loader />);
    };

    private _renderNoData = () => <synth-no-data i18n={ this._i18n }/>;

    render() {
        if (this.loading) {
            return this._renderLoading();
        }
        const showData = !this.loading && this._parsedList.length;

        return (
            <ColumnLayout className="country__container">
                {showData ? this._renderTable() : this._renderNoData()}
                {showData ? this._renderPagination() : null}
            </ColumnLayout>
        );
    }
}
