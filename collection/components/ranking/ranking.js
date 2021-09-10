import { Component, Prop, Element, h, State, Event, Method, Watch } from '@stencil/core';
import state from '../../utils/store/context.store';
import { cls, getComponentLocale } from '../../utils/utils';
import en from './i18n/ranking.i18n.en.json';
import es from './i18n/ranking.i18n.es.json';
export class RankingComponent {
  constructor() {
    /** Loading flag */
    this.loading = false;
    /** Aspect ratio used to calculate loader height */
    this.aspectRatio = 340 / 512;
    /** Distance between columns */
    this.columnGap = '15%';
    /** Distance between rows */
    this.rowGap = 'var(--gui-padding--xxl)';
    /** Columns to render if ranking have more than 1 section, number of columns will apply per section */
    this.columns = 3;
    /** Inner columns, sets how many columns should be rendered per column */
    this.innerColumns = 1;
    /** Row to render */
    this.rows = 1;
    /** Image type to render image | plain_image */
    this.imageType = 'image';
    /** Decorate with backdrop filter, solves some performance issues (in storybook) */
    this.useBackdropDecoration = true;
    /** Extra i18n translation object */
    this.i18n = {};
    /** last visible element */
    this.lastVisibleIndex = 0;
    /** is scrolling flag */
    this.isScrolling = false;
    /** loading articles state */
    this.loadingArticles = true;
    this._articleRef = [];
    this._handleScroll = (ev) => {
      if (this.isScrolling) {
        this.isScrolling = false;
      }
      else if (!this.loading) {
        const { scrollTop } = ev.target;
        const scrolled = scrollTop > 0;
        this.scrollChange.emit({ scrolled, scrollTop });
        if (this._articleRef.length) {
          this._articleRef.forEach(async (article) => await article.hideTooltip());
        }
      }
    };
    this._setElementHeight = async () => {
      const { height } = await this._articleRef[0].getImageSize();
      if (height) {
        this.elementHeight = height;
      }
    };
    this._setElementRef = (element) => {
      this._articleRef.push(element);
    };
    this._setRankingRef = (element) => {
      this._rankingContainer = element;
    };
    this._getHeight = () => {
      const innerSize = `${this.elementHeight}px * ${this.rows}`;
      const extraGap = this.rows > 1 ? this.innerGap || this.rowGap : '0px';
      return `calc(calc(${innerSize}) + calc(${extraGap} * ${this.rows - 1}))`;
    };
    this._getSectionName = (section) => {
      switch (section) {
        case 1:
          return this._i18n['woman'];
        case 2:
          return this._i18n['man'];
        case 3:
          return this._i18n['kid'];
        default:
          return '';
      }
    };
    this._handleArticleVisibility = (index) => () => {
      this.lastVisibleIndex = index;
    };
    this._getColumns = () => {
      const isSingleSection = this.rankingData.length === 1;
      const columns = isSingleSection ? this.columns : this.innerColumns;
      return columns;
    };
    this._renderArticles = (children) => {
      const columns = this._getColumns();
      const articlesPerView = columns * this.rows;
      const articlesThreshold = articlesPerView * 2;
      const min = this.lastVisibleIndex - articlesThreshold;
      const max = this.lastVisibleIndex + articlesThreshold;
      return children.slice(0, this.loadingArticles ? columns : -1).map((article, index) => (h("div", { class: "article__container", style: { height: `${this.elementHeight}px` } },
        h("glyph-article", { ref: this._setElementRef, isVisible: index > min && index < max, article: article, isClickable: true, "quantity-field": "units", imageType: this.imageType, parseImageUrl: this.parseImageUrl, useBackdropDecoration: this.useBackdropDecoration, i18n: this._i18n, onArticleVisible: this._handleArticleVisibility(index) }))));
    };
    this._renderRankingColumn = (children) => {
      return h("div", { class: "ranking__column" }, this._renderArticles(children));
    };
    this._renderLoader = (children) => {
      return children.map((child) => (h("div", { class: "article__container" },
        h("glyph-article", { loading: this.loading, aspectRatio: this.aspectRatio, isVisible: true, article: child }))));
    };
    this._renderLoaders = () => {
      const columns = Array(this.columns).fill(0);
      const rows = Array(this.rows * this.innerColumns).fill({});
      return columns.map(() => h("div", { class: "ranking__column" }, this._renderLoader(rows)));
    };
  }
  handleLoadChange() {
    this._articleRef = [];
    this._rankingContainer.scrollTop = 0;
  }
  componentWillLoad() {
    const componentI18n = getComponentLocale(this.element, { es, en });
    this._i18n = Object.assign(Object.assign({}, componentI18n), this.i18n);
    this.basePath = this.basePath || state.basePath;
  }
  async componentDidRender() {
    if (!this.loading && this._articleRef.length) {
      await this._setElementHeight();
      this.loadingArticles = false;
      this._articleRef.forEach(async (article) => await article.setArticleSize());
    }
  }
  /* eslint-disable @stencil/decorators-style, @stencil/async-methods  */
  /** This method will change ranking container scroll */
  async changeScroll(scroll = 0, listeneable = true) {
    this._rankingContainer.scrollTop = scroll;
    this.isScrolling = true;
    if (scroll === 0 && listeneable) {
      this.scrollChange.emit({ scrolled: false, scrollTop: 0 });
    }
  }
  render() {
    const sections = this.rankingData.filter(({ children }) => children.length);
    const isSingle = sections.length === 1;
    if (this.gap) {
      this.rowGap = this.gap;
      this.columnGap = this.gap;
    }
    return (h("div", { class: cls('ranking__container', { 'ranking__container--single-section': isSingle }), style: {
        '--columnGap': this.columnGap,
        '--rowGap': this.rowGap,
        '--innerGap': this.innerColumns === 1 ? this.rowGap : this.innerGap,
        '--columns': `${this.columns}`,
        '--innerColumns': `${this.innerColumns}`,
        '--elementHeight': this._getHeight(),
      } },
      h("div", { class: "ranking__header" }, isSingle && this.rankingHeader ? (h("h5", null, this.rankingHeader)) : (this.rankingData.map(({ cod_section }) => h("h5", null, this._getSectionName(cod_section))))),
      h("div", { onScroll: this._handleScroll, ref: this._setRankingRef, class: cls('ranking__columns', { 'ranking__columns--single': isSingle }) },
        this.loading && this._renderLoaders(),
        !this.loading &&
          this.rankingData
            .filter(({ children }) => children.length)
            .map(({ children }) => isSingle ? this._renderArticles(children) : this._renderRankingColumn(children)))));
  }
  static get is() { return "glyph-ranking"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["ranking.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["ranking.css"]
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
    "rankingData": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "RankingData[]",
        "resolved": "RankingData[]",
        "references": {
          "RankingData": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Ranking data"
      }
    },
    "rankingHeader": {
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
        "text": "(optional) ranking header. Applicable on single section ranking"
      },
      "attribute": "ranking-header",
      "reflect": false
    },
    "columnGap": {
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
        "text": "Distance between columns"
      },
      "attribute": "column-gap",
      "reflect": false,
      "defaultValue": "'15%'"
    },
    "rowGap": {
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
        "text": "Distance between rows"
      },
      "attribute": "row-gap",
      "reflect": false,
      "defaultValue": "'var(--gui-padding--xxl)'"
    },
    "gap": {
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
        "text": "Distance applied to both axes"
      },
      "attribute": "gap",
      "reflect": false
    },
    "innerGap": {
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
        "text": "Distance between elements inside a column"
      },
      "attribute": "inner-gap",
      "reflect": false
    },
    "columns": {
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
        "text": "Columns to render if ranking have more than 1 section, number of columns will apply per section"
      },
      "attribute": "columns",
      "reflect": false,
      "defaultValue": "3"
    },
    "innerColumns": {
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
        "text": "Inner columns, sets how many columns should be rendered per column"
      },
      "attribute": "inner-columns",
      "reflect": false,
      "defaultValue": "1"
    },
    "rows": {
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
        "text": "Row to render"
      },
      "attribute": "rows",
      "reflect": false,
      "defaultValue": "1"
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
    "elementHeight": {},
    "lastVisibleIndex": {},
    "isScrolling": {},
    "loadingArticles": {}
  }; }
  static get events() { return [{
      "method": "scrollChange",
      "name": "scrollChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Scrolled state change event"
      },
      "complexType": {
        "original": "{ scrolled: boolean; scrollTop: number }",
        "resolved": "{ scrolled: boolean; scrollTop: number; }",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "changeScroll": {
      "complexType": {
        "signature": "(scroll?: number, listeneable?: boolean) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }, {
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "This method will change ranking container scroll",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "element"; }
  static get watchers() { return [{
      "propName": "loading",
      "methodName": "handleLoadChange"
    }]; }
}
