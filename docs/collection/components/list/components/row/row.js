var __rest = (this && this.__rest) || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
import { Component, h, Host, Prop } from '@stencil/core';
import { getGrowthColor } from '../../../../utils/color.utils';
import { distributions, RowLayout } from '../../../../utils/layout';
import { numeralFormat } from '../../../../utils/utils';
export class RowComponent {
  constructor() {
    /** i18n object with translations */
    this.i18n = {};
    this._renderRow = (row = this.row) => {
      return (h("tr", { role: "button", class: this._getRowClass(), onClick: this._expandRow },
        h("td", null,
          h(RowLayout, { distribution: distributions.MIDDLE },
            this.expandable && h("em", { class: "material-icons" }, "expand_more"),
            h("span", null, this.i18n[row.name] || row.name))),
        Object.keys(row)
          .filter(field => !field.startsWith('_') && field !== 'name')
          .map(field => this._renderCell(row[field]))));
    };
  }
  _expandRow() {
    if (this.expandable) {
      // TODO implement expand logic
    }
  }
  _getRowClass() {
    return `${this.isTotal && 'total'} ${!this.expandable && 'child-disabled'} ${this.row._expanded && 'expanded'}`;
  }
  _renderCell(cell) {
    const { value, decoration } = cell, formatArgs = __rest(cell, ["value", "decoration"]);
    const formattedValue = numeralFormat(value, ...Object.values(formatArgs));
    const color = decoration && getGrowthColor(formattedValue, decoration);
    return h("td", { class: color }, formattedValue);
  }
  _renderChildren() {
    var _a;
    return this.row._expanded && ((_a = this.row._children) === null || _a === void 0 ? void 0 : _a.map(this._renderRow));
  }
  render() {
    return (h(Host, { class: "row__container" },
      this._renderRow(),
      this._renderChildren()));
  }
  static get is() { return "synth-list-row"; }
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
            "path": "../../list.model"
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
    }
  }; }
}
