import { h, Component, Prop, State } from '@stencil/core';
import { Icon } from '../../../../utils/icons';
import { Flex } from '../../../../utils/layout';
import { cls } from '../../../../utils/utils';
export class SortableElementComponent {
  constructor() {
    this.expanded = false;
    this._handleRowClick = () => {
      if (this.item.children) {
        this.expanded = !this.expanded;
      }
    };
  }
  render() {
    const { name, icon, children, action, style } = this.item;
    const config = {
      group: `sortable-children--${name}`,
      sort: true,
    };
    return (h(Flex, { column: true },
      h(Flex, { middle: true, row: true, spaced: true, class: cls('sortable-item', { header: !!children }), style: style, onClick: this._handleRowClick },
        h(Flex, { middle: true, row: true, class: "name" },
          children && h(Icon, { icon: this.expanded ? 'remove' : 'add' }),
          icon && !children && h(Icon, { icon: "drag_indicator", class: icon }),
          this.valueGetter ? this.valueGetter(this.item) : name),
        action && h(Icon, { class: "action", icon: action.icon, onClick: this.actionClick })),
      this.expanded && (h("glyph-sortable", { isChildren: true, config: config, list: children, childSortCallback: this.childrenSort }))));
  }
  static get is() { return "glyph-sortable-element"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./sortable-element.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sortable-element.css"]
  }; }
  static get properties() { return {
    "item": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "SortableOption",
        "resolved": "SortableOption",
        "references": {
          "SortableOption": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Sortable item configuration"
      }
    },
    "haveIcon": {
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
        "text": "This variable should be truthy if any element in list renders an icon to align items"
      },
      "attribute": "have-icon",
      "reflect": false
    },
    "valueGetter": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(item: any) => string",
        "resolved": "(item: any) => string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Value renderer, if not set list will render `name` property"
      }
    },
    "actionClick": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "() => any",
        "resolved": "() => any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Action click callback"
      }
    },
    "childrenSort": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(sortedList: string[]) => any",
        "resolved": "(sortedList: string[]) => any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Children sort callback"
      }
    }
  }; }
  static get states() { return {
    "expanded": {}
  }; }
}
