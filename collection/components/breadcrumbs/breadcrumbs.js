import { Component, Prop, h } from '@stencil/core';
import { Icon } from '../../utils/icons';
import { Flex } from '../../utils/layout';
import { cls } from '../../utils/utils';
export class BreadcrumbsComponent {
  constructor() {
    /** Crumb property. Last one is displayed as active. Each crumb triggers a callback on click */
    this.crumbs = [];
    /** Extra i18n translation object */
    this.i18n = {};
    this._handleClick = (crumb, index) => () => {
      if (!this._isLast(index) && crumb.callback) {
        crumb.callback(crumb.name);
      }
    };
    this._isLast = (index) => {
      return index === this.crumbs.length - 1;
    };
  }
  render() {
    var _a;
    return (h(Flex, { row: true, middle: true, class: "breadcrumbs__container" }, (_a = this.crumbs) === null || _a === void 0 ? void 0 : _a.map((crumb, index) => (h(Flex, { row: true, middle: true, class: cls('crumb__container', {
        active: this._isLast(index),
        clickable: !this._isLast(index) && crumb.callback,
      }) },
      h("span", { class: "crumb", onClick: this._handleClick(crumb, index) }, this.i18n[crumb.name] || crumb.name),
      !this._isLast(index) && h(Icon, { icon: "chevron_right" }))))));
  }
  static get is() { return "glyph-breadcrumbs"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./breadcrumbs.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["breadcrumbs.css"]
  }; }
  static get properties() { return {
    "crumbs": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Crumb[]",
        "resolved": "Crumb[]",
        "references": {
          "Crumb": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Crumb property. Last one is displayed as active. Each crumb triggers a callback on click"
      },
      "defaultValue": "[]"
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
    }
  }; }
}
