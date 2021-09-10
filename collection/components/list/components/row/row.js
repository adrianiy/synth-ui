import { Component, h, Host, Prop } from '@stencil/core';
import { Flex } from '../../../../utils/layout';
import { Icon } from '../../../../utils/icons';
import { Format } from '../../../../utils/format';
export class RowComponent {
  constructor() {
    /** i18n object with translations */
    this.i18n = {};
    this._renderRow = (row = this.row, child = false) => {
      if (row._loading) {
        return (h("tr", { class: this._getRowClass(child) },
          h("td", { colSpan: this.fields.length + 1, class: "loader" },
            h("glyph-sk-loader", null))));
      }
      return (h("tr", { role: "button", class: this._getRowClass(child), onClick: this.expandHandle(row) },
        h("td", null,
          h(Flex, { row: true, middle: true },
            this.expandable && !child && h("em", { class: "material-icons" }, "expand_more"),
            h("span", null, this.i18n[row.name] || row.name))),
        this.fields.map(field => this._renderCell(row[field])),
        this._renderActions(row._actions)));
    };
  }
  _getRowClass(child = false) {
    return `${this.isTotal && 'total'} ${child && 'child'} ${!this.expandable && 'child-disabled'} ${this.row._expanded && 'expanded'}`;
  }
  _renderCell(cell) {
    return (h("td", null,
      h(Format, { config: cell, decorate: true })));
  }
  _renderMultiActions(actions) {
    return (h("div", { class: "row-action__list" },
      h("h4", null, this.i18n['actions']),
      actions.map(action => (h(Flex, { row: true, middle: true, spaced: true, class: "row-action", onClick: action.action },
        h("span", null, action.title),
        h(Icon, { icon: action.icon }))))));
  }
  _renderActions(actions) {
    if (actions === null || actions === void 0 ? void 0 : actions.length) {
      return (h("div", { class: "row-action__wrapper" },
        h(Flex, { row: true, middle: true, center: true, class: "row-action__container" },
          actions.length === 1 ? (h(Icon, { class: "row-action", icon: actions[0].icon, onClick: actions[0].action })) : (h(Icon, { icon: "more_horiz" })),
          actions.length > 1 && this._renderMultiActions(actions))));
    }
  }
  _renderChildren() {
    var _a;
    return (_a = this.row._children) === null || _a === void 0 ? void 0 : _a.map((child) => this._renderRow(child, true));
  }
  render() {
    return (h(Host, { class: "row__container" },
      this._renderRow(),
      this._renderChildren()));
  }
  static get is() { return "glyph-list-row"; }
  static get originalStyleUrls() { return {
    "$": ["row.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["row.css"]
  }; }
  static get properties() { return {
    "row": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Row",
        "resolved": "Row",
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
        "text": "row data"
      }
    },
    "isTotal": {
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
        "text": "total flag"
      },
      "attribute": "is-total",
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
        "text": "expandable flag"
      },
      "attribute": "expandable",
      "reflect": false
    },
    "i18n": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "i18n object with translations"
      },
      "attribute": "i-1-8n",
      "reflect": false,
      "defaultValue": "{}"
    },
    "expandHandle": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(row: Row) => () => any",
        "resolved": "(row: Row) => () => any",
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
        "text": "expand row callback"
      }
    },
    "fields": {
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
        "text": "Render fields"
      }
    }
  }; }
}
