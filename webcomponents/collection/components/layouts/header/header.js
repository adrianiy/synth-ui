import { Component, getAssetPath, Prop, h, State, Element, Event } from '@stencil/core';
import { Icon } from '../../../utils/icons';
import { Flex } from '../../../utils/layout';
import { cls } from '../../../utils/utils';
import store from './../../../utils/store/context.store';
export class HeaderComponent {
  constructor() {
    /** Available brands list */
    this.brandList = [];
    /** Extra i18n translation object */
    this.i18n = {};
    /** show user menu flag */
    this.showUserMenu = false;
    /** show apps menu flag */
    this.showAppsMenu = false;
    /** show share menu flag */
    this.showShareMenu = false;
    /** show timeline flag */
    this.showTimeline = false;
    /** show notifications flag */
    this.showNotifications = false;
    /** show brand menu */
    this.showBrands = false;
    this._toggleShareMenu = (value) => () => {
      this.showShareMenu = value !== null && value !== void 0 ? value : !this.showShareMenu;
    };
    this._toggleShowAppsMenu = (value) => () => {
      this.showAppsMenu = value !== null && value !== void 0 ? value : !this.showAppsMenu;
    };
    this._toggleShowUserMenu = (value) => () => {
      this.showUserMenu = value !== null && value !== void 0 ? value : !this.showUserMenu;
    };
    this._toggleShowTimeline = (value) => () => {
      this.showTimeline = value !== null && value !== void 0 ? value : !this.showTimeline;
    };
    this._toggleNotifications = (value) => () => {
      this.showNotifications = value !== null && value !== void 0 ? value : !this.showNotifications;
    };
    this._toggleBrandsMenu = (value) => () => {
      var _a;
      this.showBrands = value !== null && value !== void 0 ? value : (!this.showBrands && ((_a = this.brandList) === null || _a === void 0 ? void 0 : _a.length) > 1);
    };
    this._handleLangChange = ({ detail }) => {
      this.langChange.emit(detail);
    };
    this._handleThemeChange = ({ detail }) => {
      this.themeChange.emit(detail);
    };
    this._handleDecimalChange = ({ detail }) => {
      this.decimalsChange.emit(detail);
    };
    this._handleCustomConfigChange = () => {
      this.customConfigChange.emit();
    };
    this._handleLogout = () => {
      this.logout.emit();
    };
    this._handleBrandChange = ({ detail }) => () => {
      this.brandChange.emit(detail);
    };
    this._renderShare = () => {
      return this.interface === "redesign" /* redesign */ ? (h("glyph-icon", { icon: "share-outlined", onClick: this._toggleShareMenu(), button: true })) : (h(Flex, { row: true, middle: true, center: true, class: "widget__container" },
        h("div", { class: "share", onClick: this._toggleShareMenu() },
          h("div", { class: "square" },
            h("div", { class: "square--bite" })),
          h(Icon, { icon: "reply", class: "share" }))));
    };
    this._renderSearch = () => {
      return h("glyph-icon", { button: true, material: this.interface !== "redesign" /* redesign */, icon: "search" });
    };
    this._renderNotifications = () => {
      return (h(Flex, { row: true, middle: true, center: true, class: "widget__container" },
        h("glyph-icon", { button: true, material: this.interface !== "redesign" /* redesign */, icon: this.interface === "redesign" /* redesign */ ? 'notification-outlined' : 'notifications', onClick: this._toggleNotifications() })));
    };
    this._renderMenu = () => {
      return (h(Flex, { row: true, middle: true, center: true, class: "widget__container" },
        h("glyph-icon", { button: true, material: this.interface !== "redesign" /* redesign */, icon: this.interface === "redesign" /* redesign */ ? 'grid-underlined' : 'apps', onClick: this._toggleShowAppsMenu() })));
    };
    this._renderTimeline = () => {
      return (h("glyph-icon", { button: true, material: this.interface !== "redesign" /* redesign */, icon: this.interface === "redesign" /* redesign */ ? 'calendar-outlined' : 'calendar_today', onClick: this._toggleShowTimeline() }));
    };
    this._renderAvatar = () => {
      return (h(Flex, { row: true, middle: true, center: true, class: "widget__container" },
        h("glyph-avatar", Object.assign({}, this.userData, { interface: this.interface, onClick: this._toggleShowUserMenu() }))));
    };
    this._renderTimelineSidebar = () => {
      return (h(Flex, { class: cls('widget__menu widget__menu--sidebar animated', this.interface !== "modern" /* modern */ ? 'fadeInRight' : 'fadeIn') },
        h("glyph-timeline", { calendarEvents: this.calendarEvents, events: this.events, i18n: this.i18n, locale: this.locale, interface: this.interface, outsideCallback: this._toggleShowTimeline(false) })));
    };
    this._renderMenus = () => {
      return [
        h("div", { class: cls('widget__menu__container widget__menu__container--user', {
            active: this.showUserMenu,
          }) }, this.showUserMenu && (h("glyph-user-menu", Object.assign({ class: "widget__menu widget__menu--user", name: this.userData.name, outsideCallback: this._toggleShowUserMenu(false), i18n: this.i18n, locale: this.locale, interface: this.interface }, this.userMenuConfig, { onLangChange: this._handleLangChange, onThemeChange: this._handleThemeChange, onDecimalsChange: this._handleDecimalChange, onCustomConfigChange: this._handleCustomConfigChange, onLogout: this._handleLogout })))),
        h("div", { class: cls('widget__menu__container widget__menu__container--apps', {
            active: this.showAppsMenu,
            right: this.timeline,
          }) }, this.showAppsMenu && (h("glyph-app-menu", { class: "widget__menu widget__menu--apps", apps: this.appData, outsideCallback: this._toggleShowAppsMenu(false), interface: this.interface, i18n: this.i18n, locale: this.locale }))),
        h("div", { class: cls('widget__menu__container widget__menu__container--share', {
            'active': this.showShareMenu,
            'right': this.timeline || this.menu,
            'right--big': this.timeline && this.menu,
          }) }, this.showShareMenu && (h("glyph-share-menu", { class: "widget__menu widget__menu--share", appTitle: this.appTitle, appSubtitle: this.appSubtitle, interface: this.interface, outsideCallback: this._toggleShareMenu(false), i18n: this.i18n, locale: this.locale }))),
        h("div", { class: cls('widget__menu__container widget__menu__container--notifications', {
            'active': this.showNotifications,
            'right': this.timeline || this.menu || this.share,
            'right--big': [this.timeline, this.menu, this.share].filter(Boolean).length === 2,
            'right--large': this.timeline && this.menu && this.share,
          }) }, this.showNotifications && (h("glyph-notifications", { class: "widget__menu widget__menu--notifications", outsideCallback: this._toggleNotifications(false) },
          h("slot", null)))),
      ];
    };
    this._renderBrands = () => {
      return (h("div", { class: cls('widget__menu__container widget__menu__container--brands', {
          active: this.showBrands,
        }) },
        h(Flex, { middle: true, column: true, class: "widget__menu widget__menu--brands" }, this.showBrands && (h("glyph-brand-list", { brandList: this.brandList, outsideCallback: this._toggleBrandsMenu(false), onBrandChange: this._handleBrandChange })))));
    };
  }
  componentWillRender() {
    this.interface = store.interface;
    this.basePath = store.basePath;
  }
  render() {
    return (h(Flex, { row: true, spaced: true, middle: true, class: cls('header__container', this.interface) },
      this._renderBrands(),
      this._renderMenus(),
      h("div", { class: "background" }),
      h(Flex, { row: true, middle: true, class: "header--left" },
        this.brand && (h("img", { class: cls({ clickable: this.brand && this.brandList.length > 1 }), src: getAssetPath(`${this.basePath}/assets/brands/icon_${this.activeBrand}.svg`), onClick: this._toggleBrandsMenu() })),
        h(Flex, { left: true },
          h("h2", null, this.appTitle),
          this.interface === "redesign" /* redesign */ ? (h("span", { class: "label--l label--l--medium" }, this.appSubtitle)) : (h("h4", null, this.appSubtitle)))),
      h("div", { class: "header--right" },
        this.search && this._renderSearch(),
        this.notifications && this._renderNotifications(),
        this.share && this._renderShare(),
        this.menu && this._renderMenu(),
        this.timeline && this._renderTimeline(),
        this.avatar && this.userData && this._renderAvatar()),
      this.showTimeline && this._renderTimelineSidebar()));
  }
  static get is() { return "glyph-header"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["header.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["header.css"]
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
        "text": "Base path"
      },
      "attribute": "base-path",
      "reflect": false
    },
    "brand": {
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
        "text": "Brand selector flag"
      },
      "attribute": "brand",
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
        "text": "Available brands list"
      },
      "defaultValue": "[]"
    },
    "avatar": {
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
        "text": "User avatar flag"
      },
      "attribute": "avatar",
      "reflect": false
    },
    "timeline": {
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
        "text": "Timeline flag"
      },
      "attribute": "timeline",
      "reflect": false
    },
    "menu": {
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
        "text": "View menu flag"
      },
      "attribute": "menu",
      "reflect": false
    },
    "share": {
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
        "text": "Share menu flag"
      },
      "attribute": "share",
      "reflect": false
    },
    "search": {
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
        "text": "Search flag"
      },
      "attribute": "search",
      "reflect": false
    },
    "notifications": {
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
        "text": "Notification flag"
      },
      "attribute": "notifications",
      "reflect": false
    },
    "appTitle": {
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
        "text": "Application title"
      },
      "attribute": "app-title",
      "reflect": false
    },
    "appSubtitle": {
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
        "text": "Application subtitle"
      },
      "attribute": "app-subtitle",
      "reflect": false
    },
    "activeBrand": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Brands",
        "resolved": "Brands.bershka | Brands.home | Brands.lefties | Brands.massimo | Brands.oysho | Brands.pull | Brands.south | Brands.stradivarius | Brands.uterque | Brands.zara",
        "references": {
          "Brands": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Application brand"
      },
      "attribute": "active-brand",
      "reflect": false
    },
    "userData": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "UserData",
        "resolved": "UserData",
        "references": {
          "UserData": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "User data"
      }
    },
    "appData": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Screen[]",
        "resolved": "Screen[]",
        "references": {
          "Screen": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Apps data"
      }
    },
    "userMenuConfig": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "UserMenuConfiguration",
        "resolved": "UserMenuConfiguration",
        "references": {
          "UserMenuConfiguration": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "User menu config"
      }
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
    "showUserMenu": {},
    "showAppsMenu": {},
    "showShareMenu": {},
    "showTimeline": {},
    "showNotifications": {},
    "showBrands": {}
  }; }
  static get events() { return [{
      "method": "langChange",
      "name": "langChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Language change event"
      },
      "complexType": {
        "original": "SelectorOption",
        "resolved": "SelectorOption",
        "references": {
          "SelectorOption": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      }
    }, {
      "method": "themeChange",
      "name": "themeChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Theme change event"
      },
      "complexType": {
        "original": "SelectorOption",
        "resolved": "SelectorOption",
        "references": {
          "SelectorOption": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      }
    }, {
      "method": "decimalsChange",
      "name": "decimalsChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Decimals change event"
      },
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      }
    }, {
      "method": "brandChange",
      "name": "brandChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Brand change event"
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
    }, {
      "method": "customConfigChange",
      "name": "customConfigChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Custom config change"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "logout",
      "name": "logout",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Logout event"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "element"; }
}
