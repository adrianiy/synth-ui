/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'glyph-components';


export declare interface GlyphAppMenu extends Components.GlyphAppMenu {}
@ProxyCmp({
  inputs: ['apps', 'i18n', 'outsideCallback']
})
@Component({
  selector: 'glyph-app-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['apps', 'i18n', 'outsideCallback']
})
export class GlyphAppMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GlyphAvatar extends Components.GlyphAvatar {}
@ProxyCmp({
  inputs: ['image', 'name']
})
@Component({
  selector: 'glyph-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['image', 'name']
})
export class GlyphAvatar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GlyphButton extends Components.GlyphButton {}
@ProxyCmp({
  inputs: ['icon', 'interface', 'text']
})
@Component({
  selector: 'glyph-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['icon', 'interface', 'text']
})
export class GlyphButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { ChipsBarComponent as IChipsBarComponent } from 'glyph-components/dist/types/components/chipsbar/chipsbar';
export declare interface GlyphChipsbar extends Components.GlyphChipsbar {}
@ProxyCmp({
  inputs: ['filtersConfig', 'i18n', 'interface']
})
@Component({
  selector: 'glyph-chipsbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['filtersConfig', 'i18n', 'interface'],
  outputs: ['filterSelect', 'filterClear', 'filterMultiSelect', 'clearAll']
})
export class GlyphChipsbar {
  /** Filter select event */
  filterSelect!: IChipsBarComponent['filterSelect'];
  /** Filter clear event */
  filterClear!: IChipsBarComponent['filterClear'];
  /** Filter multiselect event */
  filterMultiSelect!: IChipsBarComponent['filterMultiSelect'];
  /** Clear all filters event */
  clearAll!: IChipsBarComponent['clearAll'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['filterSelect', 'filterClear', 'filterMultiSelect', 'clearAll']);
  }
}

import { FilterComponent as IFilterComponent } from 'glyph-components/dist/types/components/filter/filter';
export declare interface GlyphFilter extends Components.GlyphFilter {}
@ProxyCmp({
  inputs: ['description', 'haveMultiSelect', 'i18n', 'interface', 'multiSelect', 'options', 'plural', 'searchPlaceholder', 'selected']
})
@Component({
  selector: 'glyph-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['description', 'haveMultiSelect', 'i18n', 'interface', 'multiSelect', 'options', 'plural', 'searchPlaceholder', 'selected'],
  outputs: ['optionClickEvent', 'clearEvent', 'multiSelectEvent']
})
export class GlyphFilter {
  /** Option click event */
  optionClickEvent!: IFilterComponent['optionClickEvent'];
  /** Clear selected filters callback */
  clearEvent!: IFilterComponent['clearEvent'];
  /** Multiselect toggler callback */
  multiSelectEvent!: IFilterComponent['multiSelectEvent'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['optionClickEvent', 'clearEvent', 'multiSelectEvent']);
  }
}


export declare interface GlyphFilterOptions extends Components.GlyphFilterOptions {}
@ProxyCmp({
  inputs: ['closeEvent', 'description', 'haveMultiSelect', 'i18n', 'interface', 'multiSelect', 'multiSelectEvent', 'optionClickEvent', 'options', 'searchPlaceholder']
})
@Component({
  selector: 'glyph-filter-options',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['closeEvent', 'description', 'haveMultiSelect', 'i18n', 'interface', 'multiSelect', 'multiSelectEvent', 'optionClickEvent', 'options', 'searchPlaceholder']
})
export class GlyphFilterOptions {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GlyphHeader extends Components.GlyphHeader {}
@ProxyCmp({
  inputs: ['activeBrand', 'appData', 'appSubtitle', 'appTitle', 'avatar', 'brand', 'i18n', 'interface', 'menu', 'notifications', 'search', 'share', 'timeline', 'userData']
})
@Component({
  selector: 'glyph-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activeBrand', 'appData', 'appSubtitle', 'appTitle', 'avatar', 'brand', 'i18n', 'interface', 'menu', 'notifications', 'search', 'share', 'timeline', 'userData']
})
export class GlyphHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { ListComponent as IListComponent } from 'glyph-components/dist/types/components/list/list';
export declare interface GlyphList extends Components.GlyphList {}
@ProxyCmp({
  inputs: ['data', 'decimals', 'defaultSortField', 'enableDownload', 'expandable', 'filterFields', 'i18n', 'limit', 'loading', 'update']
})
@Component({
  selector: 'glyph-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['data', 'decimals', 'defaultSortField', 'enableDownload', 'expandable', 'filterFields', 'i18n', 'limit', 'loading', 'update'],
  outputs: ['expandRow']
})
export class GlyphList {
  /** Expand row event */
  expandRow!: IListComponent['expandRow'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['expandRow']);
  }
}


