import { Component, Prop, h, State, Event } from '@stencil/core';
import { cls } from '../../utils/utils';
import Sortable from 'sortablejs';
export class SortableComponent {
  constructor() {
    /** [SortableJS](https://github.com/SortableJS/Sortable#options) list configuration */
    this.config = {};
    this.useHover = true;
    this._createSortable = (el) => {
      this._sortableJsInstance = new Sortable(el, Object.assign(Object.assign({ filter: '.ignore-element', scroll: true }, this.config), { onStart: () => {
          this.useHover = false;
        }, onSort: () => {
          if (this.isChildren) {
            this.childSortCallback(this._sortableJsInstance.toArray());
          }
          else {
            this.sortChange.emit(this._sortableJsInstance.toArray());
          }
        }, onAdd: () => {
          this.add.emit(this._sortableJsInstance.toArray());
        }, onRemove: () => {
          this.remove.emit(this._sortableJsInstance.toArray());
        } }));
    };
    this._handleActionClick = (item) => () => {
      item.action.action(item);
    };
    this._handleChildrenSortChange = (item) => (sortedList) => {
      this.childrenSortChange.emit({ item, sortedList });
    };
  }
  render() {
    const haveIcon = this.list.some(({ icon }) => icon);
    return (h("ul", { ref: this._createSortable, style: { height: `${this.height}px` }, class: "sortable-list__container" }, this.list.map(item => (h("li", { "data-id": item.id, class: cls({
        'fill-icon': haveIcon && !item.icon,
        'use-hover': this.useHover,
        'ignore-element': item.notSortable,
        'header': !!item.children,
      }) },
      h("glyph-sortable-element", { item: item, haveIcon: haveIcon, valueGetter: this.valueGetter, actionClick: this._handleActionClick(item), childrenSort: this._handleChildrenSortChange(item) }))))));
  }
  static get is() { return "glyph-sortable"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sortable.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sortable.css"]
  }; }
  static get properties() { return {
    "list": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "SortableOption[]",
        "resolved": "SortableOption[]",
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
        "text": "List to sort"
      }
    },
    "isChildren": {
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
        "text": "Children flag"
      },
      "attribute": "is-children",
      "reflect": false
    },
    "config": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "SortableOptions",
        "resolved": "SortableOptions",
        "references": {
          "SortableOptions": {
            "location": "import",
            "path": "sortablejs"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "[SortableJS](https://github.com/SortableJS/Sortable#options) list configuration"
      },
      "defaultValue": "{}"
    },
    "height": {
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
        "text": "height property (makes list scrollable)"
      },
      "attribute": "height",
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
    "childSortCallback": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(SortedList: string[]) => any",
        "resolved": "(SortedList: string[]) => any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Child value change"
      }
    }
  }; }
  static get states() { return {
    "useHover": {}
  }; }
  static get events() { return [{
      "method": "sortChange",
      "name": "sortChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event emitted on drag end emitting new list configuration"
      },
      "complexType": {
        "original": "string[]",
        "resolved": "string[]",
        "references": {}
      }
    }, {
      "method": "childrenSortChange",
      "name": "childrenSortChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event emitted on drag end emitting new list configuration"
      },
      "complexType": {
        "original": "SortableChildrenEvent",
        "resolved": "SortableChildrenEvent",
        "references": {
          "SortableChildrenEvent": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      }
    }, {
      "method": "add",
      "name": "add",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event emitted on drag end emitting new list configuration"
      },
      "complexType": {
        "original": "string[]",
        "resolved": "string[]",
        "references": {}
      }
    }, {
      "method": "remove",
      "name": "remove",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event emitted on drag end emitting new list configuration"
      },
      "complexType": {
        "original": "string[]",
        "resolved": "string[]",
        "references": {}
      }
    }]; }
}
