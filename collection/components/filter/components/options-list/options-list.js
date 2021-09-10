import { Component, h, Prop } from '@stencil/core';
import { Icon } from '../../../../utils/icons';
import { Flex } from '../../../../utils/layout';
import state from '../../../../utils/store/context.store';
import { cls } from '../../../../utils/utils';
import { inSearch, renderOptionDescription } from '../../utils/utils';
export class OptionsListComponent {
  constructor() {
    /** Extra i18n translation object */
    this.i18n = {};
    this._renderOptionHeader = (option, filterQuantity) => {
      const childInSearch = option.children.some(child => inSearch(child, this.searchValue, this.i18n));
      const expanded = option.expanded || (this.searchValue && childInSearch) || filterQuantity === 1;
      return (childInSearch && (h("glyph-filter-drilldown-options", { option: Object.assign({}, option), interface: this.interface, searchValue: this.searchValue, optionClick: this.optionClick, i18n: this.i18n, expanded: expanded })));
    };
    this._renderOption = (option) => {
      return (h(Flex, { row: true, spaced: true, onClick: this.optionClick(option), class: cls('option', { active: option.active }) },
        renderOptionDescription(this.i18n[option.description] || option.description, this.searchValue),
        option.active && h(Icon, { icon: "checkmark" })));
    };
  }
  componentWillLoad() {
    this.interface = this.interface || state.interface;
  }
  _checkHide(option) {
    const { parents } = option;
    const hideKeys = Object.keys(parents || {})
      .map(key => `${key}Hide`)
      .concat('hide');
    return !hideKeys.some(key => option[key]);
  }
  render() {
    const renderableOptions = this.options
      .filter(option => option.display &&
      !option.hideFilter &&
      inSearch(option, this.searchValue, this.i18n) &&
      this._checkHide(option))
      .sort((a, b) => a.position - b.position);
    return (h("ul", { style: this.listStyle, class: this.interface }, renderableOptions.map(option => (h("li", null, option.header
      ? this._renderOptionHeader(option, renderableOptions.length)
      : this._renderOption(option))))));
  }
  static get is() { return "glyph-filter-options-list"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["options-list.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["options-list.css"]
  }; }
  static get properties() { return {
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
    "listStyle": {
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
        "text": "Style applied in list"
      }
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
    "searchValue": {
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
        "text": "Search value"
      },
      "attribute": "search-value",
      "reflect": false
    },
    "optionClick": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(option: FilterOptionHeader) => (event: any) => void",
        "resolved": "(option: FilterOptionHeader) => (event: any) => void",
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
    }
  }; }
}
