import { Component, Prop, State, h, Listen, Element } from '@stencil/core';
import { Icon } from '../../../utils/icons';
import { Flex } from '../../../utils/layout';
import state from '../../../utils/store/context.store';
import { cls } from '../../../utils/utils';
export class SelectorOptionsComponent {
  constructor() {
    /** Multiselect flag */
    this.multiSelect = false;
    /** Max height configuration */
    this.maxHeight = 300;
    this._scrollbarInit = (ps) => {
      if (!this.ps) {
        this.ps = ps;
      }
    };
    this._selectOption = (option) => (event) => {
      if (!option.disabled) {
        if (!this.multiSelect) {
          this.options.forEach(option => (option.active = false));
          Object.keys(this.complexOptions || {}).forEach(key => {
            this.complexOptions[key].forEach(option => (option.active = false));
          });
        }
        option.active = !option.active;
        this.optionClickEvent(option);
        event === null || event === void 0 ? void 0 : event.stopPropagation();
        event === null || event === void 0 ? void 0 : event.preventDefault();
      }
    };
    this._handleInputChange = (event) => {
      this.searchValue = event.detail;
    };
    this._handleEnter = () => {
      let visibleOptions = [];
      if (this.complexOptions) {
        visibleOptions = Object.keys(this.complexOptions).reduce((acc, key) => acc.concat(this.complexOptions[key].filter(this._inSearch)), []);
      }
      if (this.options) {
        visibleOptions = this.options.filter(this._inSearch);
      }
      if (visibleOptions.length === 1) {
        this._selectOption(visibleOptions[0])();
      }
    };
    this._renderSearch = () => {
      return (h("glyph-input", { autoFocus: true, box: true, placeholder: this.searchPlaceholder, onEnterKey: this._handleEnter, onInputChange: this._handleInputChange }));
    };
    this._renderCheckbox = (option) => {
      return (h(Flex, { middle: true, center: true, class: cls('checkbox', { active: option.active }) }, option.active && h(Icon, { icon: "checkmark" })));
    };
    this._inSearch = (option) => {
      if (this.searchValue) {
        return option.name.toLowerCase().includes(this.searchValue.toLowerCase());
      }
      return true;
    };
    this._renderComplexOptions = () => {
      return (h(Flex, { row: true, class: "options__container" }, Object.keys(this.complexOptions).map(key => (h(Flex, { class: "options__container__column" },
        h("label", null, key),
        this._renderOptions(this.complexOptions[key]))))));
    };
    this._renderSimpleOptions = () => {
      return h(Flex, null, this._renderOptions(this.options));
    };
    this._renderOptions = (options = this.options) => {
      return (h(Flex, null, options
        .filter(option => this._inSearch(option))
        .map((option) => (h(Flex, { class: cls('option', { disabled: option.disabled }), row: true, middle: true, left: true, onClick: this._selectOption(option) },
        this.multiSelect && this._renderCheckbox(option),
        this._renderOptionName(option))))));
    };
    this._renderOptionName = ({ name }) => {
      if (this.searchValue) {
        name = name.split(this.searchValue).join(`<b>${this.searchValue}</b>`);
      }
      return h("span", { innerHTML: name });
    };
  }
  clickOutside(event) {
    if (!event.composedPath().includes(this.element)) {
      this.closeEvent();
    }
  }
  componentWillLoad() {
    this.interface = this.interface || state.interface;
  }
  render() {
    return (h(Flex, { class: cls('selector__options__container', this.interface, { search: this.searchPlaceholder }), style: { '--max-height': `${this.maxHeight}px` } },
      this.searchPlaceholder && this._renderSearch(),
      h("glyph-scroll", { tiny: true, scrollSpeed: 0.09, initCallback: this._scrollbarInit, containerClass: "scroll__container" },
        this.options && this._renderSimpleOptions(),
        this.complexOptions && this._renderComplexOptions())));
  }
  static get is() { return "glyph-selector-options"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./options.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["options.css"]
  }; }
  static get properties() { return {
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
    "optionClickEvent": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(option: SelectorOption) => void",
        "resolved": "(option: SelectorOption) => void",
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
        "text": "Option click event"
      }
    },
    "closeEvent": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "() => void",
        "resolved": "() => void",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Close event"
      }
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
    "ps": {},
    "searchValue": {}
  }; }
  static get elementRef() { return "element"; }
  static get listeners() { return [{
      "name": "click",
      "method": "clickOutside",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
