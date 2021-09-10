import { Component, Prop, h } from '@stencil/core';
import { Icon } from '../../utils/icons';
import { SewingIcon } from '../../utils/sewing-icons';
import { cls } from '../../utils/utils';
export class IconComponent {
  constructor() {
    /** render outlined icon (for material icons) */
    this.outlined = false;
  }
  render() {
    if (this.material) {
      return (h(Icon, { icon: this.icon, outlined: this.outlined, button: this.button, class: cls('material-icon', this.class), onClick: this.clickCbk }));
    }
    else {
      return (h(SewingIcon, { icon: this.icon, class: cls('sewing-icon', this.class), button: this.button, onClick: this.clickCbk }));
    }
  }
  static get is() { return "glyph-icon"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["icon.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["icon.css"]
  }; }
  static get properties() { return {
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
        "text": "icon name"
      },
      "attribute": "icon",
      "reflect": false
    },
    "material": {
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
        "text": "render material icon"
      },
      "attribute": "material",
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
        "text": "class to use in icon"
      },
      "attribute": "class",
      "reflect": false
    },
    "outlined": {
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
        "text": "render outlined icon (for material icons)"
      },
      "attribute": "outlined",
      "reflect": false,
      "defaultValue": "false"
    },
    "button": {
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
        "text": "render icon with button role"
      },
      "attribute": "button",
      "reflect": false
    },
    "clickCbk": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(event: MouseEvent) => any",
        "resolved": "(event: MouseEvent) => any",
        "references": {
          "MouseEvent": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "click callback"
      }
    }
  }; }
}
