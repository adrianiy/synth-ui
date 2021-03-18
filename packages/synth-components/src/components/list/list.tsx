import { Component, Element, h, Prop, State } from '@stencil/core';
import { BaseRow, FieldsConfig, Row } from './list.model';
import { capitalize, filterEmptyRows, sortList, sortWorldWideCountries } from './utils/list';
import { getLocaleComponentStrings, numeralFormat } from '../../utils/utils';
import { ColumnLayout, distributions, RowLayout } from '../../utils/layout';
import { DecorationType } from '../../utils/color.utils';

const LIMIT = 16;
const RESPONSIVE_LIMIT = 10;

@Component({
    tag: 'synth-list',
    styleUrl: 'list.scss',
    shadow: true,
})
export class ListComponent {
    /* loading state */
    @Prop() loading: boolean;
    /* component title */
    @Prop() headerTitle: string;
    /* component data */
    @Prop() data: Row[];
    /* these fields should not be empty if this variable is informed */
    @Prop() filterFields: string[];
    /* show decimals flag */
    @Prop() decimals: boolean;
    /* expandable flag */
    @Prop() expandable: boolean;
    /* list rows limit */
    @Prop({ mutable: true }) limit: number = LIMIT;
    /* fields configuration */
    @Prop() fieldsConfig: FieldsConfig[];
    /* decoration type for growths */
    @Prop() decorationType: DecorationType = DecorationType.OnlyGreen;
    /* enable download xlsx file */
    @Prop() enableDownload: boolean = false;
    /* force component update if flag is true */
    @Prop({ mutable: true }) update: boolean = false;
    /* Element reference */
    @Element() element: HTMLElement;
    /* Sort value */
    @State() sort = 'default';
    /* Sort field */
    @State() sortField: number;
    /* current page */
    @State() currentPage: number = 0;
    /* show all flag */
    @State() showAll: boolean = false;

    private _parsedList: Row[] = [];
    private _isMobile = false;
    private _pages = [];
    private _selectedCountryIdx = undefined;
    private _i18n: any;

    async componentWillLoad() {
        await this._initializeVariables();
    }

    componentWillRender() {
        this._parseData();
    }

    private async _initializeVariables() {
        this._i18n = await getLocaleComponentStrings([ 'common', 'countries' ], this.element);
        this._isMobile = window.innerWidth < 1050;

        if (this._isMobile) {
            this.limit = RESPONSIVE_LIMIT;
        }
    }

    private _toggleShowAll() {
        this.showAll = !this.showAll;
    }

    private _changePage(page: number) {
        this.currentPage = page;
    }

    private _changeSort(sort: string, index: number) {
        this.sort = this.sort === sort ? 'default' : sort;

        this.sortField = index;
        this._parseData();
    }

    private _parseData() {
        this._parsedList = this._setListConfig();
        this._pages = Array(Math.round(this._parsedList.length / this.limit)).fill(0);
    }

    private _setListConfig() {
        const defaultOrderField = this.fieldsConfig[0].field();

        return this._sortListData(this._filterListData(), defaultOrderField).map(this._configRow);
    }

    private _filterListData() {
        if (this.filterFields) {
            this._setOriginalIndex();

            return filterEmptyRows(this.data, this.filterFields);
        } else {
            return this.data;
        }
    }

    private _sortListData(list: any, field: string | number) {
        const customSort = this.sort !== 'default';
        let sortedList = sortWorldWideCountries(list, field);

        if (customSort) {
            const sortFieldConfig = this.fieldsConfig[this.sortField];
            const sortField = `${sortFieldConfig.preffix || ''}${sortFieldConfig.field()}${sortFieldConfig.suffix ||
                ''}`;
            sortedList = [ sortedList[0] ].concat(sortList(sortedList.slice(1), sortField, this.sort));
        }
        return sortedList;
    }

    private _setOriginalIndex() {
        this.data.forEach((row, index) => (row['_originalIndex'] = index));
    }

