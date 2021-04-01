import { Component, Element, h, Prop } from '@stencil/core';
import { ColumnLayout, distributions, RowLayout } from '../../utils/layout';
import { getLocaleComponentStrings } from '../../utils/utils';
import { NoDataType } from './no-data.model';
export class NoDataComponent {
  constructor() {
    /** Render mode [ 'simple' | 'complex' ] */
    this.mode = NoDataType.Simple;
    /** Extra i18n translation object */
    this.i18n = {};
  }
  async componentWillLoad() {
    const componentI18n = await getLocaleComponentStrings(['no-data'], this.element);
    this._i18n = Object.assign(Object.assign({}, componentI18n), this.i18n);
  }
  _simpleRender() {
    return (h(RowLayout, { className: `no-data ${this.mode}`, distribution: [distributions.MIDDLE] },
      h("em", { class: "material-icons" }, "error_outline"),
      this._i18n.noData));
  }
  _advancedRender() {
    return (h(ColumnLayout, { className: `no-data ${this.mode}`, distribution: [distributions.CENTER] },
      h("em", { class: "material-icons-outlined" }, "report_problem"),
      h("h3", null, this.text),
      h("p", null, this.bottomText)));
  }
  render() {
    return this.mode === NoDataType.Simple ? this._simpleRender() : this._advancedRender();
  }
  static get is() { return "synth-no-data"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["no-data.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["no-data.css"]
  }; }
  static get properties() { return {
    "mode": {
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
        "text": "Render mode [ 'simple' | 'complex' ]"
      },
      "attribute": "mode",
      "reflect": false,
      "defaultValue": "NoDataType.Simple"
    },
    "text": {
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
        "text": "Top text only applies if render mode is advanced"
      },
      "attribute": "text",
      "reflect": false
    },
    "bottomText": {
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
        "text": "Bottom text. only applies if render mode is advanced"
      },
      "attribute": "bottom-text",
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
    }
  }; }
  static get elementRef() { return "element"; }
}
