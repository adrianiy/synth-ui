import { Component, Element, Prop, State, h, getAssetPath } from '@stencil/core';
import { Flex } from '../../../utils/layout';
import { cls, getComponentLocale } from '../../../utils/utils';
import es from './i18n/login.i18n.es.json';
import en from './i18n/login.i18n.en.json';
import store from './../../../utils/store/context.store';
export class LoginComponent {
  constructor() {
    /** Login error flag */
    this.loginError = false;
    /** Loading flag */
    this.loading = false;
    this._handleUserInput = (event) => {
      this.usernameError = false;
      this.username = event.detail;
    };
    this._handlePassInput = (event) => {
      this.passwordError = false;
      this.password = event.detail;
    };
    this._checkInputs = () => {
      if (!this.username) {
        this.usernameError = true;
      }
      if (!this.password) {
        this.passwordError = true;
      }
      return !this.usernameError && !this.passwordError;
    };
    this._doLogin = async () => {
      const inputCheck = this._checkInputs();
      if (inputCheck) {
        const body = { user: this.username, password: this.password };
        const method = 'POST';
        try {
          this.loginError = false;
          this.loading = true;
          const result = await (this.login
            ? this.login(body)
            : fetch('/login', { method, body: JSON.stringify(body) }));
          this.loginSuccess(result);
        }
        catch (err) {
          this.loginError = true;
        }
        finally {
          this.loading = false;
        }
      }
    };
  }
  componentWillLoad() {
    this._initializeVariables();
  }
  _initializeVariables() {
    const componentI18n = getComponentLocale(this.element, { en, es });
    this._i18n = Object.assign(Object.assign({}, componentI18n), this.i18n);
    this.interface = this.interface || store.interface;
    this.basePath = this.basePath || store.basePath;
  }
  render() {
    const isClassic = this.interface === "classic" /* classic */;
    return (h(Flex, { row: true, class: "login__container" },
      h(Flex, { spaced: true, class: cls('login-user__container', { 'login-user__container--full': isClassic }) },
        h(Flex, { middle: isClassic, center: isClassic, class: "login__form__container" },
          isClassic && h("img", { class: "login__logo", src: getAssetPath('./assets/corporative/logo.png') }),
          h("h1", { class: "big", innerHTML: this._i18n['login.welcome'] }),
          h("h4", null, this._i18n['login.subtitle']),
          this.loginError && h("div", { class: "login-error" }, this._i18n['login.error']),
          h(Flex, { class: "login__form" },
            h("glyph-input", { box: true, error: this.usernameError, placeholder: this._i18n['login.user'], onInputChange: this._handleUserInput }),
            h("glyph-input", { box: true, error: this.passwordError, inputType: "password", placeholder: this._i18n['login.pass'], onInputChange: this._handlePassInput })),
          h("glyph-button", { interface: "modern" /* modern */, onClick: this._doLogin, text: "Login" })),
        h(Flex, { row: true, middle: true, spaced: true, class: "login__footer" }, this.version)),
      !isClassic && h("img", { class: "login__splash", src: getAssetPath(`${store.basePath}/assets/splash.jpg`) })));
  }
  static get is() { return "glyph-login"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["login.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["login.css"]
  }; }
  static get assetsDirs() { return ["assets"]; }
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
        "text": "Component interface *modern* | *classic*"
      },
      "attribute": "interface",
      "reflect": false
    },
    "version": {
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
        "text": "Application version"
      },
      "attribute": "version",
      "reflect": false
    },
    "login": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(userData: { user: string; password: string }) => void",
        "resolved": "(userData: { user: string; password: string; }) => void",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Login callback"
      }
    },
    "loginSuccess": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(result: any) => void",
        "resolved": "(result: any) => void",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "On login success"
      }
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
        "text": "Extra i18n translates"
      }
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
    "loginError": {},
    "loading": {},
    "username": {},
    "usernameError": {},
    "password": {},
    "passwordError": {}
  }; }
  static get elementRef() { return "element"; }
}
