import { Component, Event, Prop, h } from '@stencil/core';
import { Flex } from '../../utils/layout';
import { cls } from '../../utils/utils';
export class TabsComponent {
  constructor() {
    /** Tab rendering style big | small */
    this.tabStyle = "small" /* small */;
    this._selectTab = (selectedTab, index) => () => {
      this.tabs = this.tabs.map((tab, idx) => (Object.assign(Object.assign({}, tab), { active: idx === index })));
      this.tabSelect.emit(selectedTab);
    };
  }
  render() {
    return (h(Flex, { row: true, middle: true, class: "tabs__container" }, this.tabs.map((tab, index) => (h("span", { class: cls('tab', { active: tab.active }, this.tabStyle), onClick: this._selectTab(tab, index) }, tab.description)))));
  }
  static get is() { return "glyph-tabs"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["tabs.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["tabs.css"]
  }; }
  static get properties() { return {
    "tabs": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "Tab[]",
        "resolved": "Tab[]",
        "references": {
          "Tab": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Component tabs"
      }
    },
    "tabStyle": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "TabStyle",
        "resolved": "TabStyle.big | TabStyle.small",
        "references": {
          "TabStyle": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Tab rendering style big | small"
      },
      "attribute": "tab-style",
      "reflect": false,
      "defaultValue": "TabStyle.small"
    }
  }; }
  static get events() { return [{
      "method": "tabSelect",
      "name": "tabSelect",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Tab selection event"
      },
      "complexType": {
        "original": "Tab",
        "resolved": "Tab",
        "references": {
          "Tab": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      }
    }]; }
}
