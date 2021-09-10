import { Component, Prop, h, State, Element } from '@stencil/core';
import { Icon } from '../../utils/icons';
import { Flex } from '../../utils/layout';
import state from '../../utils/store/context.store';
import { cls, getComponentLocale } from '../../utils/utils';
import en from './i18n/toaster.i18n.en.json';
import es from './i18n/toaster.i18n.es.json';
export class ToasterComponent {
  constructor() {
    /** Extra i18n translation object */
    this.i18n = {};
    this._i18n = {};
    this._toggleVisibility = (value) => () => {
      this.visible = value !== null && value !== void 0 ? value : !this.visible;
    };
    this._handleToasterTrigger = (event) => {
      this.text = event.text;
      this.icon = event.icon;
      this.ttype = event.type;
      this.visible = true;
      if (this.ttl) {
        this.currentTtl = this.ttl;
        this._countdown = setInterval(() => {
          this.currentTtl = this.currentTtl - 1;
          if (!this.currentTtl) {
            clearInterval(this._countdown);
            this.visible = false;
          }
        }, 1);
      }
    };
  }
  componentWillLoad() {
    this._initializeVariables();
    window.addEventListener(this.eventId, event => this._handleToasterTrigger(event.detail));
  }
  disconnectedCallback() {
    window.removeEventListener(this.eventId, event => this._handleToasterTrigger(event.detail));
  }
  _initializeVariables() {
    const componentI18n = getComponentLocale(this.element, { es, en });
    this._i18n = Object.assign(Object.assign({}, componentI18n), this.i18n);
    this.basePath = this.basePath || state.basePath;
  }
  render() {
    return (this.visible && (h(Flex, { row: true, middle: true, center: true, class: "toaster__wrapper" },
      h(Flex, { class: cls('toaster__container', 'animated fadeInDown', this.ttype) },
        h(Flex, { row: true, middle: true },
          h(Icon, { class: "toaster__wrapper__icon--decoration", icon: this.icon }),
          h("span", null, this.text),
          !this.ttl && (h("button", { class: "close", onClick: this._toggleVisibility(false) }, this._i18n['close']))),
        this.ttl && (h("div", { class: "ttl-bar__container" },
          h("div", { class: "ttl-bar", style: { width: `${(this.currentTtl / this.ttl) * 100}%` } })))))));
  }
  static get is() { return "glyph-toaster"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["toaster.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["toaster.css"]
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
    "eventId": {
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
        "text": "Id of event that trigger toaster show"
      },
      "attribute": "event-id",
      "reflect": false
    },
    "ttl": {
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
        "text": "Time to live for shown toaster"
      },
      "attribute": "ttl",
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
  static get states() { return {
    "text": {},
    "icon": {},
    "ttype": {},
    "visible": {},
    "currentTtl": {}
  }; }
  static get elementRef() { return "element"; }
}
