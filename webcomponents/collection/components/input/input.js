import { Component, Prop, State, h, Event, Watch } from '@stencil/core';
import { Icon } from '../../utils/icons';
import { Flex } from '../../utils/layout';
import state from '../../utils/store/context.store';
import { cls } from '../../utils/utils';
export class InputComponent {
  constructor() {
    /** Input type */
    this.inputType = 'text';
    /** Password visibility */
    this.passVisible = false;
    /** Range value */
    this.rangeValue = 0;
    /** In transition */
    this.inTransition = false;
    this._knobSize = 9;
    this._getThumbPosition = () => {
      var _a;
      if (this.ref) {
        const min = this._knobSize;
        const max = ((_a = this.ref) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().width) - this._knobSize * 2;
        const value = (max - min) * ((this.rangeValue - 0) / (100 - 0)) + min;
        return `${value}px`;
      }
      else {
        return `${this.rangeValue}%`;
      }
    };
    this._togglePassVisibility = () => {
      this.passVisible = !this.passVisible;
    };
    this._checkInputType = () => {
      const isPassword = this.inputType === 'password';
      if (isPassword) {
        return this.passVisible ? 'text' : 'password';
      }
      return this.inputType;
    };
    this._handleInputChange = ({ target: { value } }) => {
      if (this.inputType === 'range') {
        this.rangeValue = value;
      }
      else {
        this.inputChange.emit(value);
      }
    };
    this._handleInputOnChange = ({ target: { value } }) => {
      if (this.inputType === 'range') {
        this.inputChange.emit(value);
      }
    };
    this._handleKeyUp = (event) => {
      const isEnter = event.key === 'Enter';
      if (isEnter) {
        this.enterKey.emit();
      }
    };
    this._increaseValue = () => {
      if ((this.value || 0) < +(this.max || Infinity)) {
        this.value = (this.value || 0) + 1;
        this.inputChange.emit(this.value);
      }
    };
    this._decreaseValue = () => {
      if ((this.value || 0) > +(this.min || -Infinity)) {
        this.value = (this.value || 0) - 1;
        this.inputChange.emit(this.value);
      }
    };
    this._renderNumberControls = () => {
      return (h(Flex, { class: "number-control__container" },
        h(Icon, { icon: "add", class: cls({ disabled: this.value === +(this.max || Infinity) }), onClick: this._increaseValue }),
        h(Icon, { icon: "remove", class: cls({ disabled: this.value === +(this.min || -Infinity) }), onClick: this._decreaseValue })));
    };
    this._renderRangeThumb = () => {
      return (h("div", { class: cls('input--range__thumb', {
          transitioning: this.inTransition,
        }), style: { left: this._getThumbPosition() } }));
    };
  }
  onValueChange() {
    this.inTransition = true;
    this.rangeValue = this.value;
    setTimeout(() => (this.inTransition = false), 700);
  }
  componentWillLoad() {
    this.interface = this.interface || state.interface;
  }
  componentWillRender() {
    if (this.ref && this.autoFocus) {
      this.ref.focus();
    }
  }
  render() {
    return (h(Flex, { row: true, spaced: true, middle: true, style: { '--knob-size': `${this._knobSize}px` }, class: cls('input__container', this.interface, {
        search: this.search,
        box: this.box,
        error: this.error,
        disabled: this.disabled,
      }) },
      h(Flex, { row: true, middle: true, class: "input__wrapper" },
        this.search && (h("glyph-icon", { icon: "search", class: "search", material: this.interface !== "redesign" /* redesign */ })),
        this.inputType === 'range' && this._renderRangeThumb(),
        h("input", { ref: ref => (this.ref = ref), type: this._checkInputType(), placeholder: this.placeholder, value: this.value, onKeyUp: this._handleKeyUp, onInput: this._handleInputChange, onChange: this._handleInputOnChange, disabled: this.disabled, min: this.min, max: this.max }),
        this.inputType === 'number' && this._renderNumberControls()),
      this.inputType === 'password' && (h(Icon, { icon: `visibility${this.passVisible ? '_off' : ''}`, class: "eye", onClick: this._togglePassVisibility }))));
  }
  static get is() { return "glyph-input"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["input.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["input.css"]
  }; }
  static get properties() { return {
    "placeholder": {
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
        "text": "Placeholder"
      },
      "attribute": "placeholder",
      "reflect": false
    },
    "value": {
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
        "text": "Input value"
      },
      "attribute": "value",
      "reflect": false
    },
    "min": {
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
        "text": "Minimum available for inputs (dates or ranges)"
      },
      "attribute": "min",
      "reflect": false
    },
    "max": {
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
        "text": "Maximum availabla for inputs (dates or ranges)"
      },
      "attribute": "max",
      "reflect": false
    },
    "inputType": {
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
        "text": "Input type"
      },
      "attribute": "input-type",
      "reflect": false,
      "defaultValue": "'text'"
    },
    "autoFocus": {
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
        "text": "Input should auto focus"
      },
      "attribute": "auto-focus",
      "reflect": false
    },
    "error": {
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
        "text": "Style input as an error"
      },
      "attribute": "error",
      "reflect": false
    },
    "disabled": {
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
        "text": "Flag to disable input"
      },
      "attribute": "disabled",
      "reflect": false
    },
    "box": {
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
        "text": "Renders input in a box"
      },
      "attribute": "box",
      "reflect": false
    },
    "search": {
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
        "text": "Search flag, renders a search icon if `box` is false"
      },
      "attribute": "search",
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
        "text": "Filter chip interface ['MODERN', 'CLASSIC']"
      },
      "attribute": "interface",
      "reflect": false
    }
  }; }
  static get states() { return {
    "ref": {},
    "passVisible": {},
    "rangeValue": {},
    "inTransition": {}
  }; }
  static get events() { return [{
      "method": "inputChange",
      "name": "inputChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Text change event"
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }, {
      "method": "enterKey",
      "name": "enterKey",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Enter key event"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get watchers() { return [{
      "propName": "value",
      "methodName": "onValueChange"
    }]; }
}
