import { Component, Prop, h } from '@stencil/core';
import { Format } from '../../utils/format';
import { Flex } from '../../utils/layout';
import state from '../../utils/store/context.store';
import { cls } from '../../utils/utils';
export class ButtonGroupComponent {
  constructor() {
    /** Button group size ['big', 'small'] */
    this.size = "big" /* big */;
    /** Button alignment ['left', 'center', 'right'] */
    this.alignment = "center" /* center */;
    this._handleClick = (button, idx) => () => {
      this.buttons = this.buttons.map((btn, index) => (Object.assign(Object.assign({}, btn), { active: index === idx })));
      button.action();
    };
    this._renderTitle = (button) => {
      return (h("h3", { class: cls({
          'number': button.title.isNumber,
          'label-l': true,
          'label--l--medium': !button.title.isNumber && this.interface === "redesign" /* redesign */,
        }) },
        h(Format, { config: button.title, decorate: true })));
    };
    this._renderSubtitle = (button) => {
      var _a;
      return this.interface !== "redesign" /* redesign */ ? (h("span", { class: "caption caption--small" },
        h(Format, { config: button.subtitle, decorate: true }))) : (h("h3", { class: cls({
          'number': (_a = button.subtitle) === null || _a === void 0 ? void 0 : _a.isNumber,
          'label-l': true,
          'label--l--medium': !button.subtitle.isNumber && this.interface === "redesign" /* redesign */,
        }) },
        h(Format, { config: button.subtitle, decorate: true })));
    };
  }
  componentWillLoad() {
    this.interface = this.interface || state.interface;
  }
  render() {
    return (h(Flex, { row: true, class: cls('button-group__container', this.interface, this.size) }, this.buttons.map((button, idx) => (h("div", { class: cls('button', { active: button.active }, this.alignment), onClick: this._handleClick(button, idx) },
      button.title && this._renderTitle(button),
      button.subtitle && this._renderSubtitle(button))))));
  }
  static get is() { return "glyph-button-group"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["button-group.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["button-group.css"]
  }; }
  static get properties() { return {
    "buttons": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "Button[]",
        "resolved": "Button[]",
        "references": {
          "Button": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Buttons configuration"
      }
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ButtonGroupStyle",
        "resolved": "ButtonGroupStyle.big | ButtonGroupStyle.small",
        "references": {
          "ButtonGroupStyle": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Button group size ['big', 'small']"
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "ButtonGroupStyle.big"
    },
    "alignment": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Alignment",
        "resolved": "Alignment.center | Alignment.left | Alignment.right",
        "references": {
          "Alignment": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Button alignment ['left', 'center', 'right']"
      },
      "attribute": "alignment",
      "reflect": false,
      "defaultValue": "Alignment.center"
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
        "text": "Application interface"
      },
      "attribute": "interface",
      "reflect": false
    }
  }; }
}
