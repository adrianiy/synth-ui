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

import { ArticleComponent as IArticleComponent } from 'glyph-components/dist/types/components/article/article';
export declare interface GlyphArticle extends Components.GlyphArticle {}
@ProxyCmp({
  inputs: ['article', 'i18n', 'imageType', 'isClickable', 'isVisible', 'parseImageUrl', 'quantityField', 'useBackdropDecoration'],
  methods: ['getImageSize', 'hideTooltip', 'setArticleSize']
})
@Component({
  selector: 'glyph-article',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['article', 'i18n', 'imageType', 'isClickable', 'isVisible', 'parseImageUrl', 'quantityField', 'useBackdropDecoration'],
  outputs: ['articleClick', 'articleVisible']
})
export class GlyphArticle {
  /** Click event callback */
  articleClick!: IArticleComponent['articleClick'];
  /** Article gets visible event */
  articleVisible!: IArticleComponent['articleVisible'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['articleClick', 'articleVisible']);
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
  inputs: ['cancel', 'icon', 'interface', 'onlyText', 'text']
})
@Component({
  selector: 'glyph-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['cancel', 'icon', 'interface', 'onlyText', 'text']
})
export class GlyphButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GlyphButtonGroup extends Components.GlyphButtonGroup {}
@ProxyCmp({
  inputs: ['alignment', 'buttons', 'size']
})
@Component({
  selector: 'glyph-button-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['alignment', 'buttons', 'size']
})
export class GlyphButtonGroup {
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
  outputs: ['filterSelect', 'filterClear', 'updateFilter', 'clearAll']
})
export class GlyphChipsbar {
  /** Filter select event */
  filterSelect!: IChipsBarComponent['filterSelect'];
  /** Filter clear event */
  filterClear!: IChipsBarComponent['filterClear'];
  /** Filter multiselect event */
  updateFilter!: IChipsBarComponent['updateFilter'];
  /** Clear all filters event */
  clearAll!: IChipsBarComponent['clearAll'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['filterSelect', 'filterClear', 'updateFilter', 'clearAll']);
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


export declare interface GlyphFlex extends Components.GlyphFlex {}
@ProxyCmp({
  inputs: ['around', 'bottom', 'center', 'column', 'flexClass', 'flexId', 'flexStyle', 'left', 'middle', 'onClickEvent', 'right', 'row', 'spaced', 'testId', 'top']
})
@Component({
  selector: 'glyph-flex',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['around', 'bottom', 'center', 'column', 'flexClass', 'flexId', 'flexStyle', 'left', 'middle', 'onClickEvent', 'right', 'row', 'spaced', 'testId', 'top']
})
export class GlyphFlex {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { HeaderComponent as IHeaderComponent } from 'glyph-components/dist/types/components/header/header';
export declare interface GlyphHeader extends Components.GlyphHeader {}
@ProxyCmp({
  inputs: ['activeBrand', 'appData', 'appSubtitle', 'appTitle', 'avatar', 'brand', 'calendarEvents', 'events', 'i18n', 'interface', 'menu', 'notifications', 'search', 'share', 'timeline', 'userData', 'userMenuConfig']
})
@Component({
  selector: 'glyph-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activeBrand', 'appData', 'appSubtitle', 'appTitle', 'avatar', 'brand', 'calendarEvents', 'events', 'i18n', 'interface', 'menu', 'notifications', 'search', 'share', 'timeline', 'userData', 'userMenuConfig'],
  outputs: ['langChange', 'themeChange', 'decimalsChange']
})
export class GlyphHeader {
  /** Language change event */
  langChange!: IHeaderComponent['langChange'];
  /** Theme change event */
  themeChange!: IHeaderComponent['themeChange'];
  /** Decimals change event */
  decimalsChange!: IHeaderComponent['decimalsChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['langChange', 'themeChange', 'decimalsChange']);
  }
}

import { InputComponent as IInputComponent } from 'glyph-components/dist/types/components/input/input';
export declare interface GlyphInput extends Components.GlyphInput {}
@ProxyCmp({
  inputs: ['autoFocus', 'box', 'error', 'inputType', 'placeholder', 'search']
})
@Component({
  selector: 'glyph-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoFocus', 'box', 'error', 'inputType', 'placeholder', 'search'],
  outputs: ['textChange', 'enterKey']
})
export class GlyphInput {
  /** Text change event */
  textChange!: IInputComponent['textChange'];
  /** Enter key event */
  enterKey!: IInputComponent['enterKey'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['textChange', 'enterKey']);
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


export declare interface GlyphLogin extends Components.GlyphLogin {}
@ProxyCmp({
  inputs: ['i18n', 'interface', 'login', 'loginSuccess', 'version']
})
@Component({
  selector: 'glyph-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['i18n', 'interface', 'login', 'loginSuccess', 'version']
})
export class GlyphLogin {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { ModalComponent as IModalComponent } from 'glyph-components/dist/types/components/modal/modal';
export declare interface GlyphModal extends Components.GlyphModal {}
@ProxyCmp({
  inputs: ['applyButton', 'cancelButton', 'closeButton', 'interface', 'modalTitle', 'visible']
})
@Component({
  selector: 'glyph-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['applyButton', 'cancelButton', 'closeButton', 'interface', 'modalTitle', 'visible'],
  outputs: ['close', 'apply', 'cancel']
})
export class GlyphModal {
  /** close event */
  close!: IModalComponent['close'];
  /** apply event */
  apply!: IModalComponent['apply'];
  /** cancel event */
  cancel!: IModalComponent['cancel'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['close', 'apply', 'cancel']);
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

import { RankingComponent as IRankingComponent } from 'glyph-components/dist/types/components/ranking/ranking';
export declare interface GlyphRanking extends Components.GlyphRanking {}
@ProxyCmp({
  inputs: ['columnGap', 'columns', 'gap', 'i18n', 'imageType', 'innerColumns', 'innerGap', 'parseImageUrl', 'rankingData', 'rankingHeader', 'rowGap', 'rows', 'useBackdropDecoration'],
  methods: ['changeScroll']
})
@Component({
  selector: 'glyph-ranking',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['columnGap', 'columns', 'gap', 'i18n', 'imageType', 'innerColumns', 'innerGap', 'parseImageUrl', 'rankingData', 'rankingHeader', 'rowGap', 'rows', 'useBackdropDecoration'],
  outputs: ['scrollChange']
})
export class GlyphRanking {
  /** Scrolled state change event */
  scrollChange!: IRankingComponent['scrollChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['scrollChange']);
  }
}


export declare interface GlyphRankingLayout extends Components.GlyphRankingLayout {}
@ProxyCmp({
  inputs: ['columnGap', 'compRankingData', 'i18n', 'rankingData', 'rowGap', 'useBackdropDecoration']
})
@Component({
  selector: 'glyph-ranking-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['columnGap', 'compRankingData', 'i18n', 'rankingData', 'rowGap', 'useBackdropDecoration']
})
export class GlyphRankingLayout {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GlyphScroll extends Components.GlyphScroll {}
@ProxyCmp({
  inputs: ['containerClass', 'height', 'hideScrollBar', 'horizontal', 'initCallback', 'tiny', 'vertical', 'width']
})
@Component({
  selector: 'glyph-scroll',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['containerClass', 'height', 'hideScrollBar', 'horizontal', 'initCallback', 'tiny', 'vertical', 'width']
})
export class GlyphScroll {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { SelectorComponent as ISelectorComponent } from 'glyph-components/dist/types/components/selector/selector';
export declare interface GlyphSelector extends Components.GlyphSelector {}
@ProxyCmp({
  inputs: ['complexOptions', 'interface', 'label', 'multiSelect', 'options', 'searchPlaceholder']
})
@Component({
  selector: 'glyph-selector',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['complexOptions', 'interface', 'label', 'multiSelect', 'options', 'searchPlaceholder'],
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


export declare interface GlyphSelectorOptions extends Components.GlyphSelectorOptions {}
@ProxyCmp({
  inputs: ['closeEvent', 'complexOptions', 'multiSelect', 'optionClickEvent', 'options', 'searchPlaceholder']
})
@Component({
  selector: 'glyph-selector-options',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['closeEvent', 'complexOptions', 'multiSelect', 'optionClickEvent', 'options', 'searchPlaceholder']
})
export class GlyphSelectorOptions {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
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

import { SliderComponent as ISliderComponent } from 'glyph-components/dist/types/components/slider/slider';
export declare interface GlyphSlider extends Components.GlyphSlider {}
@ProxyCmp({
  inputs: ['currentValue', 'options']
})
@Component({
  selector: 'glyph-slider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['currentValue', 'options'],
  outputs: ['optionChange']
})
export class GlyphSlider {
  /** Option change event */
  optionChange!: ISliderComponent['optionChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['optionChange']);
  }
}

import { SortableComponent as ISortableComponent } from 'glyph-components/dist/types/components/sortable-list/sortable';
export declare interface GlyphSortable extends Components.GlyphSortable {}
@ProxyCmp({
  inputs: ['config', 'list', 'valueGetter']
})
@Component({
  selector: 'glyph-sortable',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['config', 'list', 'valueGetter'],
  outputs: ['sortChange']
})
export class GlyphSortable {
  /** Event emitted on drag end emitting new list configuration */
  sortChange!: ISortableComponent['sortChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['sortChange']);
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
  inputs: ['calendarEvents', 'events', 'i18n', 'interface', 'outsideCallback']
})
@Component({
  selector: 'glyph-timeline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['calendarEvents', 'events', 'i18n', 'interface', 'outsideCallback']
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
  inputs: ['customConfig', 'decimals', 'i18n', 'interface', 'languages', 'name', 'outsideCallback', 'themes']
})
@Component({
  selector: 'glyph-user-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['customConfig', 'decimals', 'i18n', 'interface', 'languages', 'name', 'outsideCallback', 'themes'],
  outputs: ['logout', 'langChange', 'themeChange', 'decimalsChange']
})
export class GlyphUserMenu {
  /** Logout event, trigger an event identified with **logout** key */
  logout!: IUserMenuComponent['logout'];
  /** Language change event */
  langChange!: IUserMenuComponent['langChange'];
  /** Theme change event */
  themeChange!: IUserMenuComponent['themeChange'];
  /** Decimals change event */
  decimalsChange!: IUserMenuComponent['decimalsChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['logout', 'langChange', 'themeChange', 'decimalsChange']);
  }
}
