import { Component, Listen, Prop, h } from '@stencil/core';
import { Flex } from '../../utils/layout';
export class NotificationsComponent {
  clickOutside(event) {
    if (!event.path.some((el) => { var _a; return (_a = el.closest) === null || _a === void 0 ? void 0 : _a.call(el, '.notifications__container'); })) {
      this.outsideCallback();
    }
  }
  render() {
    return (h(Flex, { class: "notifications__container" },
      h("slot", null)));
  }
  static get is() { return "glyph-notifications"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["notifications.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["notifications.css"]
  }; }
  static get properties() { return {
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
  static get listeners() { return [{
      "name": "click",
      "method": "clickOutside",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
