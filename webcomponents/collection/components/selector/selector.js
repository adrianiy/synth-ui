import { Component, Prop, h, State, Event, Element } from '@stencil/core';
import { Icon } from '../../utils/icons';
import { Flex } from '../../utils/layout';
import state from '../../utils/store/context.store';
import { cls } from '../../utils/utils';
export class SelectorComponent {
  constructor() {
    /** Max height configuration */
    this.maxHeight = 300;
    /** Multiselect flag */
    this.multiSelect = false;
    this._getSelectedOptions = () => {
      var _a, _b, _c;
      if ((_a = this.options) === null || _a === void 0 ? void 0 : _a.length) {
        this.selectedOptions = (_b = this.options) === null || _b === void 0 ? void 0 : _b.filter(option => option.active);
      }
      if ((_c = Object.keys(this.complexOptions || {})) === null || _c === void 0 ? void 0 : _c.length) {
        this.selectedOptions = Object.keys(this.complexOptions).reduce((prev, curr) => {
          return prev.concat(this.complexOptions[curr].filter(option => option.active));
        }, []);
      }
    };
    this._toggleContainer = (value) => () => {
      if (!this.disabled) {
        this.optionsDrilldown = value !== null && value !== void 0 ? value : !this.optionsDrilldown;
      }
    };
    this._selectOption = (option) => {
      this._getSelectedOptions();
      this.optionSelect.emit(option);
      if (!this.multiSelect) {
        this.optionsDrilldown = false;
      }
    };
  }
  componentWillLoad() {
    this.interface = this.interface || state.interface;
  }
  componentWillRender() {
    this._getSelectedOptions();
  }
  render() {
    var _a, _b;
    return (h(Flex, { class: cls('selector__container', this.disabled && 'disabled', this.interface) },
      h(Flex, { row: true, spaced: true, class: "selector__input", onClick: this._toggleContainer() },
        h("label", { class: cls({ active: (_a = this.selectedOptions) === null || _a === void 0 ? void 0 : _a.length }) }, this.label),
        h("span", { class: cls({ 'label--l--medium': this.interface === "redesign" /* redesign */ }) }, ((_b = this.selectedOptions) === null || _b === void 0 ? void 0 : _b.map(option => option.name).join(', ')) || ''),
        h(Icon, { icon: this.interface === "classic" /* classic */ ? 'arrow_drop_down' : 'expand_more', class: cls({ active: this.optionsDrilldown }) })),
      this.optionsDrilldown && (h("glyph-selector-options", { interface: this.interface, options: this.options, complexOptions: this.complexOptions, maxHeight: this.maxHeight, multiSelect: this.multiSelect, searchPlaceholder: this.searchPlaceholder, optionClickEvent: this._selectOption, closeEvent: this._toggleContainer(false) }))));
  }
  static get is() { return "glyph-selector"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["selector.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["selector.css"]
  }; }
  static get properties() { return {
    "label": {
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
        "text": "Selector label"
      },
      "attribute": "label",
      "reflect": false
    },
    "maxHeight": {
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
        "text": "Max height configuration"
      },
      "attribute": "max-height",
      "reflect": false,
      "defaultValue": "300"
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
        "text": "Selector disabled state"
      },
      "attribute": "disabled",
      "reflect": false
    },
    "options": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "SelectorOption[]",
        "resolved": "SelectorOption[]",
        "references": {
          "SelectorOption": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Selector options"
      }
    },
    "complexOptions": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "ComplexSelectorOptions",
        "resolved": "ComplexSelectorOptions",
        "references": {
          "ComplexSelectorOptions": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Complex selector options"
      }
    },
    "multiSelect": {
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
        "text": "Multiselect flag"
      },
      "attribute": "multi-select",
      "reflect": false,
      "defaultValue": "false"
    },
    "searchPlaceholder": {
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
        "text": "Search placeholder text. If defined a search input will render"
      },
      "attribute": "search-placeholder",
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
  static get states() { return {
    "selectedOptions": {},
    "optionsDrilldown": {}
  }; }
  static get events() { return [{
      "method": "optionSelect",
      "name": "optionSelect",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "on change callback"
      },
      "complexType": {
        "original": "SelectorOption",
        "resolved": "SelectorOption",
        "references": {
          "SelectorOption": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      }
    }]; }
  static get elementRef() { return "element"; }
}
