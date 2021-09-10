import { Component, Prop, h } from '@stencil/core';
import { Flex } from '../../utils/layout';
import state from '../../utils/store/context.store';
import { cls } from '../../utils/utils';
export class TogglerComponent {
  constructor() {
    /** Toggler state */
    this.active = false;
    this._handleToggle = () => {
      this.active = !this.active;
    };
  }
  componentWillLoad() {
    this.interface = this.interface || state.interface;
  }
  render() {
    return (h(Flex, { row: true, middle: true, class: cls('toggler__wrapper', { active: this.active }, this.interface), onClick: this._handleToggle },
      h("div", { class: "toggler" })));
  }
  static get is() { return "glyph-toggler"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["toggler.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["toggler.css"]
  }; }
  static get properties() { return {
    "active": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Toggler state"
      },
      "attribute": "active",
      "reflect": false,
      "defaultValue": "false"
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
}
