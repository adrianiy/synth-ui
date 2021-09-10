import { Component, Event, Prop, State, h, Element, Host } from '@stencil/core';
import { Flex } from '../../../utils/layout';
import state from '../../../utils/store/context.store';
import { cls, getComponentLocale } from '../../../utils/utils';
import es from './i18n/chipsbar.i18n.es.json';
import en from './i18n/chipsbar.i18n.en.json';
export class ChipsBarComponent {
  constructor() {
    /** Hide zara south filters active */
    this.hideZaraSouth = true;
    /** Extra i18n translation object */
    this.i18n = {};
    /** scroll state flag */
    this.scrolled = false;
    /** Modal configuration visibility flag */
    this.configModal = false;
    this._handleOptionClick = (key) => ({ detail }) => {
      if (key === 'date') {
        this.filtersConfig[key] = Object.assign(Object.assign({}, this.filtersConfig[key]), detail);
      }
      const event = Object.assign(Object.assign({}, detail), { filterCode: key });
      this.filterSelect.emit(event);
    };
    this._handleFilterClear = (key) => () => {
      this.filterClear.emit(key);
    };
    this._handleMultiSelect = (key) => () => {
      const filter = this.filtersConfig[key];
      this.updateFilter.emit({
        filterCode: key,
        checkMultiSelect: true,
        filter: Object.assign(Object.assign({}, filter), { multiSelect: !filter.multiSelect }),
      });
    };
    this._handleFilterConfig = (value) => () => {
      this.configModal = value;
    };
    this._handleConfigChange = (event) => {
      Object.keys(event.detail).forEach((key) => this.updateFilter.emit({ filterCode: key, checkMultiSelect: false, filter: event.detail[key] }));
    };
    this._handleClearAll = () => {
      this._refs.forEach(ref => {
        var _a;
        (_a = ref['clearFilter']) === null || _a === void 0 ? void 0 : _a.call(ref);
      });
      this.clearAll.emit();
    };
    this._renderChips = () => {
      const chips = Object.keys(this.filtersConfig || {})
        .filter(key => this.filtersConfig[key].visible)
        .sort((a, b) => this.filtersConfig[a].position - this.filtersConfig[b].position);
      return (h(Flex, { row: true, class: "chips__container" }, chips.map(chip => chip === 'date' ? (h("glyph-date-filter", Object.assign({}, this.filtersConfig[chip], { ref: ref => this._refs.push(ref), basePath: this.basePath, locale: this.locale, interface: this.interface, onDateSelection: this._handleOptionClick(chip), onClearEvent: this._handleFilterClear(chip) }))) : (h("glyph-filter", Object.assign({}, this.filtersConfig[chip], { ref: ref => this._refs.push(ref), basePath: this.basePath, locale: this.locale, interface: this.interface, i18n: this._i18n, onOptionClick: this._handleOptionClick(chip), onClear: this._handleFilterClear(chip), onMultiSelectEvent: this._handleMultiSelect(chip) }))))));
    };
    this._renderButtons = () => {
      return (h(Flex, { middle: true, class: "buttons__container" },
        h("glyph-button", { class: "label--l", text: this._i18n['configFilters'], action: this.interface === "redesign" /* redesign */, interface: this.interface, onClick: this._handleFilterConfig(true) }),
        h("glyph-button", { class: this.interface === "redesign" /* redesign */ ? 'label--l label--l--medium' : '', action: this.interface === "redesign" /* redesign */, icon: this.interface !== "redesign" /* redesign */ ? 'close' : undefined, text: this.interface === "redesign" /* redesign */ ? this._i18n['cleanFilters'] : '', interface: this.interface, onClick: this._handleClearAll })));
    };
    this._renderConfigurationModal = () => {
      return (h("glyph-modal", { visible: true, modalTitle: this._i18n['configFilters'], interface: this.interface, closeButton: true, onClose: this._handleFilterConfig(false) },
        h("glyph-config-modal", { filtersConfig: this.filtersConfig, hideZaraSouth: this.hideZaraSouth, interface: this.interface, i18n: this._i18n, onConfigChange: this._handleConfigChange })));
    };
  }
  componentWillLoad() {
    this._initializeVariables();
  }
  async _initializeVariables() {
    const componentI18n = getComponentLocale(this.element, { es, en });
    this._refs = [];
    this._i18n = Object.assign(Object.assign({}, componentI18n), this.i18n);
    this.interface = this.interface || state.interface;
    this.basePath = this.basePath || state.basePath;
  }
  render() {
    return (h(Host, { style: { zIndex: this.configModal ? '99' : 'inherit' } },
      h(Flex, { row: true, middle: true, spaced: true, class: cls('chipsbar__container', this.interface) },
        this._renderChips(),
        this._renderButtons()),
      this.configModal && this._renderConfigurationModal()));
  }
  static get is() { return "glyph-chipsbar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["chipsbar.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["chipsbar.css"]
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
    "filtersConfig": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "FiltersConfig",
        "resolved": "FiltersConfig",
        "references": {
          "FiltersConfig": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Filters configuration object"
      }
    },
    "hideZaraSouth": {
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
        "text": "Hide zara south filters active"
      },
      "attribute": "hide-zara-south",
      "reflect": false,
      "defaultValue": "true"
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
        "text": "Interface type"
      },
      "attribute": "interface",
      "reflect": false
    }
  }; }
  static get states() { return {
    "scrolled": {},
    "configModal": {}
  }; }
  static get events() { return [{
      "method": "filterSelect",
      "name": "filterSelect",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Filter select event"
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
      "method": "filterClear",
      "name": "filterClear",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Filter clear event"
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }, {
      "method": "updateFilter",
      "name": "updateFilter",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Filter multiselect event"
      },
      "complexType": {
        "original": "FilterUpdateEvent",
        "resolved": "FilterUpdateEvent",
        "references": {
          "FilterUpdateEvent": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      }
    }, {
      "method": "clearAll",
      "name": "clearAll",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Clear all filters event"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "element"; }
}
