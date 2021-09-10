import { Component, Element, Prop, State, h, Listen } from '@stencil/core';
import { Icon } from '../../utils/icons';
import { Flex } from '../../utils/layout';
import state from '../../utils/store/context.store';
import { cls, getComponentLocale } from '../../utils/utils';
import en from './i18n/share-menu.i18n.en.json';
import es from './i18n/share-menu.i18n.es.json';
export class ShareMenuComponent {
  constructor() {
    /** Extra i18n translation object */
    this.i18n = {};
    /** share filters flag */
    this.shareFilters = false;
    this._toggleShare = () => {
      this.shareFilters = !this.shareFilters;
    };
    this._handleCopy = () => {
      const copylistener = (e) => {
        e.clipboardData.setData('text/plain', location.href);
        e.preventDefault();
      };
      document.addEventListener('copy', copylistener);
      let success = 0;
      try {
        document.execCommand('copy');
        success = 1;
      }
      catch (err) {
        success = 0;
      }
      finally {
        document.removeEventListener('copy', copylistener);
      }
      window.dispatchEvent(new CustomEvent('copyLink', {
        detail: {
          text: this._i18n[success ? 'copyDone' : 'copyFail'],
          icon: success ? 'checkmark' : 'close',
          type: success ? "success" /* succes */ : "fail" /* fail */,
        },
      }));
    };
  }
  clickOutside(event) {
    if (!event.path.some((el) => { var _a; return (_a = el.closest) === null || _a === void 0 ? void 0 : _a.call(el, '.share-menu__container'); })) {
      this.outsideCallback();
    }
  }
  componentWillLoad() {
    this._initializeVariables();
  }
  _initializeVariables() {
    const componentI18n = getComponentLocale(this.element, { es, en });
    this._i18n = Object.assign(Object.assign({}, componentI18n), this.i18n);
    this.interface = this.interface || state.interface;
    this.basePath = this.basePath || state.basePath;
  }
  render() {
    return (h(Flex, { class: cls('share-menu__container', this.interface) },
      h("span", { class: "url" }, location.href),
      h("span", { class: "caption" }, [this.appTitle, this.appSubtitle].filter(chunk => chunk).join(' - ')),
      h(Flex, { row: true, spaced: true, class: "button__container" },
        h(Flex, { row: true, middle: true, class: "link", onClick: this._handleCopy },
          h(Icon, { icon: "link" }),
          h("span", null, this._i18n['copy'])),
        h(Flex, { row: true, middle: true },
          h("span", null, this._i18n['shareFilters']),
          h("glyph-toggler", { active: this.shareFilters, interface: this.interface, onClick: this._toggleShare }))),
      h("glyph-toaster", { basePath: this.basePath, eventId: "copyLink", ttl: 1000 })));
  }
  static get is() { return "glyph-share-menu"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["share-menu.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["share-menu.css"]
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
    "appTitle": {
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
        "text": "Application title"
      },
      "attribute": "app-title",
      "reflect": false
    },
    "appSubtitle": {
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
        "text": "Application subtitle"
      },
      "attribute": "app-subtitle",
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
    "interface": {
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
        "text": "Interface type ['MODERN', 'CLASSIC']"
      },
      "attribute": "interface",
      "reflect": false
    },
    "outsideCallback": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "() => void",
        "resolved": "() => void",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Event triggered when user clicks outside component container"
      }
    }
  }; }
  static get states() { return {
    "shareFilters": {}
  }; }
  static get elementRef() { return "element"; }
  static get listeners() { return [{
      "name": "click",
      "method": "clickOutside",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
