import { Component, Event, Prop, h } from '@stencil/core';
import { Icon } from '../../utils/icons';
import { Flex } from '../../utils/layout';
import state from '../../utils/store/context.store';
import { cls } from '../../utils/utils';
export class ModalComponent {
  constructor() {
    /** Modal padded flag */
    this.padded = true;
    /** Modal min with */
    this.maxWidth = '80%';
    this._checkClose = (event) => {
      if (!event.path.some((el) => { var _a; return (_a = el.closest) === null || _a === void 0 ? void 0 : _a.call(el, '.modal__container'); }) && this.visible) {
        this.close.emit();
      }
    };
    this._onClose = () => {
      this.close.emit();
    };
    this._onApply = () => {
      this.apply.emit();
    };
    this._onCancel = () => {
      this.cancel.emit();
    };
    this._renderHeader = () => {
      return (h("glyph-title", { interface: this.interface },
        h(Flex, { row: true, middle: true, spaced: !!this.modalTitle, right: !this.modalTitle, class: cls('modal__container__header', this.interface) },
          h("span", null, this.modalTitle && this.modalTitle),
          this.closeButton && h(Icon, { icon: "close", onClick: this._onClose }))));
    };
    this._renderButtons = () => {
      return (h(Flex, { row: true, right: true, middle: true, class: "modal__container__buttons" },
        this.cancelButton && (h("glyph-button", { interface: this.interface, cancel: true, action: true, onClick: this._onCancel, text: this.cancelButton })),
        this.applyButton && (h("glyph-button", { interface: this.interface, onClick: this._onApply, text: this.applyButton }))));
    };
  }
  componentWillLoad() {
    this.interface = this.interface || state.interface;
  }
  render() {
    return (this.visible && (h(Flex, { middle: true, center: true, class: "modal__wrapper animated fadeIn", onClick: this._checkClose },
      h(Flex, { class: cls('modal__container', { padded: this.padded }), style: { maxWidth: this.maxWidth, maxHeight: this.maxHeight, height: this.maxHeight && '100%' } },
        (this.modalTitle || this.closeButton) && this._renderHeader(),
        h("slot", null),
        (this.applyButton || this.cancelButton) && this._renderButtons()))));
  }
  static get is() { return "glyph-modal"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["modal.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["modal.css"]
  }; }
  static get properties() { return {
    "visible": {
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
        "text": "Modal visibility flag"
      },
      "attribute": "visible",
      "reflect": false
    },
    "modalTitle": {
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
        "text": "Modal title"
      },
      "attribute": "modal-title",
      "reflect": false
    },
    "padded": {
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
        "text": "Modal padded flag"
      },
      "attribute": "padded",
      "reflect": false,
      "defaultValue": "true"
    },
    "maxWidth": {
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
        "text": "Modal min with"
      },
      "attribute": "max-width",
      "reflect": false,
      "defaultValue": "'80%'"
    },
    "maxHeight": {
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
        "text": "Modal min height"
      },
      "attribute": "max-height",
      "reflect": false
    },
    "closeButton": {
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
        "text": "Close button flag"
      },
      "attribute": "close-button",
      "reflect": false
    },
    "cancelButton": {
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
        "text": "Cancel button text. Renders button if set"
      },
      "attribute": "cancel-button",
      "reflect": false
    },
    "applyButton": {
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
        "text": "Apply button text. Renders button if set"
      },
      "attribute": "apply-button",
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
    }
  }; }
  static get events() { return [{
      "method": "close",
      "name": "close",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "close event"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "apply",
      "name": "apply",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "apply event"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "cancel",
      "name": "cancel",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "cancel event"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
