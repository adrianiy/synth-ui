import { Component, Prop, h } from '@stencil/core';
import { Flex } from '../../utils/layout';
import state from '../../utils/store/context.store';
import { cls } from '../../utils/utils';
export class AvatarComponent {
  componentWillLoad() {
    this.interface = this.interface || state.interface;
  }
  render() {
    return (h(Flex, { row: true, middle: true, center: true, class: cls('avatar', this.interface) },
      this.image && h("img", { src: this.image, alt: this.name }),
      !this.image && (h("h2", null, this.name
        .split(' ')
        .slice(0, 2)
        .map((chunk) => chunk[0])))));
  }
  static get is() { return "glyph-avatar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["avatar.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["avatar.css"]
  }; }
  static get properties() { return {
    "image": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "UserData['image']",
        "resolved": "string",
        "references": {
          "UserData": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "User avatar image"
      },
      "attribute": "image",
      "reflect": false
    },
    "name": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "UserData['name']",
        "resolved": "string",
        "references": {
          "UserData": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "User name, used as image fallback"
      },
      "attribute": "name",
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
    }
  }; }
}
