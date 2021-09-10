import { Component, Host, Element, h, Prop, State, Watch, Event } from '@stencil/core';
import { filterEmptyRows, parseExcelData, sortList } from './utils/list';
import { cls, getComponentLocale } from '../../utils/utils';
import { Flex } from '../../utils/layout';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import { Icon } from '../../utils/icons';
import state from '../../utils/store/context.store';
import en from './i18n/list.i18n.en.json';
import es from './i18n/list.i18n.es.json';
const LIMIT = 16;
const RESPONSIVE_LIMIT = 10;
export class ListComponent {
  constructor() {
    /** Extra i18n translation object */
    this.i18n = {};
    /** Expandable flag */
    this.expandable = false;
    /** Pagination limit */
    this.paginationLimit = 5;
    /** Number of pages to be grouped if list is larger than limit */
    this.pageGroups = 3;
    /** Enable download xlsx file */
    this.enableDownload = false;
    /** Force component update if flag is true  */
    this.update = false;
    /** Sort value */
    this.sort = 'default';
    /** Current page */
    this.currentPage = 0;
    /** Show all flag */
    this.showAll = false;
    /** Parsed list */
    this.parsedList = [];
    this._fields = [];
    this._isMobile = false;
    this._i18n = {};
    this._toggleShowAll = () => () => {
      this.showAll = !this.showAll;
    };
    this._changePage = ({ detail: page }) => {
      this.currentPage = page;
    };
    this._changeSort = (sort, key) => () => {
      if (this.sort === sort) {
        this.sort = 'default';
        this.sortField = undefined;
      }
      else {
        this.sort = sort;
        this.sortField = key;
      }
      this._parseData();
    };
    this._downloadExcel = () => {
      const workbook = new Workbook();
      const workSheet = workbook.addWorksheet('countries');
      const header = [''].concat(this._fields);
      const excelData = parseExcelData(this.parsedList, this._fields);
      workSheet.addRow(header);
      excelData.forEach(row => workSheet.addRow(row));
      workbook.xlsx.writeBuffer().then(data => {
        const blob = new Blob([data], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheethtml.sheet',
        });
        fs.saveAs(blob, `download-${new Date().toISOString()}.xlsx`);
      });
    };
    this._expandRow = (row) => () => {
      if (this.expandable) {
        const { _isTotal, _expanded, _originalIndex } = row;
        this.parsedList = this.parsedList.map(row => {
          if (_isTotal) {
            return Object.assign(Object.assign({}, row), { _expanded: !_expanded });
          }
          else if (row._originalIndex === _originalIndex) {
            return Object.assign(Object.assign({}, row), { _expanded: !_expanded });
          }
          else {
            return row;
          }
        });
        this.expandRow.emit({ row });
      }
    };
    this._renderTable = () => (h("table", null,
      h("thead", null,
        h("th", null),
        this._fields.map(field => {
          const isDesc = this.sort === 'desc';
          const isSortField = this.sortField === field;
          return (h("th", null,
            h(Flex, { row: true, right: true, class: "nowrap" },
              this._i18n[field] || field,
              h(Icon, { button: true, class: cls({ active: !isDesc && isSortField }), icon: "arrow_upward", onClick: this._changeSort('asc', field) }),
              h(Icon, { button: true, class: cls({ active: isDesc && isSortField }), icon: "arrow_downward", onClick: this._changeSort('desc', field) }))));
        })),
      this.parsedList[0]._isTotal && (h("glyph-list-row", { fields: this._fields, row: this.parsedList[0], isTotal: true, expandable: this.expandable, i18n: this._i18n, expandHandle: this._expandRow })),
      this.parsedList
        .slice(this.parsedList[0]._isTotal ? 1 : 0)
        .slice(this.showAll ? 0 : this.currentPage * this.limit, this.showAll ? undefined : (this.currentPage + 1) * this.limit)
        .map(row => (h("glyph-list-row", { fields: this._fields, row: row, isTotal: row._isTotal, expandable: this.expandable, i18n: this._i18n, expandHandle: this._expandRow })))));
    this._renderLoading = () => {
      return (h(Host, null, Array(this.limit + 1)
        .fill(0)
        .map(() => (h("glyph-sk-loader", null)))));
    };
    this._renderNoData = () => h("glyph-no-data", { i18n: this._i18n });
  }
  onDataChange() {
    this._parseData();
  }
  componentWillLoad() {
    this._initializeVariables();
    this._parseData();
  }
  _initializeVariables() {
    const componentI18n = getComponentLocale(this.element, { es, en });
    this._i18n = Object.assign(Object.assign({}, componentI18n), this.i18n);
    this._isMobile = window.innerWidth < 1050;
    this.basePath = this.basePath || state.basePath;
    if (!this.limit) {
      this.limit = this._isMobile ? RESPONSIVE_LIMIT : LIMIT;
    }
  }
  _parseData() {
    if (this.data.length) {
      this._fields = Object.keys(this.data[0])
        .filter(key => !key.startsWith('_') && key !== 'name')
        .map(key => key);
      this.parsedList = this._setListConfig();
      this._pages = Math.round(this.parsedList.length / this.limit);
    }
  }
  _setListConfig() {
    return this._sortListData(this._filterListData(), this.sortField);
  }
  _filterListData() {
    this._setOriginalIndex();
    this._setCurrentStateFields();
    if (this.filterFields != undefined) {
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
  _setCurrentStateFields() {
    this.data.forEach(row => {
      const stateRow = this.parsedList[row._originalIndex];
      row['_expanded'] = stateRow === null || stateRow === void 0 ? void 0 : stateRow._expanded;
    });
  }
  _renderPages() {
    return (!this.showAll && (h("glyph-pagination", { pages: this._pages, activePage: this.currentPage, limit: this.paginationLimit, pageGroups: this.pageGroups, onSetPage: this._changePage })));
  }
  _renderPagination() {
    return (h(Flex, { row: true, middle: true, spaced: true, class: "pagination__container" },
      h("div", null, this._renderPages()),
      h(Flex, { row: true, middle: true, class: "actions" },
        h("span", { class: "view-all", onClick: this._toggleShowAll(), role: "button" }, this._i18n[this.showAll ? 'viewless' : 'viewmore']),
        this.enableDownload && (h(Icon, { class: "download", button: true, icon: "get_app", onClick: this._downloadExcel })))));
  }
  render() {
    this.update = false;
    if (this.loading) {
      return this._renderLoading();
    }
    const showData = !this.loading && this.parsedList.length;
    return (h(Flex, { class: "country__container" },
      showData ? this._renderTable() : this._renderNoData(),
      showData ? this._renderPagination() : null));
  }
  static get is() { return "glyph-list"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["list.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["list.css"]
  }; }
  static get properties() { return {
    "basePath": {
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
        "text": "Base path to get assets"
      },
      "attribute": "base-path",
      "reflect": false
    },
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
            "path": "glyph-core-poc"
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
    "locale": {
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
        "text": "**optional** force locale change if html lang is not interpreted"
      },
      "attribute": "locale",
      "reflect": false
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
      "reflect": false,
      "defaultValue": "false"
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
    "paginationLimit": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Pagination limit"
      },
      "attribute": "pagination-limit",
      "reflect": false,
      "defaultValue": "5"
    },
    "pageGroups": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Number of pages to be grouped if list is larger than limit"
      },
      "attribute": "page-groups",
      "reflect": false,
      "defaultValue": "3"
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
    "showAll": {},
    "parsedList": {}
  }; }
  static get events() { return [{
      "method": "expandRow",
      "name": "expandRow",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Expand row event"
      },
      "complexType": {
        "original": "Row",
        "resolved": "Row",
        "references": {
          "Row": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      }
    }]; }
  static get elementRef() { return "element"; }
  static get watchers() { return [{
      "propName": "data",
      "methodName": "onDataChange"
    }]; }
}
