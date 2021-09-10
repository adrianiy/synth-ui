import { Component, Element, Listen, Prop, h, State } from '@stencil/core';
import { Icon } from '../../utils/icons';
import { Flex } from '../../utils/layout';
import { cls, getComponentLocale } from '../../utils/utils';
import es from './i18n/app-menu.i18n.es.json';
import en from './i18n/app-menu.i18n.en.json';
import state from '../../utils/store/context.store';
export class AppMenuComponent {
  constructor() {
    /** Flag to activate search input */
    this.hasSearch = true;
    /** Extra i18n translation object */
    this.i18n = {};
    this._navigateTo = (option) => () => {
      option.navigation();
    };
    this._handleInputChange = (event) => {
      this.searchValue = event.target.value;
    };
    this._handleKeyUp = (event) => {
      const isEnter = event.key === 'Enter';
      if (isEnter) {
        const visibleOptions = this.apps.filter(option => this._inSearch(option));
        if (visibleOptions.length === 1) {
          this._navigateTo(visibleOptions[0])();
        }
      }
    };
    this._renderApps = () => {
      return (h("glyph-scroll", { hideScrollBar: true, height: 432, scrollSpeed: 0.2, containerClass: "app-menu__apps" }, this.apps
        .filter((app) => this._inSearch(app))
        .sort((a, b) => a.order - b.order)
        .map((app) => (h(Flex, { center: true, middle: true, class: cls('app animated fadeInUp', { active: app.active }), onClick: this._navigateTo(app) },
        h(Icon, { icon: app.icon }),
        h("span", { title: this._i18n[app.name] || app.name }, this._i18n[app.name] || app.name))))));
    };
    this._renderSearch = () => {
      return (this.hasSearch && (h(Flex, { row: true, class: "app-menu__header__search" },
        h(Icon, { icon: "search" }),
        h("input", { placeholder: this._i18n['searchPlaceholder'], type: "text", onKeyUp: this._handleKeyUp, onInput: this._handleInputChange }))));
    };
  }
  clickOutside(event) {
    if (!event.path.some((el) => { var _a; return (_a = el.closest) === null || _a === void 0 ? void 0 : _a.call(el, '.app-menu__container'); })) {
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
  _inSearch({ name }) {
    return !this.searchValue || name.toLowerCase().includes(this.searchValue.toLowerCase());
  }
  render() {
    return (h(Flex, { class: cls('app-menu app-menu__container', this.interface) },
      h(Flex, { row: true, spaced: true, middle: true, class: "app-menu__header" }, this._renderSearch()),
      this._renderApps()));
  }
  static get is() { return "glyph-app-menu"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["app-menu.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["app-menu.css"]
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
    "apps": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Screen[]",
        "resolved": "Screen[]",
        "references": {
          "Screen": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "List of apps"
      }
    },
    "hasSearch": {
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
        "text": "Flag to activate search input"
      },
      "attribute": "has-search",
      "reflect": false,
      "defaultValue": "true"
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
    }
  }; }
  static get states() { return {
    "searchValue": {}
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
