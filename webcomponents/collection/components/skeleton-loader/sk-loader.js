import { Component, h, Host, Prop } from '@stencil/core';
export class SkeletonLoaderComponent {
  constructor() {
    /** Number of loader lines that will be rendered */
    this.repetitions = 1;
    /** Height of loader line */
    this.height = 38;
  }
  render() {
    return (h(Host, null, Array(this.repetitions)
      .fill(0)
      .map(() => (h("div", { class: "skeleton-loader", style: { height: `${this.height}px` } })))));
  }
  static get is() { return "glyph-sk-loader"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sk-loader.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sk-loader.css"]
  }; }
  static get properties() { return {
    "repetitions": {
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
        "text": "Number of loader lines that will be rendered"
      },
      "attribute": "repetitions",
      "reflect": false,
      "defaultValue": "1"
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
        "text": "Height of loader line"
      },
      "attribute": "height",
      "reflect": false,
      "defaultValue": "38"
    }
  }; }
}
