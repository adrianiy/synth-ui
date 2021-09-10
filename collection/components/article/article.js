import { Component, Element, Event, h, Method, Prop, State } from '@stencil/core';
import { Format } from '../../utils/format';
import { Flex } from '../../utils/layout';
import state from '../../utils/store/context.store';
import { cls, getComponentLocale } from '../../utils/utils';
import en from './i18n/article.i18n.en.json';
import es from './i18n/article.i18n.es.json';
export class ArticleComponent {
  constructor() {
    /** Loading flag */
    this.loading = false;
    /** Aspect ratio used to calculate loader height */
    this.aspectRatio = 340 / 512;
    /** Force visibility flag */
    this.isVisible = false;
    /** Image type to render image | plain_image */
    this.imageType = 'image';
    /** Decorate with backdrop filter, solves some performance issues (in storybook) */
    this.useBackdropDecoration = true;
    /** Extra i18n translation object */
    this.i18n = {};
    /** Article size calculated after render to print small letters if necessary */
    this.articleSize = "large" /* large */;
    this._id = new Date().valueOf();
    this._handleClick = () => {
      if (this.isClickable) {
        this.articleClick.emit(this.article);
      }
    };
    this._setArticleRef = (el) => {
      this._article = el;
    };
    this._onIntersection = async (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.articleVisible.emit();
          this._getArticleSize();
        }
      });
    };
    this._handleCopy = () => {
      const partnumber = this.article.reference;
      const copylistener = (e) => {
        e.clipboardData.setData('text/plain', partnumber);
        e.preventDefault();
      };
      document.addEventListener('copy', copylistener);
      let success = 0;
      try {
        document.execCommand('copy');
        success = 1;
      }
      catch (err) {
        success = 0;
      }
      finally {
        document.removeEventListener('copy', copylistener);
      }
      window.dispatchEvent(new CustomEvent(`copyReference${this._id}`, {
        detail: {
          text: this._i18n[success ? 'copyDone' : 'copyFail'],
          icon: success ? 'checkmark' : 'close',
          type: success ? "success" /* succes */ : "fail" /* fail */,
        },
      }));
    };
    this._renderQuantity = () => {
      const quantity = { value: this.article[this.quantityField], format: '0,0' };
      return (h(Flex, { left: true, class: `quantity ${this.useBackdropDecoration && 'quantity--backdrop'}` },
        h(Format, { config: quantity }),
        h("span", { class: "caption" }, this._i18n[this.quantityField])));
    };
    this._showTooltip = (from) => () => {
      this.tooltip = from;
    };
    this._hideTooltip = () => {
      this.tooltip = undefined;
    };
    this._renderTagsTooltip = () => {
      const tags = this.article[this.tooltip];
      const title = this._i18n[`${this.tooltip}.title`];
      const { x, y, width } = this.element.getBoundingClientRect();
      const leftFix = this.articleSize === "small" /* small */ ? 218 : 230;
      const top = `${y + 5}px`;
      const left = `${x + width - leftFix}px`;
      const isResume = tags.length > 7;
      return (h(Flex, { left: true, class: "tag-tooltip", style: { top, left } },
        h("h3", null, title),
        isResume && (h("span", { class: "caption" },
          tags.length,
          " ",
          this._i18n['tags.countries'])),
        !isResume &&
          tags.map(tag => (h(Flex, { row: true, spaced: true, class: "tag-row" },
            h("span", { class: "country" }, tag.name),
            h("span", { class: "start" }, tag.inicio))))));
    };
    this._renderTags = () => {
      var _a, _b, _c, _d;
      const hasTags = ((_a = this.article.new) === null || _a === void 0 ? void 0 : _a.length) || ((_b = this.article.pvps) === null || _b === void 0 ? void 0 : _b.length);
      if (hasTags) {
        return (h(Flex, { center: true, class: "tags", onMouseLeave: this._hideTooltip },
          ((_c = this.article.new) === null || _c === void 0 ? void 0 : _c.length) && (h(Flex, { row: true, middle: true, class: "new", onMouseEnter: this._showTooltip('new') }, "NEW")),
          ((_d = this.article.pvps) === null || _d === void 0 ? void 0 : _d.length) && (h(Flex, { row: true, middle: true, class: cls('pvp', this.article.pvpType || 'normal'), onMouseEnter: this._showTooltip('pvps') }, "PVP")),
          this.tooltip && this._renderTagsTooltip()));
      }
    };
    this._renderHeader = () => {
      return (h(Flex, { row: true, spaced: true, top: true, class: "header" },
        this._renderQuantity(),
        this._renderTags()));
    };
    this._renderFooter = () => {
      return (h(Flex, { left: true, class: `footer ${this.useBackdropDecoration && 'footer--backdrop'}` },
        h("span", { class: "description" }, this.article.description),
        h("span", { class: "reference", onClick: this._handleCopy }, this.article.partnumber)));
    };
    this._renderLoader = () => {
      const { width } = this.element.parentElement.getBoundingClientRect();
      const height = width / this.aspectRatio;
      return h("glyph-sk-loader", { height: height });
    };
  }
  componentWillLoad() {
    const componentI18n = getComponentLocale(this.element, { es, en });
    this._i18n = Object.assign(Object.assign({}, componentI18n), this.i18n);
    this.basePath = this.basePath || state.basePath;
  }
  componentDidRender() {
    if (this._article) {
      this._getArticleSize();
      this._observer = new IntersectionObserver(this._onIntersection);
      this._observer.observe(this._article);
    }
  }
  /* eslint-disable @stencil/decorators-style, @stencil/async-methods  */
  /** This method will return image height */
  async getImageSize() {
    var _a;
    return (_a = this._article) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
  }
  /* eslint-disable @stencil/decorators-style, @stencil/async-methods  */
  /** This method will hide tooltip */
  async hideTooltip() {
    this._hideTooltip();
  }
  /* eslint-disable @stencil/decorators-style, @stencil/async-methods  */
  /** This method will hide tooltip */
  async setArticleSize() {
    this._getArticleSize();
  }
  _getArticleSize() {
    const { width } = this.element.getBoundingClientRect();
    this.articleSize = width < 120 ? "small" /* small */ : width < 300 ? "medium" /* medium */ : "large" /* large */;
  }
  render() {
    if (this.loading) {
      return this._renderLoader();
    }
    const imageSrc = this.parseImageUrl
      ? this.parseImageUrl(this.article[this.imageType])
      : this.article[this.imageType];
    return (h("div", { class: cls('article', { 'article--clickable': this.isClickable }, this.articleSize), ref: this._setArticleRef, onClick: this._handleClick },
      this.isVisible && h("img", { class: "animated fadeIn", src: imageSrc }),
      this._renderHeader(),
      this._renderFooter(),
      h("glyph-toaster", { eventId: `copyReference${this._id}`, ttl: 1000 })));
  }
  static get is() { return "glyph-article"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["article.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["article.css"]
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
    "loading": {
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
        "text": "Loading flag"
      },
      "attribute": "loading",
      "reflect": false,
      "defaultValue": "false"
    },
    "aspectRatio": {
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
        "text": "Aspect ratio used to calculate loader height"
      },
      "attribute": "aspect-ratio",
      "reflect": false,
      "defaultValue": "340 / 512"
    },
    "isVisible": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Boolean",
        "resolved": "Boolean",
        "references": {
          "Boolean": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Force visibility flag"
      },
      "defaultValue": "false"
    },
    "article": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Article",
        "resolved": "Article",
        "references": {
          "Article": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Article data"
      }
    },
    "isClickable": {
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
        "text": "Flag to activate click callback"
      },
      "attribute": "is-clickable",
      "reflect": false
    },
    "quantityField": {
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
        "text": "Field to render quantity tag"
      },
      "attribute": "quantity-field",
      "reflect": false
    },
    "imageType": {
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
        "text": "Image type to render image | plain_image"
      },
      "attribute": "image-type",
      "reflect": false,
      "defaultValue": "'image'"
    },
    "parseImageUrl": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(image: string) => string",
        "resolved": "(image: string) => string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "**optional** Compose image url callback"
      }
    },
    "useBackdropDecoration": {
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
        "text": "Decorate with backdrop filter, solves some performance issues (in storybook)"
      },
      "attribute": "use-backdrop-decoration",
      "reflect": false,
      "defaultValue": "true"
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
    }
  }; }
  static get states() { return {
    "tooltip": {},
    "articleSize": {}
  }; }
  static get events() { return [{
      "method": "articleClick",
      "name": "articleClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Click event callback"
      },
      "complexType": {
        "original": "Article",
        "resolved": "Article",
        "references": {
          "Article": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      }
    }, {
      "method": "articleVisible",
      "name": "articleVisible",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Article gets visible event"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "getImageSize": {
      "complexType": {
        "signature": "() => Promise<DOMRect>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          },
          "DOMRect": {
            "location": "global"
          }
        },
        "return": "Promise<DOMRect>"
      },
      "docs": {
        "text": "This method will return image height",
        "tags": []
      }
    },
    "hideTooltip": {
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
        "text": "This method will hide tooltip",
        "tags": []
      }
    },
    "setArticleSize": {
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
        "text": "This method will hide tooltip",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "element"; }
}
