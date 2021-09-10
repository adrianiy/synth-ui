import { h, Component, Event, Prop } from '@stencil/core';
import { Flex } from '../../utils/layout';
import { cls } from '../../utils/utils';
export class PaginationComponent {
  constructor() {
    /** Pagination limit in first group */
    this.limit = undefined;
    /** Number of pages to be grouped if list is larger than limit */
    this.pageGroups = 3;
    this._changePage = (page) => () => {
      this.setPage.emit(page);
    };
    this._renderPage = (page) => {
      return (h(Flex, { row: true, middle: true, class: cls({ active: page === this.activePage }, 'pagination__container__page'), onClick: this._changePage(page) }, page + 1));
    };
    this._renderPageGroups = () => {
      const pages = [-1, 0, 1].map(i => this.activePage + i);
      return pages.map(this._renderPage);
    };
    this._getThresholds = () => {
      return {
        upperThreshold: this.pages - this.limit,
        lowerThreshold: this.limit - 1,
      };
    };
    this._getPageGroupConfig = () => {
      const { upperThreshold, lowerThreshold } = this._getThresholds();
      const upperLimit = this.limit * -1;
      const hasLimit = this.pages > this.limit + 1;
      const hasToRenderGroups = this.limit && this.activePage > lowerThreshold && this.activePage <= upperThreshold;
      return {
        initialStart: 0,
        initialEnd: this.activePage > lowerThreshold && hasLimit ? 1 : this.limit + 1,
        finalStart: this.activePage <= upperThreshold ? -1 : upperLimit,
        finalEnd: Infinity,
        hasToRenderGroups,
        hasLimit,
      };
    };
  }
  render() {
    if (isNaN(this.limit)) {
      this.limit = undefined;
    }
    const pageArray = Array(this.pages)
      .fill(0)
      .map((_, i) => i);
    const { initialStart, initialEnd, finalStart, finalEnd, hasToRenderGroups, hasLimit, } = this._getPageGroupConfig();
    return (h(Flex, { row: true, middle: true, class: "pagination__container" },
      pageArray.slice(initialStart, initialEnd).map(this._renderPage),
      hasLimit && h("em", { class: "material-icons" }, "more_horiz"),
      hasToRenderGroups && this._renderPageGroups(),
      hasToRenderGroups && h("em", { class: "material-icons" }, "more_horiz"),
      hasLimit && pageArray.slice(finalStart, finalEnd).map(this._renderPage)));
  }
  static get is() { return "glyph-pagination"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["pagination.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["pagination.css"]
  }; }
  static get properties() { return {
    "pages": {
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
        "text": "Number of pages to be rendered"
      },
      "attribute": "pages",
      "reflect": false
    },
    "activePage": {
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
        "text": "Active page"
      },
      "attribute": "active-page",
      "reflect": false
    },
    "limit": {
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
        "text": "Pagination limit in first group"
      },
      "attribute": "limit",
      "reflect": false,
      "defaultValue": "undefined"
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
    }
  }; }
  static get events() { return [{
      "method": "setPage",
      "name": "setPage",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event emitted on page click"
      },
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      }
    }]; }
}
