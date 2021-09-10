import { Component, Element, Prop, State, h } from '@stencil/core';
import { Icon } from '../../../../utils/icons';
import { Flex } from '../../../../utils/layout';
import state from '../../../../utils/store/context.store';
import { cls, getComponentLocale } from '../../../../utils/utils';
import { inSearch } from '../../utils/utils';
import en from './../../i18n/filter.i18n.en.json';
import es from './../../i18n/filter.i18n.es.json';
export class FilterOptionsComponent {
  constructor() {
    /** Multiselect flag. True if filter allows multiselect toggler */
    this.haveMultiSelect = true;
    /** This flag is true if multiselect is active */
    this.multiSelect = false;
    /** Extra i18n translation object */
    this.i18n = {};
    this._scrollbarInit = (ps) => {
      if (!this.ps) {
        this.ps = ps;
      }
    };
    this._optionClick = (option) => (event) => {
      this.optionClickEvent(option);
      event === null || event === void 0 ? void 0 : event.stopPropagation();
      event === null || event === void 0 ? void 0 : event.preventDefault();
    };
    this._multiSelectClick = () => {
      this.multiSelectEvent();
    };
    this._handleInputChange = (event) => {
      this.searchValue = event.detail;
    };
    this._handleKeyUp = () => {
      const visibleOptions = this.options.filter(option => option.display && inSearch(option, this.searchValue, this._i18n));
      if (visibleOptions.length === 1) {
        if (visibleOptions[0].header) {
          const visibleChilds = visibleOptions[0].children.filter(child => child.display && inSearch(child, this.searchValue, this._i18n));
          if (visibleChilds.length === 1) {
            this._optionClick(visibleChilds[0])();
          }
        }
        else {
          this._optionClick(visibleOptions[0])();
        }
      }
    };
    this._renderSearch = () => {
      return (h("glyph-input", { autoFocus: true, search: true, class: "search", interface: this.interface, box: this.interface !== "redesign" /* redesign */, placeholder: this._i18n[this.searchPlaceholder] || this.searchPlaceholder, onEnterKey: this._handleKeyUp, onInputChange: this._handleInputChange }));
    };
    this._renderMultiSelect = () => {
      return (h(Flex, { row: true, spaced: true, middle: true, class: cls('operation', { withSearch: this.searchPlaceholder }) },
        this.interface !== "modern" /* modern */ ? (h("span", null, this._i18n['multiselect'])) : (h(Icon, { icon: "done_all" })),
        h("glyph-toggler", { active: this.multiSelect, onClick: this._multiSelectClick, interface: this.interface })));
    };
    this._renderOptionsList = (options) => {
      return (h("glyph-filter-options-list", { options: options, interface: this.interface, searchValue: this.searchValue, i18n: this._i18n, optionClick: this._optionClick }));
    };
  }
  componentDidRender() {
    setTimeout(() => { var _a; return (_a = this.ps) === null || _a === void 0 ? void 0 : _a.update(); }, 300);
  }
  componentWillLoad() {
    this._initializeVariables();
  }
  _initializeVariables() {
    const componentI18n = getComponentLocale(this.element, { es, en });
    this._i18n = Object.assign(Object.assign({}, componentI18n), this.i18n);
    this.basePath = this.basePath || state.basePath;
    this.interface = this.interface || state.interface;
  }
  render() {
    return (h(Flex, { class: cls('filter-options__container', this.interface) },
      this.interface === "modern" /* modern */ ? (h(Flex, { row: true, spaced: true },
        h("h3", null, this._i18n[this.description] || this.description),
        this.haveMultiSelect && this._renderMultiSelect())) : this.interface === "classic" /* classic */ ? (h("h5", null, this._i18n[this.description] || this.description)) : null,
      this.searchPlaceholder && this._renderSearch(),
      this.haveMultiSelect && this.interface !== "modern" /* modern */ && this._renderMultiSelect(),
      h("glyph-scroll", { tiny: this.interface !== "redesign" /* redesign */, scrollSpeed: 0.09, initCallback: this._scrollbarInit, containerClass: "scroll__container" }, this._renderOptionsList(this.options))));
  }
  static get is() { return "glyph-filter-options"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["options.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["options.css"]
  }; }
  static get properties() { return {
    "basePath": {
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
        "text": "Base path to get assets"
      },
      "attribute": "base-path",
      "reflect": false
    },
    "description": {
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
        "text": "Filter description"
      },
      "attribute": "description",
      "reflect": false
    },
    "options": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "FilterOptionHeader[]",
        "resolved": "FilterOptionHeader[]",
        "references": {
          "FilterOptionHeader": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Filter options"
      }
    },
    "haveMultiSelect": {
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
        "text": "Multiselect flag. True if filter allows multiselect toggler"
      },
      "attribute": "have-multi-select",
      "reflect": false,
      "defaultValue": "true"
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
        "text": "This flag is true if multiselect is active"
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
        "text": "Search placeholder"
      },
      "attribute": "search-placeholder",
      "reflect": false
    },
    "i18n": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "{ [key: string]: string }",
        "resolved": "{ [key: string]: string; }",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Extra i18n translation object"
      },
      "defaultValue": "{}"
    },
    "locale": {
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
        "text": "**optional** force locale change if html lang is not interpreted"
      },
      "attribute": "locale",
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
    },
    "optionClickEvent": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(option: FilterOptionHeader) => void",
        "resolved": "(option: FilterOptionHeader) => void",
        "references": {
          "FilterOptionHeader": {
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
    "multiSelectEvent": {
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
        "text": "Multiselect toggler callback"
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
        "text": "Close callback"
      }
    }
  }; }
  static get states() { return {
    "searchValue": {},
    "ps": {}
  }; }
  static get elementRef() { return "element"; }
}
