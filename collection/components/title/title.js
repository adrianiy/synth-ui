import { Component, h, Prop } from '@stencil/core';
import state from '../../utils/store/context.store';
export class TitleComponent {
  componentWillLoad() {
    this.interface = this.interface || state.interface;
  }
  render() {
    return this.interface === "redesign" /* redesign */ ? (h("h1", { class: "big" },
      h("slot", null),
      this.text)) : (h("h2", null,
      h("slot", null),
      this.text));
  }
  static get is() { return "glyph-title"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["title.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["title.css"]
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
        "text": "title text"
      },
      "attribute": "text",
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
        "text": "interface input"
      },
      "attribute": "interface",
      "reflect": false
    }
  }; }
}
