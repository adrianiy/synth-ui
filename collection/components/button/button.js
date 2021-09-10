import { Component, Prop, h } from '@stencil/core';
import { Icon } from '../../utils/icons';
import state from '../../utils/store/context.store';
import { cls } from '../../utils/utils';
export class ButtonComponent {
  componentWillLoad() {
    this.interface = this.interface || state.interface;
  }
  render() {
    return (h("button", { class: cls(this.class, 'button__wrapper', {
        text: this.text,
        icon: this.icon,
        cancel: this.cancel,
        action: this.action,
        tiny: this.tiny,
      }, this.interface) },
      h("slot", null),
      this.icon && this.iconFirst && h(Icon, { class: "button__icon--left", icon: this.icon }),
      h("span", { class: cls(this.class, { 'label--l--medium': this.interface === "redesign" /* redesign */ }) }, this.text && this.text),
      this.icon && !this.iconFirst && h(Icon, { class: "button__icon--right", icon: this.icon })));
  }
  static get is() { return "glyph-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["button.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["button.css"]
  }; }
  static get properties() { return {
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
        "text": "Button text"
      },
      "attribute": "text",
      "reflect": false
    },
    "icon": {
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
        "text": "Material icons id"
      },
      "attribute": "icon",
      "reflect": false
    },
    "cancel": {
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
        "text": "Cancel type button. Renders in red"
      },
      "attribute": "cancel",
      "reflect": false
    },
    "action": {
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
        "text": "Action button. Displayed with text only"
      },
      "attribute": "action",
      "reflect": false
    },
    "tiny": {
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
        "text": "Tiny action button displays a smaller and thinier text"
      },
      "attribute": "tiny",
      "reflect": false
    },
    "class": {
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
        "text": "Custom classNames to apply"
      },
      "attribute": "class",
      "reflect": false
    },
    "iconFirst": {
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
        "text": "Renders icon first"
      },
      "attribute": "icon-first",
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
