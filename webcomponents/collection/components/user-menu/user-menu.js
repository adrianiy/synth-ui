import { Component, Element, Prop, h, Event, Listen, State } from '@stencil/core';
import { Flex } from '../../utils/layout';
import { cls, getComponentLocale } from '../../utils/utils';
import state from '../../utils/store/context.store';
import es from './i18n/user-menu.i18n.es.json';
import en from './i18n/user-menu.i18n.en.json';
export class UserMenuComponent {
  constructor() {
    /** Extra i18n translation object */
    this.i18n = {};
    /** Show decimals flag */
    this.showDecimals = false;
    this._handleLangChange = (option) => {
      this.languages = this.languages.map(lang => (Object.assign(Object.assign({}, lang), { active: lang.value === option.detail.value })));
      this.langChange.emit(option.detail);
    };
    this._handleThemeChange = (option) => {
      this.themes = this.themes.map(theme => (Object.assign(Object.assign({}, theme), { active: theme.value === option.detail.value })));
      this.themeChange.emit(option.detail);
    };
    this._handleDecimalsChange = () => {
      this.decimalsChange.emit(this.showDecimals);
    };
    this._handleLogout = () => {
      this.logout.emit();
    };
    this._handleCustomConfig = () => {
      this.customConfigChange.emit();
    };
  }
  clickOutside(event) {
    if (!event.path.some((el) => { var _a; return (_a = el.closest) === null || _a === void 0 ? void 0 : _a.call(el, '.user-menu__container'); })) {
      this.outsideCallback();
    }
  }
  componentWillLoad() {
    this._initializeVariables();
  }
  _initializeVariables() {
    const componentI18n = getComponentLocale(this.element, { en, es });
    this._i18n = Object.assign(Object.assign({}, componentI18n), this.i18n);
    this.interface = this.interface || state.interface;
    this.basePath = this.basePath || state.basePath;
  }
  render() {
    return (h(Flex, { left: true, class: cls('user-menu__container', this.interface) },
      h(Flex, null,
        h("span", { class: "caption caption--small" }, this._i18n['user']),
        this.interface === 'classic' ? h("span", { class: "caption" }, this.name) : h("h2", null, this.name)),
      h("div", { class: "separator" }),
      this.languages && (h(Flex, { class: "user-menu__container__row" },
        h(Flex, { row: true, middle: true, spaced: true },
          h("span", { class: "caption" }, this._i18n['pickLang']),
          h("glyph-selector", { options: this.languages, onOptionSelect: this._handleLangChange, interface: this.interface })),
        h("div", { class: "separator" }))),
      this.themes && (h(Flex, { class: "user-menu__container__row" },
        h(Flex, { row: true, middle: true, spaced: true },
          h("span", { class: "caption" }, this._i18n['pickTheme']),
          h("glyph-selector", { options: this.themes, onOptionSelect: this._handleThemeChange, interface: this.interface })),
        h("div", { class: "separator" }))),
      this.decimals && (h(Flex, { class: "user-menu__container__row" },
        h(Flex, { row: true, middle: true, spaced: true },
          h("span", { class: "caption" }, this._i18n['showDecimals']),
          h("glyph-toggler", { onClick: this._handleDecimalsChange, active: this.showDecimals, interface: this.interface })),
        h("div", { class: "separator" }))),
      this.customConfig && (h(Flex, { class: "user-menu__container__row" },
        h(Flex, { row: true, middle: true, left: true, class: "option", onClick: this._handleCustomConfig },
          h("glyph-icon", { material: this.interface !== "redesign" /* redesign */, icon: this.interface !== "redesign" /* redesign */ ? 'settings' : 'settings-outlined' }),
          h("span", { class: "caption" }, this._i18n['settings'])),
        h("div", { class: "separator" }))),
      h(Flex, { row: true, middle: true, class: "option logout", onClick: this._handleLogout },
        h("glyph-icon", { icon: "power_settings_new", button: true, material: true }),
        h("span", null, this._i18n['logout']))));
  }
  static get is() { return "glyph-user-menu"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["user-menu.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["user-menu.css"]
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
    "name": {
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
        "text": "User name"
      },
      "attribute": "name",
      "reflect": false
    },
    "languages": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "SelectorOption[]",
        "resolved": "SelectorOption[]",
        "references": {
          "SelectorOption": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Application languages"
      }
    },
    "themes": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "SelectorOption[]",
        "resolved": "SelectorOption[]",
        "references": {
          "SelectorOption": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Application themes"
      }
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
        "text": "Show decimal config flag"
      },
      "attribute": "decimals",
      "reflect": false
    },
    "customConfig": {
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
        "text": "Show custom config button"
      },
      "attribute": "custom-config",
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
    }
  }; }
  static get states() { return {
    "showDecimals": {}
  }; }
  static get events() { return [{
      "method": "logout",
      "name": "logout",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Logout event, trigger an event identified with **logout** key"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "langChange",
      "name": "langChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Language change event"
      },
      "complexType": {
        "original": "SelectorOption",
        "resolved": "SelectorOption",
        "references": {
          "SelectorOption": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      }
    }, {
      "method": "themeChange",
      "name": "themeChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Theme change event"
      },
      "complexType": {
        "original": "SelectorOption",
        "resolved": "SelectorOption",
        "references": {
          "SelectorOption": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      }
    }, {
      "method": "decimalsChange",
      "name": "decimalsChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Decimals change event"
      },
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      }
    }, {
      "method": "customConfigChange",
      "name": "customConfigChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Custom config event"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "element"; }
  static get listeners() { return [{
      "name": "click",
      "method": "clickOutside",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
