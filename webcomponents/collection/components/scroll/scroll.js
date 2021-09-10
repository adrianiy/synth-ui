import { Component, h, Prop, State } from '@stencil/core';
import { Scroll } from '../../utils/scroll';
import { cls } from '../../utils/utils';
export class ScrollComponent {
  constructor() {
    /** show vertical bar */
    this.vertical = true;
    /** scrolling speed */
    this.scrollSpeed = 0.05;
    this._initScrollbar = (ps) => {
      if (!this.ps) {
        this.ps = ps;
        if (this.initCallback) {
          this.initCallback(this.ps);
        }
      }
    };
  }
  componentWillRender() {
    var _a;
    (_a = this.ps) === null || _a === void 0 ? void 0 : _a.update();
  }
  render() {
    return (h(Scroll, { hideScrollBar: this.hideScrollBar, tiny: this.tiny, horizontal: this.horizontal, vertical: this.vertical, height: this.height, width: this.width, scrollSpeed: this.scrollSpeed, class: cls('scrollbar__wrapper', this.containerClass), initCallback: this._initScrollbar },
      h("slot", null)));
  }
  static get is() { return "glyph-scroll"; }
  static get originalStyleUrls() { return {
    "$": ["scroll.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["scroll.css"]
  }; }
  static get properties() { return {
    "hideScrollBar": {
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
        "text": "hide scrollbar"
      },
      "attribute": "hide-scroll-bar",
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
        "text": "tinyh scrollbar"
      },
      "attribute": "tiny",
      "reflect": false
    },
    "horizontal": {
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
        "text": "show horizontal bar"
      },
      "attribute": "horizontal",
      "reflect": false
    },
    "vertical": {
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
        "text": "show vertical bar"
      },
      "attribute": "vertical",
      "reflect": false,
      "defaultValue": "true"
    },
    "height": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "height property"
      },
      "attribute": "height",
      "reflect": false
    },
    "width": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "width property"
      },
      "attribute": "width",
      "reflect": false
    },
    "containerClass": {
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
        "text": "class name to be used in scroll container"
      },
      "attribute": "container-class",
      "reflect": false
    },
    "scrollSpeed": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "scrolling speed"
      },
      "attribute": "scroll-speed",
      "reflect": false,
      "defaultValue": "0.05"
    },
    "initCallback": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(ps: any) => void",
        "resolved": "(ps: any) => void",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "scrollbar initialization callback"
      }
    }
  }; }
  static get states() { return {
    "ps": {}
  }; }
}
