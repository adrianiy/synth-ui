import { h, Component, Prop, State, Event } from '@stencil/core';
import { Flex } from '../../../../utils/layout';
import state from '../../../../utils/store/context.store';
export class ConfigModalComponent {
  constructor() {
    /** Extra i18n translation object */
    this.i18n = {};
    this._closeEditableFilter = () => {
      this.editableFilter = undefined;
    };
    this._toggleZaraSouth = () => {
      this.zaraSouthHidden = !this.zaraSouthHidden;
      Object.keys(this.filtersConfig).forEach((key) => {
        var _a;
        const filter = this.filtersConfig[key];
        filter.options = (_a = filter.options) === null || _a === void 0 ? void 0 : _a.map(this._checkZaraSouthHide);
      });
      localStorage.setItem('glyph.hideSouthFilters', `${this.zaraSouthHidden}`);
    };
    this._checkZaraSouthHide = (option) => {
      var _a, _b;
      const haveZaraSouth = (_a = option.brand) === null || _a === void 0 ? void 0 : _a.includes(16);
      const children = (_b = option.children) === null || _b === void 0 ? void 0 : _b.map(this._checkZaraSouthHide);
      return Object.assign(Object.assign({}, option), { children, hideFilter: haveZaraSouth && this.zaraSouthHidden });
    };
    this._getCode = (option) => {
      return [option.code, option.description].flat().join('-');
    };
    this._handleSortChange = ({ detail: sortedList }) => {
      sortedList.forEach((key, position) => {
        if (key) {
          this.filtersConfig[key].position = position;
        }
      });
      this.configChange.emit(this.filtersConfig);
    };
    this._handleOptionSortChange = ({ detail: sortedList }) => {
      const filter = this.filtersConfig[this.editableFilter];
      sortedList.forEach((key, position) => {
        const option = filter.options.find(option => this._getCode(option) === key);
        option.position = position;
      });
      this.filtersConfig = Object.assign(Object.assign({}, this.filtersConfig), { [this.editableFilter]: filter });
      this.configChange.emit(this.filtersConfig);
    };
    this._handleChildrenSortChange = ({ detail: { sortedList, item } }) => {
      const filter = this.filtersConfig[this.editableFilter];
      const optionIndex = filter.options.findIndex(option => this._getCode(option) === item.id);
      sortedList.forEach((key, position) => {
        const option = filter.options[optionIndex].children.find(child => this._getCode(child) === key);
        option.position = position;
      });
      this.filtersConfig = Object.assign(Object.assign({}, this.filtersConfig), { [this.editableFilter]: filter });
      this.configChange.emit(this.filtersConfig);
    };
    this._handleAdd = (from) => ({ detail: sortedList }) => {
      const visible = from === 'visible';
      sortedList.forEach((id, position) => {
        this.filtersConfig[id] = Object.assign(Object.assign({}, this.filtersConfig[id]), { position, visible });
      });
      this.configChange.emit(this.filtersConfig);
    };
    this._handleEdit = (key) => () => {
      this.editableFilter = key;
    };
    this._handleOptionVisibility = (item) => {
      const filter = this.filtersConfig[this.editableFilter];
      const index = filter.options.findIndex(({ code, description }) => [code, description].flat().join('-') === item.id);
      const display = !filter.options[index].display;
      filter.options[index].display = display;
      this.configChange.emit(Object.assign(Object.assign({}, this.filtersConfig), { [this.editableFilter]: filter }));
    };
    this._handleChildrenVisibility = (parentId) => (item) => {
      const filter = this.filtersConfig[this.editableFilter];
      const optionIndex = filter.options.findIndex(({ code, description }) => [code, description].flat().join('-') === parentId);
      const childrenIndex = filter.options[optionIndex].children.findIndex(({ code, description }) => [code, description].flat().join('-') === item.id);
      const display = !filter.options[optionIndex].children[childrenIndex].display;
      filter.options[optionIndex].children[childrenIndex].display = display;
      this.configChange.emit(Object.assign(Object.assign({}, this.filtersConfig), { [this.editableFilter]: filter }));
    };
    this._renderSortableList = (from, filters, action) => {
      const sortableOptions = filters.map((key) => ({
        name: key === 'date' ? key : this.filtersConfig[key].description,
        id: key,
        icon: "always" /* always */,
        action: action && key !== 'date' ? { icon: 'edit', action: this._handleEdit(key) } : null,
      }));
      const config = {
        group: 'config-modal',
        sort: true,
      };
      return (h(Flex, { column: true, left: true, class: "configuration-modal__list" },
        h("h5", null, this.i18n[`modal.${from}`]),
        h("glyph-sortable", { height: 200, config: config, list: sortableOptions, onSortChange: this._handleSortChange, onAdd: this._handleAdd(from) })));
    };
    this._renderSortableOptions = () => {
      const filter = this.filtersConfig[this.editableFilter];
      const config = {
        group: 'config-modal--options',
        sort: true,
      };
      const sortableOptions = filter.options.map(option => {
        const { description: name, display, hideFilter, children } = option;
        const id = this._getCode(option);
        const visible = display && !hideFilter;
        let childrenOptions;
        if (children) {
          childrenOptions = children.map((child) => ({
            name: child.description,
            id: this._getCode(child),
            icon: "always" /* always */,
            style: {
              'opacity': child.display && !child.hideFilter && visible ? 1 : 0.5,
              'padding-left': 'var(--gui-padding--l)',
            },
            action: {
              icon: `visibility${child.display && !child.hideFilter ? '' : '_off'}`,
              action: this._handleChildrenVisibility(id),
            },
          }));
        }
        return {
          id,
          name,
          icon: "always" /* always */,
          children: childrenOptions,
          style: { opacity: visible ? 1 : 0.5 },
          action: {
            icon: `visibility${display && !hideFilter ? '' : '_off'}`,
            action: this._handleOptionVisibility,
          },
        };
      });
      return (h(Flex, { column: true, left: true, class: "configuration-modal__list--options" },
        h(Flex, { spaced: true, row: true, top: true, class: "configuration-modal__list--options__header" },
          h("h5", null, filter.description),
          h("em", { class: "material-icons", onClick: this._closeEditableFilter }, "close")),
        h("glyph-sortable", { height: 200, config: config, list: sortableOptions, onSortChange: this._handleOptionSortChange, onChildrenSortChange: this._handleChildrenSortChange })));
    };
    this._renderZaraSouthToggler = () => {
      return (h(Flex, { row: true, right: true, middle: true, class: "toggler__container" },
        h("span", null, this.i18n['modal.hideSouthFilters']),
        h("glyph-toggler", { active: this.zaraSouthHidden, interface: this.interface, onClick: this._toggleZaraSouth })));
    };
  }
  componentWillLoad() {
    this.interface = this.interface || state.interface;
    const savedZaraSouth = localStorage.getItem('glyph.hideSouthFilters');
    this.zaraSouthHidden = savedZaraSouth === 'true';
    Object.keys(this.filtersConfig).forEach((key) => {
      var _a, _b;
      const filter = this.filtersConfig[key];
      filter.options = (_b = (_a = filter.options) === null || _a === void 0 ? void 0 : _a.map(option => { var _a; return (Object.assign(Object.assign({}, option), { children: (_a = option.children) === null || _a === void 0 ? void 0 : _a.sort((a, b) => a.position - b.position) })); })) === null || _b === void 0 ? void 0 : _b.sort((a, b) => a.position - b.position);
    });
    this.hiddenFilters = Object.keys(this.filtersConfig)
      .filter(key => !this.filtersConfig[key].visible)
      .sort((a, b) => this.filtersConfig[a].position - this.filtersConfig[b].position);
    this.visibleFilters = Object.keys(this.filtersConfig)
      .filter(key => this.filtersConfig[key].visible)
      .sort((a, b) => this.filtersConfig[a].position - this.filtersConfig[b].position);
  }
  render() {
    return (h(Flex, { column: true, class: "configuration-modal__container" },
      h("span", null, this.i18n['modal.description']),
      h("div", { class: "configuration-modal__lists" },
        this._renderSortableList('hidden', this.hiddenFilters),
        this._renderSortableList('visible', this.visibleFilters, true),
        this.editableFilter && this._renderSortableOptions()),
      this.hideZaraSouth && this._renderZaraSouthToggler()));
  }
  static get is() { return "glyph-config-modal"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./config-modal.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["config-modal.css"]
  }; }
  static get properties() { return {
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
        "text": "Filters configuration"
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
        "text": "Interface type [ 'MODERN', 'CLASSIC' ]"
      },
      "attribute": "interface",
      "reflect": false
    }
  }; }
  static get states() { return {
    "hiddenFilters": {},
    "visibleFilters": {},
    "editableFilter": {},
    "zaraSouthHidden": {}
  }; }
  static get events() { return [{
      "method": "configChange",
      "name": "configChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Filter configuration change event"
      },
      "complexType": {
        "original": "FiltersConfig",
        "resolved": "FiltersConfig",
        "references": {
          "FiltersConfig": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      }
    }]; }
}
