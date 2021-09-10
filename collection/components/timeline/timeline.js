import { Component, Element, Prop, State, h, Listen } from '@stencil/core';
import { Flex } from '../../utils/layout';
import state from '../../utils/store/context.store';
import { getComponentLocale } from '../../utils/utils';
import en from './i18n/timeline.i18n.en.json';
import es from './i18n/timeline.i18n.es.json';
export class TimelineComponent {
  constructor() {
    /** Extra i18n translation object */
    this.i18n = {};
    /** Timeline options */
    this.options = [
      { name: 'calendar', active: true, value: 'calendar' },
      { name: 'events', active: false, value: 'events' },
    ];
    /** Timeline tabs */
    this.tabs = [
      { description: `${new Date().getFullYear()}`, active: true },
      { description: `${new Date().getFullYear() - 1}`, active: false },
    ];
    this._i18n = {};
    this._handleSelect = (event) => {
      this.options = this.options.map(option => (Object.assign(Object.assign({}, option), { active: option.value === event.detail.value })));
    };
    this._handleTab = (event) => {
      this.tabs = this.tabs.map(tab => (Object.assign(Object.assign({}, tab), { active: tab.description === event.detail.description })));
    };
    this._renderEvents = () => {
      const events = this.selectedTimeline === 'calendar' ? this.calendarEvents : this.events;
      return events[this.selectedTab].map((group) => (h(Flex, null,
        h("span", { class: "caption date" }, group.date),
        h(Flex, { class: "event__container" }, group.events.map((event) => (h(Flex, { row: true, class: "event__wrapper" },
          h(Flex, { center: true, class: "event__wrapper__decoration" },
            h("div", { class: "line" }),
            h("div", { class: "circle" }),
            h("div", { class: "line" })),
          h(Flex, null,
            h("h4", null, event.localizedStartTime),
            h("h4", null, event.title),
            h("span", { class: "caption" }, event.description)))))))));
    };
  }
  clickOutside(event) {
    if (!event.path.some((el) => { var _a; return (_a = el.closest) === null || _a === void 0 ? void 0 : _a.call(el, '.timeline__container'); })) {
      this.outsideCallback();
    }
  }
  componentWillLoad() {
    this._initializeVariables();
  }
  componentWillRender() {
    this.selectedTab = this.tabs.find(tab => tab.active).description;
    this.selectedTimeline = this.options.find(option => option.active).name;
  }
  _initializeVariables() {
    const componentI18n = getComponentLocale(this.element, { es, en });
    this._i18n = Object.assign(Object.assign({}, componentI18n), this.i18n);
    this.interface = this.interface || state.interface;
    this.basePath = this.basePath || state.basePath;
    this.options.forEach(option => (option.name = this._i18n[option.name]));
  }
  render() {
    return (h(Flex, { class: "timeline__container" },
      h("glyph-title", { text: "Timeline" }),
      h(Flex, { row: true, spaced: true, middle: true, class: "timeline__options" },
        h("glyph-selector", { options: this.options, interface: this.interface, onOptionSelect: this._handleSelect }),
        h("glyph-tabs", { tabs: this.tabs, onTabSelect: this._handleTab })),
      h(Flex, null, this._renderEvents())));
  }
  static get is() { return "glyph-timeline"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["timeline.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["timeline.css"]
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
        "text": "Base path to get assets dir"
      },
      "attribute": "base-path",
      "reflect": false
    },
    "calendarEvents": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "TimelineEvent[]",
        "resolved": "TimelineEvent[]",
        "references": {
          "TimelineEvent": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Calendar events"
      }
    },
    "events": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "TimelineEvent[]",
        "resolved": "TimelineEvent[]",
        "references": {
          "TimelineEvent": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Events"
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
        "text": "Interface type ['MODERN', 'CLASSIC']"
      },
      "attribute": "interface",
      "reflect": false
    },
    "outsideCallback": {
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
        "text": "Event triggered when user clicks outside component container"
      }
    }
  }; }
  static get states() { return {
    "options": {},
    "tabs": {},
    "selectedTimeline": {},
    "selectedTab": {}
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
