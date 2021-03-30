import { Component, h, Prop } from '@stencil/core';
export class TitleComponent {
  render() {
    return h("h2", null, this.titleText);
  }
  static get is() { return "synth-title"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["title.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["title.css"]
  }; }
  static get properties() { return {
    "titleText": {
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
        "text": ""
      },
      "attribute": "title-text",
      "reflect": false
    }
  }; }
}
