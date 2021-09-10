import { h, Component, Element, Prop, State } from '@stencil/core';
import { Flex } from '../../../utils/layout';
import { cls, getLocaleComponentStrings } from '../../../utils/utils';
export class GlyphRankingLayout {
  constructor() {
    /** Loading flag */
    this.loading = false;
    /** Loading comparable flag */
    this.loadingComparable = false;
    /** Aspect ratio used to calculate loader height */
    this.aspectRatio = 340 / 512;
    /** Distance between columns */
    this.columnGap = '15%';
    /** Distance between rows */
    this.rowGap = 'var(--gui-padding--xxl)';
    /** Decorate with backdrop filter, solves some performance issues (in storybook) */
    this.useBackdropDecoration = true;
    /** Application interface */
    this.interface = "classic" /* classic */;
    /** Active slider value */
    this.activeViewValue = 0;
    /** Image type */
    this.imageType = 'model';
    /** Comparable ranking flag */
    this.comparable = false;
    /** Scrolled state flag */
    this.scrolled = false;
    this._singleSectionOptions = [
      { columns: 3, innerColumns: 1, rows: 1, rowGap: 'var(--gui-padding--xxl)' },
      { columns: 6, innerColumns: 1, rows: 3, gap: 'var(--gui-padding--xs)' },
      { columns: 8, innerColumns: 1, rows: 3, gap: 'var(--gui-padding--xs)' },
    ];
    this._multiSectionOptions = [
      { columns: 3, innerColumns: 1, rows: 1 },
      { columns: 3, innerColumns: 2, rows: 2, innerGap: 'var(--gui-padding--xs)' },
    ];
    this._setRankingRef = (element) => {
      this._rankingRef = element;
    };
    this._setCompRankingRef = (element) => {
      this._compRankingRef = element;
    };
    this._isSingleRanking = () => {
      return this.rankingData.length === 1;
    };
    this._handleScrollChange = (event) => {
      const { scrolled, scrollTop } = event.detail;
      this.scrolled = scrolled;
      if (this.comparable) {
        this._compRankingRef.changeScroll(scrollTop, false);
      }
    };
    this._handleCompScrollChange = (event) => {
      const { scrolled, scrollTop } = event.detail;
      this.scrolled = scrolled;
      this._rankingRef.changeScroll(scrollTop, false);
    };
    this._handleSliderChange = (event) => {
      const { option, value } = event.detail;
      this.activeView = option;
      this.activeViewValue = value;
      this.comparable = false;
    };
    this._handleImageTypeChange = (imageType) => () => {
      this.imageType = imageType;
    };
    this._handleCompChange = (event) => {
      this.comparable = event.target.checked;
    };
    this._backToTop = () => {
      this._rankingRef.changeScroll(0);
    };
  }
  async componentWillLoad() {
    await this._initializeVariables();
  }
  componentDidLoad() {
    const isSingleSection = this._isSingleRanking();
    this.activeView = isSingleSection ? this._singleSectionOptions[0] : this._multiSectionOptions[0];
  }
  async _initializeVariables() {
    const componentI18n = await getLocaleComponentStrings(['ranking-layout'], this.element, this.basePath, this.locale);
    this._i18n = Object.assign(Object.assign({}, componentI18n), this.i18n);
  }
  _renderHeaderOptions() {
    const isSingleSection = this._isSingleRanking();
    const sliderOptions = isSingleSection ? this._singleSectionOptions : this._multiSectionOptions;
    const hasComparable = isSingleSection && this.activeView.columns > 3;
    return (h(Flex, { row: true, middle: true, class: "ranking__header__options" },
      hasComparable && (h(Flex, { row: true, middle: true, class: "ranking__header__options__comparable" },
        h("span", null, this._i18n['ranking-layout.comparable']),
        h("input", { type: "checkbox", checked: this.comparable, onInput: this._handleCompChange }))),
      h(Flex, { row: true, middle: true, class: "ranking__header__options__slider" },
        h("span", null, this._i18n['ranking-layout.view']),
        h("glyph-slider", { options: sliderOptions, currentValue: this.activeViewValue, onOptionChange: this._handleSliderChange })),
      h(Flex, { row: true, middle: true, class: "ranking__header__options__image-type" },
        h("span", { onClick: this._handleImageTypeChange('model'), class: { active: this.imageType === 'model' } }, this._i18n['ranking-layout.model']),
        h("span", { onClick: this._handleImageTypeChange('plain'), class: { active: this.imageType === 'plain' } }, this._i18n['ranking-layout.plain'])),
      this.scrolled && (h(Flex, { row: true, middle: true, class: "ranking__header__options__back" },
        h("span", { onClick: this._backToTop }, this._i18n['ranking-layout.backToTop'])))));
  }
  _renderComparable() {
    const { columns, innerColumns, rows, gap, innerGap } = this.activeView;
    return (h("div", { class: "ranking--comparable" },
      h("glyph-ranking", { ref: this._setCompRankingRef, loading: this.loadingComparable, aspectRatio: this.aspectRatio, rankingData: this.compRankingData, rankingHeader: this._i18n['ranking-layout.comparableRanking'], columns: columns, innerColumns: innerColumns, gap: gap, columnGap: gap ? gap : this.columnGap, innerGap: innerGap, rows: this.comparable ? 1 : rows, useBackdropDecoration: this.useBackdropDecoration, i18n: this._i18n, onScrollChange: this._handleCompScrollChange })));
  }
  render() {
    if (!this.activeView) {
      return null;
    }
    const { columns, innerColumns, rows, gap, rowGap, innerGap } = this.activeView;
    return (h(Flex, { class: cls('ranking', this.interface) },
      h(Flex, { row: true, spaced: true, top: true, class: "ranking__header" },
        h("glyph-title", { interface: this.interface, text: "Ranking" }),
        this._renderHeaderOptions()),
      h("glyph-ranking", { ref: this._setRankingRef, loading: this.loading, aspectRatio: this.aspectRatio, rankingData: this.rankingData, columns: columns, innerColumns: innerColumns, gap: gap, rowGap: rowGap, columnGap: gap ? gap : this.columnGap, innerGap: innerGap, rows: this.comparable ? 1 : rows, i18n: this._i18n, useBackdropDecoration: this.useBackdropDecoration, onScrollChange: this._handleScrollChange }),
      this.comparable && this._renderComparable()));
  }
  static get is() { return "glyph-ranking-layout"; }
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
    "loadingComparable": {
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
        "text": "Loading comparable flag"
      },
      "attribute": "loading-comparable",
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
    "compRankingData": {
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
        "text": "Ranking comparable data"
      }
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
    "activeView": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "RankingViewOptions",
        "resolved": "RankingViewOptions",
        "references": {
          "RankingViewOptions": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Active view layout"
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
        "text": "Extra i18n translates"
      }
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
        "text": "Application interface"
      },
      "attribute": "interface",
      "reflect": false,
      "defaultValue": "UIInterface.classic"
    }
  }; }
  static get states() { return {
    "activeViewValue": {},
    "imageType": {},
    "comparable": {},
    "scrolled": {}
  }; }
  static get elementRef() { return "element"; }
}
