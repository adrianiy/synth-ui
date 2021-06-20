import { Component, Host, Element, h, Prop, State, Watch, Event, EventEmitter } from '@stencil/core';
import { filterEmptyRows, parseExcelData, sortList } from './utils/list';
import { cls, getLocaleComponentStrings } from '../../utils/utils';
import { Flex } from '../../utils/layout';
import { Workbook } from 'exceljs';
import { Row } from 'glyph-core';
import * as fs from 'file-saver';
import { Icon } from '../../utils/icons';

const LIMIT = 16;
const RESPONSIVE_LIMIT = 10;

@Component({
    tag: 'glyph-list',
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
    @Prop() expandable: boolean = false;
    /** Rows limit. If not set will take `16` as default value or `10` in small screens */
    @Prop({ mutable: true }) limit: number;
    /** Pagination limit */
    @Prop() paginationLimit: number = 5;
    /** Number of pages to be grouped if list is larger than limit */
    @Prop() pageGroups: number = 3;
    /** Enable download xlsx file */
    @Prop() enableDownload: boolean = false;
    /** Force component update if flag is true  */
    @Prop({ mutable: true }) update: boolean = false;
    /** Element reference */
    @Element() element: HTMLGlyphListElement;
    /** Sort value */
    @State() sort = 'default';
    /** Sort field */
    @State() sortField: string;
    /** Current page */
    @State() currentPage: number = 0;
    /** Show all flag */
    @State() showAll: boolean = false;
    /** Parsed list */
    @State() parsedList: Row[] = [];
    /** Expand row event */
    @Event() expandRow: EventEmitter<Row>;

    private _fields = [];
    private _isMobile = false;
    private _pages: number;
    private _i18n: { [key: string]: string } = {};

    @Watch('data')
    onDataChange() {
        this._parseData();
    }

    async componentWillLoad() {
        await this._initializeVariables();
        this._parseData();
    }

    private async _initializeVariables() {
        const componentI18n = await getLocaleComponentStrings([ 'list', 'no-data' ], this.element);
        this._i18n = { ...componentI18n, ...this.i18n };
        this._isMobile = window.innerWidth < 1050;

        if (!this.limit) {
            this.limit = this._isMobile ? RESPONSIVE_LIMIT : LIMIT;
        }
    }

    private _toggleShowAll = () => () => {
        this.showAll = !this.showAll;
    };

    private _changePage = ({ detail: page }) => {
        this.currentPage = page;
    };

    private _changeSort = (sort: string, key: string) => () => {
        if (this.sort === sort) {
            this.sort = 'default';
            this.sortField = undefined;
        } else {
            this.sort = sort;
            this.sortField = key;
        }
        this._parseData();
    };

    private _downloadExcel = () => {
        const workbook = new Workbook();
        const workSheet = workbook.addWorksheet('countries');
        const header = [ '' ].concat(this._fields);
        const excelData = parseExcelData(this.parsedList, this._fields);
        workSheet.addRow(header);
        excelData.forEach(row => workSheet.addRow(row));
        workbook.xlsx.writeBuffer().then(data => {
            const blob = new Blob([ data ], {
                type: 'application/vnd.openxmlformats-officedocument.spreadsheethtml.sheet',
            });
            fs.saveAs(blob, `download-${new Date().toISOString()}.xlsx`);
        });
    };

    private _expandRow = (row: Row) => () => {
        if (this.expandable) {
            const { _isTotal, _expanded, _originalIndex } = row;
            this.parsedList = this.parsedList.map(row => {
                if (_isTotal) {
                    return { ...row, _expanded: !_expanded };
                } else if (row._originalIndex === _originalIndex) {
                    return { ...row, _expanded: !_expanded };
                } else {
                    return row;
                }
            });

            this.expandRow.emit({ row });
        }
    };

    private _parseData() {
        if (this.data.length) {
            this._fields = Object.keys(this.data[0])
                .filter(key => !key.startsWith('_') && key !== 'name')
                .map(key => key);

            this.parsedList = this._setListConfig();
            this._pages = Math.round(this.parsedList.length / this.limit);
        }
    }

    private _setListConfig() {
        return this._sortListData(this._filterListData(), this.sortField);
    }

    private _filterListData() {
        this._setOriginalIndex();
        this._setCurrentStateFields();

        if (this.filterFields != undefined) {
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

    private _setCurrentStateFields() {
        this.data.forEach(row => {
            const stateRow = this.parsedList[row._originalIndex];
            row['_expanded'] = stateRow?._expanded;
        });
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
                            <Flex row right class="nowrap">
                                {this._i18n[field] || field}
                                <Icon
                                    button
                                    class={cls({ active: !isDesc && isSortField })}
                                    icon="arrow_upward"
                                    onClick={this._changeSort('asc', field)}
                                />
                                <Icon
                                    button
                                    class={cls({ active: isDesc && isSortField })}
                                    icon="arrow_downward"
                                    onClick={this._changeSort('desc', field)}
                                />
                            </Flex>
                        </th>
                    );
                })}
            </thead>
            {this.parsedList[0]._isTotal && (
                <glyph-list-row
                    fields={this._fields}
                    row={this.parsedList[0]}
                    isTotal
                    expandable={this.expandable}
                    i18n={this._i18n}
                    expandHandle={this._expandRow}
                />
            )}
            {this.parsedList
                .slice(this.parsedList[0]._isTotal ? 1 : 0)
                .slice(
                    this.showAll ? 0 : this.currentPage * this.limit,
                    this.showAll ? undefined : (this.currentPage + 1) * this.limit,
                )
                .map(row => (
                    <glyph-list-row
                        fields={this._fields}
                        row={row}
                        isTotal={row._isTotal}
                        expandable={this.expandable}
                        i18n={this._i18n}
                        expandHandle={this._expandRow}
                    />
                ))}
        </table>
    );

    private _renderPages() {
        return (
            !this.showAll && (
                <glyph-pagination
                    pages={this._pages}
                    activePage={this.currentPage}
                    limit={this.paginationLimit}
                    pageGroups={this.pageGroups}
                    onSetPage={this._changePage}
                />
            )
        );
    }

    private _renderPagination() {
        return (
            <Flex row middle spaced class="pagination__container">
                <div>{this._renderPages()}</div>
                <Flex row middle class="actions">
                    <span class="view-all" onClick={this._toggleShowAll()} role="button">
                        {this._i18n[this.showAll ? 'viewless' : 'viewmore']}
                    </span>
                    {this.enableDownload && (
                        <Icon class="download" button icon="get_app" onClick={this._downloadExcel} />
                    )}
                </Flex>
            </Flex>
        );
    }

    private _renderLoading = () => {
        return (
            <Host>
                {Array(this.limit + 1)
                    .fill(0)
                    .map(() => (
                        <glyph-sk-loader />
                    ))}
            </Host>
        );
    };

    private _renderNoData = () => <glyph-no-data i18n={this._i18n} />;

    render() {
        this.update = false;
        if (this.loading) {
            return this._renderLoading();
        }
        const showData = !this.loading && this.parsedList.length;

        return (
            <Flex class="country__container">
                {showData ? this._renderTable() : this._renderNoData()}
                {showData ? this._renderPagination() : null}
            </Flex>
        );
    }
}