export declare interface GlyphListRow extends Components.GlyphListRow {}
@ProxyCmp({
  inputs: ['expandHandle', 'expandable', 'fields', 'i18n', 'isTotal', 'row']
})
@Component({
  selector: 'glyph-list-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['expandHandle', 'expandable', 'fields', 'i18n', 'isTotal', 'row']
})
export class GlyphListRow {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GlyphNoData extends Components.GlyphNoData {}
@ProxyCmp({
  inputs: ['bottomText', 'i18n', 'mode', 'text']
})
@Component({
  selector: 'glyph-no-data',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['bottomText', 'i18n', 'mode', 'text']
})
export class GlyphNoData {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { SelectorComponent as ISelectorComponent } from 'glyph-components/dist/types/components/selector/selector';
export declare interface GlyphSelector extends Components.GlyphSelector {}
@ProxyCmp({
  inputs: ['complexOptions', 'i18n', 'interface', 'label', 'multiSelect', 'options']
})
@Component({
  selector: 'glyph-selector',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['complexOptions', 'i18n', 'interface', 'label', 'multiSelect', 'options'],
  outputs: ['optionSelect']
})
export class GlyphSelector {
  /** on change callback */
  optionSelect!: ISelectorComponent['optionSelect'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['optionSelect']);
  }
}


export declare interface GlyphShareMenu extends Components.GlyphShareMenu {}
@ProxyCmp({
  inputs: ['appSubtitle', 'appTitle', 'i18n', 'interface', 'outsideCallback']
})
@Component({
  selector: 'glyph-share-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['appSubtitle', 'appTitle', 'i18n', 'interface', 'outsideCallback']
})
export class GlyphShareMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GlyphSkLoader extends Components.GlyphSkLoader {}
@ProxyCmp({
  inputs: ['height', 'repetitions']
})
@Component({
  selector: 'glyph-sk-loader',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['height', 'repetitions']
})
export class GlyphSkLoader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { TabsComponent as ITabsComponent } from 'glyph-components/dist/types/components/tabs/tabs';
export declare interface GlyphTabs extends Components.GlyphTabs {}
@ProxyCmp({
  inputs: ['tabStyle', 'tabs']
})
@Component({
  selector: 'glyph-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['tabStyle', 'tabs'],
  outputs: ['tabSelect']
})
export class GlyphTabs {
  /** Tab selection event */
  tabSelect!: ITabsComponent['tabSelect'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['tabSelect']);
  }
}


export declare interface GlyphTimeline extends Components.GlyphTimeline {}
@ProxyCmp({
  inputs: ['calendarEvents', 'events', 'i18n', 'interface']
})
@Component({
  selector: 'glyph-timeline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['calendarEvents', 'events', 'i18n', 'interface']
})
export class GlyphTimeline {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GlyphTitle extends Components.GlyphTitle {}
@ProxyCmp({
  inputs: ['titleText']
})
@Component({
  selector: 'glyph-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['titleText']
})
export class GlyphTitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GlyphToaster extends Components.GlyphToaster {}
@ProxyCmp({
  inputs: ['eventId', 'i18n', 'ttl']
})
@Component({
  selector: 'glyph-toaster',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['eventId', 'i18n', 'ttl']
})
export class GlyphToaster {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GlyphToggler extends Components.GlyphToggler {}
@ProxyCmp({
  inputs: ['active', 'interface']
})
@Component({
  selector: 'glyph-toggler',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'interface']
})
export class GlyphToggler {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { UserMenuComponent as IUserMenuComponent } from 'glyph-components/dist/types/components/user-menu/user-menu';
export declare interface GlyphUserMenu extends Components.GlyphUserMenu {}
@ProxyCmp({
  inputs: ['i18n', 'name', 'outsideCallback']
})
@Component({
  selector: 'glyph-user-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['i18n', 'name', 'outsideCallback'],
  outputs: ['logout']
})
export class GlyphUserMenu {
  /** Logout event, trigger an event identified with **logout** key */
  logout!: IUserMenuComponent['logout'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['logout']);
  }
}
