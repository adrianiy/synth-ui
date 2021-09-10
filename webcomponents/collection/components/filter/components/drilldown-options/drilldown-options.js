import { Component, h, Prop, State } from '@stencil/core';
import { Icon } from '../../../../utils/icons';
import { Flex } from '../../../../utils/layout';
import state from '../../../../utils/store/context.store';
import { cls } from '../../../../utils/utils';
import { inSearch, renderOptionDescription } from '../../utils/utils';
export class FilterDrilldownOptionsComponent {
  constructor() {
    /** Extra i18n translation object */
    this.i18n = {};
    /** Expanded flag */
    this.expanded = false;
    /** Expanded state */
    this.expandedState = false;
    this._handleClick = (event) => {
      this.expandedState = !this.expandedState;
      event === null || event === void 0 ? void 0 : event.stopPropagation();
      event === null || event === void 0 ? void 0 : event.preventDefault();
    };
    this._renderOptionsList = () => {
      const { children } = this.option;
      return (h("glyph-filter-options-list", { listStyle: { 'padding-left': 'var(--gui-padding--l)' }, options: children, i18n: this.i18n, interface: this.interface, searchValue: this.searchValue, optionClick: this.optionClick }));
    };
  }
  componentWillLoad() {
    const anyActive = this.option.children.some(child => child.active || (this.searchValue && inSearch(child, this.searchValue, this.i18n)));
    this.expandedState = this.expandedState || anyActive;
    this.interface = this.interface || state.interface;
  }
  render() {
    const { description } = this.option;
    const expanded = this.expanded || this.expandedState;
    return (h(Flex, { class: "children__container" },
      h(Flex, { row: true, middle: true, class: cls('children--header', { expanded }), onClick: this._handleClick },
        this.interface === "redesign" /* redesign */ ? (h("glyph-icon", { icon: expanded ? 'chevron-right' : 'chevron-down', class: "expand-icon" })) : (h(Icon, { icon: expanded ? 'remove' : 'add', class: "expand-icon" })),
        h("span", null, renderOptionDescription(description, this.searchValue))),
      expanded && this._renderOptionsList()));
  }
  static get is() { return "glyph-filter-drilldown-options"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["drilldown-options.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["drilldown-options.css"]
  }; }
  static get properties() { return {
    "option": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "FilterOptionHeader",
        "resolved": "FilterOptionHeader",
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
    },
    "expanded": {
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
        "text": "Expanded flag"
      },
      "attribute": "expanded",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "expandedState": {}
  }; }
}
