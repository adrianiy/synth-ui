import { Component, getAssetPath, Listen, Prop, h, Event, Element } from '@stencil/core';
import { Flex } from '../../utils/layout';
import state from '../../utils/store/context.store';
export class BrandListComponent {
  constructor() {
    this._handleBrandChange = (brand) => () => {
      this.brandChange.emit(brand);
    };
  }
  clickOutside(event) {
    if (!event.path.some((el) => { var _a; return (_a = el.closest) === null || _a === void 0 ? void 0 : _a.call(el, '.brand-list__container'); })) {
      this.outsideCallback();
    }
  }
  componentWillLoad() {
    this.basePath = this.basePath || state.basePath;
  }
  render() {
    return (h(Flex, { column: true, class: "brand-list__container" }, this.brandList.map((brand) => (h(Flex, { column: true, middle: true, center: true, class: "brand__container", onClick: this._handleBrandChange(brand) },
      h("img", { src: getAssetPath(`${this.basePath}assets/brands/icon_${brand.name}.svg`) }))))));
  }
  static get is() { return "glyph-brand-list"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["brand-list.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["brand-list.css"]
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
    "brandList": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Brand[]",
        "resolved": "Brand[]",
        "references": {
          "Brand": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Brand list"
      }
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
        "text": "Event triggered when user clicks outside"
      }
    }
  }; }
  static get events() { return [{
      "method": "brandChange",
      "name": "brandChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event triggerd on brand click"
      },
      "complexType": {
        "original": "Brand",
        "resolved": "Brand",
        "references": {
          "Brand": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      }
    }]; }
  static get elementRef() { return "element"; }
  static get listeners() { return [{
      "name": "click",
      "method": "clickOutside",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
