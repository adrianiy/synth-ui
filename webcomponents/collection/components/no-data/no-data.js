import { Component, Element, h, Prop } from '@stencil/core';
import { Icon } from '../../utils/icons';
import { Flex } from '../../utils/layout';
import { getComponentLocale } from '../../utils/utils';
import { NoDataType } from './no-data.model';
import es from './i18n/no-data.i18n.es.json';
import en from './i18n/no-data.i18n.en.json';
import state from '../../utils/store/context.store';
export class NoDataComponent {
  constructor() {
    /** Render mode [ 'simple' | 'complex' ] */
    this.mode = NoDataType.Simple;
    /** Extra i18n translation object */
    this.i18n = {};
  }
  componentWillLoad() {
    const componentI18n = getComponentLocale(this.element, { es, en });
    this._i18n = Object.assign(Object.assign({}, componentI18n), this.i18n);
    this.basePath = this.basePath || state.basePath;
  }
  _simpleRender() {
    return (h(Flex, { row: true, middle: true, class: `no-data ${this.mode}` },
      h(Icon, { icon: "error_outline" }),
      this.text || this._i18n.noData));
  }
  _advancedRender() {
    return (h(Flex, { center: true, class: `no-data ${this.mode}` },
      h(Icon, { outlined: true, icon: "report_problem" }),
      h("h3", null, this.text),
      h("p", null, this.bottomText)));
  }
  render() {
    return this.mode === NoDataType.Simple ? this._simpleRender() : this._advancedRender();
  }
  static get is() { return "glyph-no-data"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["no-data.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["no-data.css"]
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
    }
  }; }
  static get elementRef() { return "element"; }
}
