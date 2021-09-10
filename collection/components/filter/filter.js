import { Component, Prop, h, State, Element, Event, Listen, Method } from '@stencil/core';
import { Flex } from '../../utils/layout';
import { cls } from '../../utils/utils';
import { Icon } from '../../utils/icons';
import state from '../../utils/store/context.store';
export class FilterComponent {
  constructor() {
    /** Multiselect flag. True if filter allows multiselect toggler */
    this.haveMultiSelect = true;
    /** This flag is true if multiselect is active */
    this.multiSelect = false;
    /** Extra i18n translation object */
    this.i18n = {};
    /** Filter expanded flag */
    this.expanded = false;
    this._getChipDescription = () => {
      const applied = this._getActiveOptions();
      const total = applied.length;
      const isPlural = total > 1;
      if (total) {
        this.active = true;
        this.chipDescription = isPlural
          ? `${total} ${this.i18n[this.plural] || this.plural}`
          : this.i18n[applied[0].description] || applied[0].description;
      }
      else {
        this.active = false;
        this.chipDescription = this.i18n[this.description] || this.description;
      }
    };
    this._expandFilter = () => {
      this.expanded = !this.expanded;
    };
    this._closeFilter = () => {
      this.expanded = false;
    };
    this._optionClick = (option) => {
      if (!this.multiSelect) {
        this._clear();
      }
      option.active = !option.active;
      this.optionClick.emit({ option });
      this._getChipDescription();
      if (!this.multiSelect && !option.header) {
        this._expandFilter();
      }
    };
    this._multiSelectClick = () => {
      this.multiSelect = !this.multiSelect;
      if (!this.multiSelect && this._getActiveOptions().length > 1) {
        this._clear();
      }
      this.multiSelectEvent.emit();
    };
    this._onClear = (event) => {
      this._clear();
      this._getChipDescription();
      if (event) {
        this.clear.emit();
        event === null || event === void 0 ? void 0 : event.stopPropagation();
      }
    };
    this._getActiveOptions = () => {
      const appliedChildren = this.options.map(opt => { var _a; return (_a = opt.children) === null || _a === void 0 ? void 0 : _a.filter(({ active }) => active); }).flat();
      const appliedOptions = this.options.filter(({ active }) => active);
      const applied = appliedChildren.concat(appliedOptions).filter(Boolean);
      return applied;
    };
    this._clear = () => {
      this.options.forEach(option => {
        option.active = false;
        if (option.header || option.children) {
          option.children.forEach(child => {
            child.active = false;
          });
        }
      });
    };
  }
  clickOutside(event) {
    if (!event.composedPath().includes(this.element)) {
      this.expanded = false;
    }
  }
  componentWillLoad() {
    this.interface = this.interface || state.interface;
    this.basePath = this.basePath || state.basePath;
  }
  componentWillRender() {
    this._getChipDescription();
  }
  /* eslint-disable @stencil/decorators-style, @stencil/async-methods  */
  /** This method will return image height */
  async clearFilter() {
    this._onClear();
  }
  _renderFilterOptions() {
    return (h("glyph-filter-options", { basePath: this.basePath, locale: this.locale, description: this.description, options: [...this.options], haveMultiSelect: this.haveMultiSelect, multiSelect: this.multiSelect, searchPlaceholder: this.searchPlaceholder, i18n: this.i18n, interface: this.interface, optionClickEvent: this._optionClick, multiSelectEvent: this._multiSelectClick, closeEvent: this._closeFilter }));
  }
  render() {
    const active = this.active;
    return (h(Flex, { class: this.interface },
      h(Flex, { row: true, middle: true, class: cls('filter-chip', this.interface, {
          active,
          expanded: this.expanded,
        }), onClick: this._expandFilter },
        h("span", { class: cls('label--l', {
            'label--l--medium': this.interface === "redesign" /* redesign */,
          }) }, this.chipDescription),
        h(Icon, { onClick: active ? this._onClear : null, icon: active
            ? 'close'
            : this.interface === "classic" /* classic */
              ? 'arrow_drop_down'
              : 'expand_more' })),
      this.expanded && this._renderFilterOptions()));
  }
  static get is() { return "glyph-filter"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["filter.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["filter.css"]
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
    "plural": {
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
        "text": "Filter plural"
      },
      "attribute": "plural",
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
      "mutable": true,
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
    }
  }; }
  static get states() { return {
    "expanded": {},
    "searchValue": {},
    "active": {},
    "chipDescription": {}
  }; }
  static get events() { return [{
      "method": "optionClick",
      "name": "optionClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Option click event"
      },
      "complexType": {
        "original": "FilterSelectEvent",
        "resolved": "FilterSelectEvent",
        "references": {
          "FilterSelectEvent": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      }
    }, {
      "method": "clear",
      "name": "clear",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Clear selected filters callback"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "multiSelectEvent",
      "name": "multiSelectEvent",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Multiselect toggler callback"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "clearFilter": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "This method will return image height",
        "tags": []
      }
    }
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
