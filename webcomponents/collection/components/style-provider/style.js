import { Component, Prop, h } from '@stencil/core';
import { Flex } from '../../utils/layout';
import { setBasePath, setInterface, setTheme } from '../../utils/store/context.store';
import { cls } from '../../utils/utils';
export class StyleComponent {
  constructor() {
    /** Base path */
    this.basePath = '.';
    /** Interface type ['MODERN', 'CLASSIC'] */
    this.interface = "classic" /* classic */;
    /** Theme type */
    this.theme = "light" /* light */;
  }
  componentWillRender() {
    setBasePath(this.basePath);
    setTheme(this.theme);
    setInterface(this.interface);
  }
  render() {
    return (h(Flex, { class: cls('flex__container', this.interface, this.theme) },
      h("slot", null)));
  }
  static get is() { return "glyph-style"; }
  static get originalStyleUrls() { return {
    "$": ["style.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["style.css"]
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
        "text": "Base path"
      },
      "attribute": "base-path",
      "reflect": false,
      "defaultValue": "'.'"
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
      "reflect": false,
      "defaultValue": "UIInterface.classic"
    },
    "theme": {
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
        "text": "Theme type"
      },
      "attribute": "theme",
      "reflect": false,
      "defaultValue": "UITheme.light"
    }
  }; }
}
