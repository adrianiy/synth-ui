import { Component, Event, h, Prop } from '@stencil/core';
import { Flex } from '../../utils/layout';
export class SliderComponent {
  constructor() {
    /** Current slider value between 0 and 100 */
    this.currentValue = 0;
    this._handleInputChange = ({ detail: value }) => {
      this.currentValue = +value;
      setTimeout(() => {
        const step = 1 / (this.options.length - 1);
        const steps = this.options.map((_, idx) => idx * step * 100);
        const nearest = [...steps].sort((a, b) => Math.abs(value - a) - Math.abs(value - b))[0];
        const index = steps.findIndex(a => a === nearest);
        this.currentValue = nearest;
        this.optionChange.emit({ option: this.options[index], value: this.currentValue });
      });
    };
  }
  render() {
    return (h(Flex, { middle: true, class: "slider__container" },
      h("glyph-input", { inputType: "range", value: this.currentValue, min: "0", max: "100", onInputChange: this._handleInputChange })));
  }
  static get is() { return "glyph-slider"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["slider.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["slider.css"]
  }; }
  static get properties() { return {
    "options": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "any[]",
        "resolved": "any[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Slider options"
      }
    },
    "currentValue": {
      "type": "number",
      "mutable": true,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Current slider value between 0 and 100"
      },
      "attribute": "current-value",
      "reflect": false,
      "defaultValue": "0"
    }
  }; }
  static get events() { return [{
      "method": "optionChange",
      "name": "optionChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Option change event"
      },
      "complexType": {
        "original": "{ option: any; value: number }",
        "resolved": "{ option: any; value: number; }",
        "references": {}
      }
    }]; }
}
