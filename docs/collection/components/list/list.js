import { Component, Element, h, Prop, State } from '@stencil/core';
import { filterEmptyRows, sortList } from './utils/list';
import { getLocaleComponentStrings } from '../../utils/utils';
import { ColumnLayout, distributions, RowLayout } from '../../utils/layout';
const LIMIT = 16;
const RESPONSIVE_LIMIT = 10;
export class ListComponent {
  constructor() {
    /** Extra i18n translation object */
    this.i18n = {};
    /** Enable download xlsx file */
    this.enableDownload = false;
    /** Force component update if flag is true  */
    this.update = false;
    /* Sort value */
    this.sort = 'default';
    /* current page */
    this.currentPage = 0;
    /* show all flag */
    this.showAll = false;
    this._fields = [];
    this._parsedList = [];
    this._isMobile = false;
    this._pages = [];
    this._renderTable = () => (h("table", null,
      h("thead", null,
        h("th", null),
        this._fields.map(field => {
          const isDesc = this.sort === 'desc';
          const isSortField = this.sortField === field;
          return (h("th", null,
            h(RowLayout, { className: "nowrap", distribution: distributions.RIGHT },
              this._i18n[field] || field,
              h("em", { role: "button", class: `material-icons ${!isDesc && isSortField && 'active'}`, onClick: () => this._changeSort('asc', field) }, "arrow_upward"),
              h("em", { role: "button", class: `material-icons ${isDesc && isSortField && 'active'}`, onClick: () => this._changeSort('desc', field) }, "arrow_downward"))));
        })),
      this._parsedList[0]._isTotal && (h("synth-list-row", { row: this._parsedList[0], isTotal: true, expandable: this.expandable, i18n: this._i18n })),
      this._parsedList
        .slice(this._parsedList[0]._isTotal ? 1 : 0)
        .slice(this.showAll ? 0 : this.currentPage * this.limit, this.showAll ? undefined : (this.currentPage + 1) * this.limit)
        .map(row => (h("synth-list-row", { row: row, isTotal: row._isTotal, expandable: this.expandable, i18n: this._i18n })))));
    this._renderLoading = () => {
      return Array(this.limit + 1)
        .fill(0)
        .map(() => h("synth-sk-loader", null));
    };
    this._renderNoData = () => h("synth-no-data", { i18n: this._i18n });
  }
  async componentWillLoad() {
    await this._initializeVariables();
  }
  componentWillRender() {
    var _a;
    if ((_a = this.data) === null || _a === void 0 ? void 0 : _a.length) {
      this._fields = Object.keys(this.data[0])
        .filter(key => !key.startsWith('_') && key !== 'name')
        .map(key => key);
    }
    this._parseData();
  }
  async _initializeVariables() {
    const componentI18n = await getLocaleComponentStrings(['list', 'no-data'], this.element);
    this._i18n = Object.assign(Object.assign({}, componentI18n), this.i18n);
    this._isMobile = window.innerWidth < 1050;
    if (!this.limit) {
      this.limit = this._isMobile ? RESPONSIVE_LIMIT : LIMIT;
    }
  }
  _toggleShowAll() {
    this.showAll = !this.showAll;
  }
  _changePage(page) {
    this.currentPage = page;
  }
  _changeSort(sort, key) {
    this.sort = this.sort === sort ? 'default' : sort;
    this.sortField = key;
    this._parseData();
  }
  _parseData() {
    this._parsedList = this._setListConfig();
    this._pages = Array(Math.round(this._parsedList.length / this.limit)).fill(0);
  }
  _setListConfig() {
    return this._sortListData(this._filterListData(), this.sortField);
  }
  _filterListData() {
    if (this.filterFields) {
      this._setOriginalIndex();
      return filterEmptyRows(this.data, this.filterFields);
    }
    else {
      return this.data;
    }
  }
  _sortListData(list, field) {
    const customSort = this.sort !== 'default';
    if (customSort) {
      list = [list[0]].concat(sortList(list.slice(1), field, this.sort));
    }
    return list;
  }
  _setOriginalIndex() {
    this.data.forEach((row, index) => (row['_originalIndex'] = index));
  }
  _renderPages() {
    return this._pages.map((_, index) => (h("span", { role: "button", class: `pagination__page ${this.currentPage === index && 'active'}`, onClick: () => this._changePage(index) }, index + 1)));
  }
  _renderPagination() {
    return (h(RowLayout, { distribution: [distributions.MIDDLE, distributions.SPACED], className: "pagination__container" },
      h(RowLayout, { className: "pagination" }, !this.showAll && this._renderPages()),
      h(RowLayout, { className: "actions" },
        h("span", { class: "view-all", onClick: () => this._toggleShowAll() }, this._i18n[this.showAll ? 'viewless' : 'viewmore']),
        this.enableDownload && h("em", { class: "material-icons download" }, "get_app"))));
  }
  render() {
    if (this.loading) {
      return this._renderLoading();
    }
    const showData = !this.loading && this._parsedList.length;
    return (h(ColumnLayout, { className: "country__container" },
      showData ? this._renderTable() : this._renderNoData(),
      showData ? this._renderPagination() : null));
  }
  static get is() { return "synth-list"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["list.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["list.css"]
  }; }
  static get properties() { return {
    "loading": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Loading state. If true will render skeleton loader"
      },
      "attribute": "loading",
      "reflect": false
    },
    "data": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Row[]",
        "resolved": "Row[]",
        "references": {
          "Row": {
            "location": "import",
            "path": "./list.model"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Component data. Fields preffixed with `_` will not render"
      }
    },
    "filterFields": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "string[]",
        "resolved": "string[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Rows that has no data on these fields will not render"
      }
    },
    "defaultSortField": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Default sorting field, it could be a private or public field"
      },
      "attribute": "default-sort-field",
      "reflect": false
    },
    "i18n": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "{ [key: string]: string }",
        "resolved": "{ [key: string]: string; }",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Extra i18n translation object"
      },
      "defaultValue": "{}"
    },
    "decimals": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Show decimals flag"
      },
      "attribute": "decimals",
      "reflect": false
    },
    "expandable": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Expandable flag"
      },
      "attribute": "expandable",
      "reflect": false
    },
    "limit": {
      "type": "number",
      "mutable": true,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Rows limit. If not set will take `16` as default value or `10` in small screens"
      },
      "attribute": "limit",
      "reflect": false
    },
    "enableDownload": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Enable download xlsx file"
      },
      "attribute": "enable-download",
      "reflect": false,
      "defaultValue": "false"
    },
    "update": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Force component update if flag is true"
      },
      "attribute": "update",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "sort": {},
    "sortField": {},
    "currentPage": {},
    "showAll": {}
  }; }
  static get elementRef() { return "element"; }
}