    private _configRow = (row: Row) => {
        const isExpanded = row._originalIndex === this._selectedCountryIdx || this._selectedCountryIdx === 0;
        const newRow = this._configFields(row);

        /* istanbul ignore else */
        if (this.expandable) {
            newRow['_expanded'] = isExpanded;
            newRow['children'] = this._parseListChildren(row['children']);
        }

        return newRow;
    };

    private _configFields(row: any) {
        const newRow = this._initializeRow(row);

        this.fieldsConfig.forEach(field => {
            const value = this._getValue(row, field);
            const fieldTitle = field.title();

            newRow[fieldTitle] = value;
        });

        return newRow;
    }

    private _initializeRow(row: Row | BaseRow) {
        const newRow = row;
        newRow['name'] = capitalize(row['name']);

        return newRow;
    }

    private _parseListChildren(children: BaseRow[]) {
        if (children) {
            return children.map(row => this._configFields(row));
        } else {
            return Array(3)
                .fill(0)
                .map(() => ({ _loading: true }));
        }
    }

    private _getValue(row: Row | BaseRow, field: FieldsConfig) {
        const isPercentage = field.format.includes('0,0.0 %');
        const preffix = field.preffix || '';
        const suffix = field.suffix || '';
        const fieldName = field.field();
        const shouldShowDecimals = !isPercentage || this.decimals;
        const format = shouldShowDecimals ? field.format : '0,0 %';

        const value = row[`${preffix}${fieldName}${suffix}`];
        let transformedValue = numeralFormat(value, format, field.sign);

        if (isPercentage && shouldShowDecimals) {
            transformedValue = transformedValue.split('.').join(',');
        }

        return transformedValue;
    }

    private _renderTable = () => (
        <table>
            <thead>
                <th />
                {this.fieldsConfig.map((field, i) => {
                    const title = field.title();
                    const isDesc = this.sort === 'desc';
                    const isSortField = this.sortField === i;

                    return (
                        <th>
                            <RowLayout className="nowrap" distribution={distributions.RIGHT}>
                                {this._i18n[title] || title}
                                <em
                                    role="button"
                                    class={`material-icons ${!isDesc && isSortField && 'active'}`}
                                    onClick={() => this._changeSort('asc', i)}
                                >
                                    arrow_upward
                                </em>
                                <em
                                    role="button"
                                    class={`material-icons ${isDesc && isSortField && 'active'}`}
                                    onClick={() => this._changeSort('desc', i)}
                                >
                                    arrow_downward
                                </em>
                            </RowLayout>
                        </th>
                    );
                })}
            </thead>
            {this._parsedList[0]._isTotal && (
                <synth-list-row
                    row={this._parsedList[0]}
                    fieldsConfig={this.fieldsConfig}
                    isTotal
                    decorationType={this.decorationType}
                    expandable={this.expandable}
                    i18n={this._i18n}
                />
            )}
            {this._parsedList
                .slice(this._parsedList[0]._isTotal ? 1 : 0)
                .slice(
                    this.showAll ? 0 : this.currentPage * this.limit,
                    this.showAll ? undefined : (this.currentPage + 1) * this.limit,
                )
                .map(row => (
                    <synth-list-row
                        row={row}
                        fieldsConfig={this.fieldsConfig}
                        isTotal={row._isTotal}
                        decorationType={this.decorationType}
                        expandable={this.expandable}
                        i18n={this._i18n}
                    />
                ))}
        </table>
    );

    private _renderPages = () => {
        return this._pages.map((_, index) => (
            <span
                role="button"
                class={`pagination__page ${this.currentPage === index && 'active'}`}
                onClick={() => this._changePage(index)}
            >
                {index + 1}
            </span>
        ));
    };

    private _renderPagination = () => {
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
    };

    private _renderNoData = () => <synth-no-data />;

    render() {
        const showData = !this.loading && this._parsedList.length;

        return (
            <ColumnLayout className="country__container">
                <h2>{this._i18n[this.headerTitle] || this.headerTitle}</h2>
                {showData ? this._renderTable() : this._renderNoData()}
                {showData && this._renderPagination()}
            </ColumnLayout>
        );
    }
}
