var __rest = (this && this.__rest) || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
import { h, Component, Element, Event, Prop, State, Listen, Method } from '@stencil/core';
import { Flex } from '../../utils/layout';
import { cls, getComponentLocale } from '../../utils/utils';
import { Icon } from '../../utils/icons';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import state from '../../utils/store/context.store';
import en from './i18n/date-filter.i18n.en.json';
import es from './i18n/date-filter.i18n.es.json';
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
export class DateFilterComponent {
  constructor() {
    /** Number of months to be shown. 2 by default */
    this.months = 2;
    /** Comparabel type */
    this.comparableType = "commercial" /* commercial */;
    /** Extra i18n translation object */
    this.i18n = {};
    /** Filter expanded flag */
    this.expanded = false;
    /** Comparable input active flag */
    this.comparableActive = false;
    /** Custom comparable flag */
    this.isCustomComparable = false;
    this._scrollbarInit = (ps) => {
      if (!this.ps) {
        this.ps = ps;
      }
    };
    this._getDateValues = () => {
      const option = this.options.find(option => option.active);
      this.startDate = option.startDate;
      this.endDate = option.endDate;
      this.comparableStartDate = option.comparableStartDate;
      this.comparableEndDate = option.comparableEndDate;
      this.comparableType = option.comparableType || this.comparableType;
      const comparable = this._getComparableText();
      this.active = !option.isDefault;
      this.chipDescription =
        option.description ||
          `${dayjs(this.startDate).format('YYYY-MM-DD')} - ${dayjs(this.endDate).format('YYYY-MM-DD')}${comparable}`;
    };
    this._expandFilter = () => {
      this.expanded = !this.expanded;
    };
    this._changeActiveInput = (value) => () => {
      this.comparableActive = value;
    };
    this._onClear = (event) => {
      this.comparableActive = false;
      this.isCustomComparable = false;
      this._setDefault();
      this.expanded = false;
      this.clearEvent.emit();
      event === null || event === void 0 ? void 0 : event.stopPropagation();
    };
    this._setDefault = () => {
      const defaultValue = this.options.find(range => range.isDefault);
      if (defaultValue) {
        this._selectRange(defaultValue)();
      }
    };
    this._selectRange = (dateRange) => () => {
      this.options.forEach(option => (option.active = false));
      dateRange.active = true;
      this._selectDate({ detail: dateRange });
    };
    this._selectCustomDate = ({ startDate, endDate, comparableStartDate, comparableEndDate }) => {
      this.options.forEach(option => (option.active = false));
      const custom = this.options.find(option => !option.description);
      custom.active = true;
      custom.startDate = startDate;
      custom.endDate = endDate;
      custom.comparableStartDate = comparableStartDate;
      custom.comparableEndDate = comparableEndDate;
    };
    this._selectDate = (_a) => {
      var _b = _a.detail, { startDate, endDate, description, comparableStartDate, comparableEndDate, comparableType } = _b, rest = __rest(_b, ["startDate", "endDate", "description", "comparableStartDate", "comparableEndDate", "comparableType"]);
      const event = Object.assign({ description,
        startDate,
        endDate,
        comparableStartDate,
        comparableEndDate, comparableType: comparableType || this.comparableType }, rest);
      if (!description) {
        this._selectCustomDate(event);
      }
      this._getDateValues();
      this.dateSelection.emit(event);
      this.expanded = false;
    };
    this._selectCompDate = ({ detail: { startDate: comparableStartDate, endDate: comparableEndDate }, }) => {
      this._selectCustomDate({
        startDate: this.startDate,
        endDate: this.endDate,
        comparableStartDate,
        comparableEndDate,
      });
      this._getDateValues();
    };
    this._selectOption = ({ detail: { name, value } }) => {
      this.comparableType = value;
      this.isCustomComparable = this.comparableType === "custom" /* custom */;
      this.comparableOptions.forEach(option => (option.active = option.name === name));
      if (this.isCustomComparable) {
        this.options.forEach(option => (option.active = false));
        const custom = this.options.find(option => !option.description);
        const dayDiff = dayjs(this.endDate).diff(dayjs(this.startDate), 'day');
        custom.comparableStartDate = dayjs(this.startDate)
          .subtract(dayDiff + 1, 'day')
          .toDate();
        custom.comparableEndDate = dayjs(this.startDate).subtract(1, 'day').toDate();
        this.comparableActive = true;
      }
      this._getDateValues();
    };
    this._handleInputStart = ({ detail: startDate }) => {
      const isAllowed = dayjs(startDate).isSameOrBefore(dayjs(this.endDate));
      if (isAllowed) {
        this.startDate = dayjs(startDate).toDate();
      }
    };
    this._handeInputEnd = ({ detail: endDate }) => {
      const isAllowed = dayjs(endDate).isSameOrAfter(dayjs(this.startDate));
      if (isAllowed) {
        this.endDate = dayjs(endDate).toDate();
      }
    };
    this._handleComparableInputStart = ({ detail: startDate }) => {
      const isAllowed = dayjs(startDate).isSameOrBefore(dayjs(this.comparableEndDate));
      if (isAllowed) {
        this.comparableStartDate = dayjs(startDate).toDate();
      }
    };
    this._handeComparableInputEnd = ({ detail: endDate }) => {
      const isAllowed = dayjs(endDate).isSameOrAfter(dayjs(this.comparableStartDate));
      if (isAllowed) {
        this.comparableEndDate = dayjs(endDate).toDate();
      }
    };
    this._handleApply = () => {
      this._selectDate({
        detail: {
          startDate: this.startDate,
          endDate: this.endDate,
        },
      });
      this._getDateValues();
    };
    this._renderDateRanges = () => {
      return (this.options && (h("glyph-scroll", { tiny: true, initCallback: this._scrollbarInit, containerClass: "date-filter__date-ranges" },
        h("ul", { class: "date-filter__date-ranges" }, this.options.map(range => {
          const active = range.active;
          return (h("li", { onClick: this._selectRange(range), class: { active } },
            h(Flex, { row: true, middle: true, spaced: true },
              h("span", null, this._i18n[range.description]),
              active && h("em", { class: "material-icons" }, "checkmark"))));
        })))));
    };
    this._renderCalendars = () => {
      return (h("glyph-calendar", { minDate: this.minDate, maxDate: this.maxDate, minDateAux: this.minComparableDate, maxDateAux: this.maxComparableDate, startDate: this.startDate, endDate: this.endDate, startDateAux: this.isCustomComparable && this.comparableStartDate, endDateAux: this.isCustomComparable && this.comparableEndDate, months: this.months, auxActive: this.isCustomComparable, interface: this.interface, secondary: this.isCustomComparable && this.comparableActive, onDateSelect: this._selectDate, onDateSelectAux: this._selectCompDate }));
    };
    this._renderComparableInputs = () => {
      var _a;
      const active = this.isCustomComparable || this.comparableActive;
      const diff = this.comparableType === "calendar" /* calendar */ ? 365 : 364;
      const startDate = this.isCustomComparable
        ? this.comparableStartDate
        : dayjs(this.startDate).subtract(diff, 'day');
      const endDate = this.isCustomComparable ? this.comparableEndDate : dayjs(this.endDate).subtract(diff, 'day');
      return [
        h(Flex, { row: true, spaced: true, top: true, class: "input__header" },
          this.interface === "redesign" /* redesign */ ? (h("span", { class: "label--l" }, this._i18n['Comparable date'])) : (h("h5", null, this._i18n['Comparable date'])),
          ((_a = this.comparableOptions) === null || _a === void 0 ? void 0 : _a.length) && (h("glyph-selector", { options: this.comparableOptions, interface: this.interface, onOptionSelect: this._selectOption }))),
        h(Flex, { row: true, spaced: true, class: cls('date-filter__inputs__comparable', { active }) },
          h("glyph-input", { box: true, disabled: !this.isCustomComparable, "input-type": "date", interface: this.interface, value: dayjs(startDate).format('YYYY-MM-DD'), min: dayjs(this.minComparableDate).format('YYYY-MM-DD'), max: dayjs(this.maxComparableDate).format('YYYY-MM-DD'), onClick: this._changeActiveInput(true), onInputChange: this._handleComparableInputStart }),
          h("glyph-input", { box: true, disabled: !this.isCustomComparable, "input-type": "date", interface: this.interface, value: dayjs(endDate).format('YYYY-MM-DD'), min: dayjs(this.minComparableDate).format('YYYY-MM-DD'), max: dayjs(this.maxComparableDate).format('YYYY-MM-DD'), onClick: this._changeActiveInput(true), onInputChange: this._handeComparableInputEnd })),
      ];
    };
    this._renderCurrentInputs = () => {
      const active = !this.isCustomComparable || !this.comparableActive;
      return [
        this.interface === "redesign" /* redesign */ && h("span", { class: "label--l" }, this._i18n['Current date']),
        this.interface !== "redesign" /* redesign */ && h("h5", null, this._i18n['Current date']),
        h(Flex, { row: true, spaced: true, class: cls('date-filter__inputs__current', { active }) },
          h("glyph-input", { box: true, "input-type": "date", interface: this.interface, onInputChange: this._handleInputStart, value: dayjs(this.startDate).format('YYYY-MM-DD'), min: dayjs(this.minDate).format('YYYY-MM-DD'), max: dayjs(this.maxDate).format('YYYY-MM-DD'), onClick: this._changeActiveInput(false) }),
          h("glyph-input", { box: true, "input-type": "date", interface: this.interface, onInputChange: this._handeInputEnd, value: dayjs(this.endDate).format('YYYY-MM-DD'), min: dayjs(this.minDate).format('YYYY-MM-DD'), max: dayjs(this.maxDate).format('YYYY-MM-DD'), onClick: this._changeActiveInput(false) })),
      ];
    };
    this._renderInputs = () => {
      return (h(Flex, { column: true, left: true, class: "date-filter__inputs" },
        this._renderCurrentInputs(),
        this._renderComparableInputs(),
        h(Flex, { row: true, right: true, middle: true, class: "date-filter__inputs__buttons" },
          h("glyph-button", { text: this._i18n['apply'], interface: this.interface, onClick: this._handleApply }))));
    };
    this._renderCalendarDrilldown = () => {
      return (h("div", { class: cls('date-filter__container', this.interface) },
        this._renderDateRanges(),
        this._renderCalendars(),
        this._renderInputs()));
    };
    this._getComparableText = () => {
      switch (this.comparableType) {
        case "calendar" /* calendar */:
          return ` - Comp: ${this._i18n[this.comparableType]}`;
        case "custom" /* custom */:
          return ` - Comp: ${dayjs(this.comparableStartDate).format('YYYY-MM-DD')} - ${dayjs(this.comparableEndDate).format('YYYY-MM-DD')}`;
        default:
          return '';
      }
    };
  }
  clickOutside(event) {
    if (!event.composedPath().includes(this.element)) {
      this.expanded = false;
    }
  }
  componentWillRender() {
    this._getDateValues();
  }
  /* eslint-disable @stencil/decorators-style, @stencil/async-methods  */
  /** This method will return image height */
  async clearFilter() {
    this._onClear();
  }
  componentWillLoad() {
    const componentI18n = getComponentLocale(this.element, { es, en });
    this._i18n = Object.assign(Object.assign({}, componentI18n), this.i18n);
    this.interface = this.interface || state.interface;
    this.basePath = this.basePath || state.basePath;
  }
  render() {
    const active = this.active;
    return (h(Flex, { class: this.interface },
      h(Flex, { row: true, middle: true, class: cls('filter-chip', {
          expanded: this.expanded,
          active,
        }, this.interface), onClick: this._expandFilter },
        h("span", { class: cls('label--l', {
            'label--l--medium': this.interface === "redesign" /* redesign */,
          }) }, this._i18n[this.chipDescription] || this.chipDescription),
        h(Icon, { onClick: active ? this._onClear : null, icon: active
            ? 'close'
            : this.interface === "classic" /* classic */
              ? 'arrow_drop_down'
              : 'expand_more' })),
      this.expanded && this._renderCalendarDrilldown()));
  }
  static get is() { return "glyph-date-filter"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["date-filter.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["date-filter.css"]
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
    "active": {
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
        "text": "Active flag"
      },
      "attribute": "active",
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
    "minDate": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Date",
        "resolved": "Date",
        "references": {
          "Date": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Minimum available date"
      }
    },
    "maxDate": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Date",
        "resolved": "Date",
        "references": {
          "Date": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Maximum available date"
      }
    },
    "minComparableDate": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Date",
        "resolved": "Date",
        "references": {
          "Date": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Minimum available comp date"
      }
    },
    "maxComparableDate": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Date",
        "resolved": "Date",
        "references": {
          "Date": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Maximum available comp date"
      }
    },
    "singleSelect": {
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
        "text": "Allow single day selection"
      },
      "attribute": "single-select",
      "reflect": false
    },
    "months": {
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
        "text": "Number of months to be shown. 2 by default"
      },
      "attribute": "months",
      "reflect": false,
      "defaultValue": "2"
    },
    "comparableType": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "ComparableType",
        "resolved": "ComparableType.calendar | ComparableType.commercial | ComparableType.custom | ComparableType.ordinal",
        "references": {
          "ComparableType": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Comparabel type"
      },
      "attribute": "comparable-type",
      "reflect": false,
      "defaultValue": "ComparableType.commercial"
    },
    "comparableOptions": {
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
        "text": "Comparable options"
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
    "description": {},
    "startDate": {},
    "endDate": {},
    "comparableActive": {},
    "comparableStartDate": {},
    "comparableEndDate": {},
    "isCustomComparable": {},
    "chipDescription": {},
    "ps": {}
  }; }
  static get events() { return [{
      "method": "dateSelection",
      "name": "dateSelection",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Date selection event"
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
      "method": "clearEvent",
      "name": "clearEvent",
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
