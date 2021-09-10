import { Component, Prop, h } from '@stencil/core';
import { Flex } from '../../utils/layout';
import state from '../../utils/store/context.store';
import { cls } from '../../utils/utils';
export class FlexComponent {
  constructor() {
    /** Flex-direction = vertical */
    this.column = true;
  }
  componentWillLoad() {
    this.interface = this.interface || state.interface;
    this.theme = this.theme || state.theme;
  }
  render() {
    return (h(Flex, { column: this.column, row: this.row, left: this.left, center: this.center, right: this.right, top: this.top, middle: this.middle, bottom: this.bottom, spaced: this.spaced, around: this.around, class: cls('flex__container', this.interface, this.theme, this.flexClass), style: this.flexStyle, id: this.flexId },
      h("slot", null)));
  }
  static get is() { return "glyph-flex"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["flex.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["flex.css"]
  }; }
  static get properties() { return {
    "column": {
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
        "text": "Flex-direction = vertical"
      },
      "attribute": "column",
      "reflect": false,
      "defaultValue": "true"
    },
    "row": {
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
        "text": "Flex-direction = horizontal"
      },
      "attribute": "row",
      "reflect": false
    },
    "left": {
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
        "text": "Horizonal align = left"
      },
      "attribute": "left",
      "reflect": false
    },
    "center": {
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
        "text": "Horizontal align = center"
      },
      "attribute": "center",
      "reflect": false
    },
    "right": {
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
        "text": "Horizontal align = right"
      },
      "attribute": "right",
      "reflect": false
    },
    "top": {
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
        "text": "Vertical align = top"
      },
      "attribute": "top",
      "reflect": false
    },
    "middle": {
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
        "text": "Vertical align = middle"
      },
      "attribute": "middle",
      "reflect": false
    },
    "bottom": {
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
        "text": "Verical align = bottom"
      },
      "attribute": "bottom",
      "reflect": false
    },
    "spaced": {
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
        "text": "Apply spaced distribution"
      },
      "attribute": "spaced",
      "reflect": false
    },
    "around": {
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
        "text": "Apply spaced around distribution"
      },
      "attribute": "around",
      "reflect": false
    },
    "flexClass": {
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
        "text": "Class attribute to apply in flex div"
      },
      "attribute": "flex-class",
      "reflect": false
    },
    "flexStyle": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Style atttribute to apply in flex div"
      },
      "attribute": "flex-style",
      "reflect": false
    },
    "flexId": {
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
        "text": "Id attribute to apply in flex div"
      },
      "attribute": "flex-id",
      "reflect": false
    },
    "testId": {
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
        "text": "Set an id to attribute data-testid"
      },
      "attribute": "test-id",
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
      "reflect": false
    }
  }; }
}
