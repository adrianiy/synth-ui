/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'glyph-components';


export declare interface SynthButton extends Components.SynthButton {}
@ProxyCmp({
  inputs: ['icon', 'text']
})
@Component({
  selector: 'glyph-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['icon', 'text']
})
export class SynthButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { ChipsBarComponent as IChipsBarComponent } from 'glyph-components/dist/types/components/chipsbar/chipsbar';
export declare interface SynthChipsbar extends Components.SynthChipsbar {}
@ProxyCmp({
  inputs: ['filtersConfig', 'i18n']
})
@Component({
  selector: 'glyph-chipsbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['filtersConfig', 'i18n'],
  outputs: ['filterSelect', 'filterClear', 'filterMultiSelect', 'clearAll']
})
export class SynthChipsbar {
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
export declare interface SynthFilter extends Components.SynthFilter {}
@ProxyCmp({
  inputs: ['description', 'haveMultiSelect', 'i18n', 'multiSelect', 'options', 'plural', 'searchPlaceholder', 'selected']
})
@Component({
  selector: 'glyph-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['description', 'haveMultiSelect', 'i18n', 'multiSelect', 'options', 'plural', 'searchPlaceholder', 'selected'],
  outputs: ['optionClickEvent', 'clearEvent', 'multiSelectEvent']
})
export class SynthFilter {
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

import { ListComponent as IListComponent } from 'glyph-components/dist/types/components/list/list';
export declare interface SynthList extends Components.SynthList {}
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
export class SynthList {
  /** Expand row event */
  expandRow!: IListComponent['expandRow'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['expandRow']);
  }
}


export declare interface SynthListRow extends Components.SynthListRow {}
@ProxyCmp({
  inputs: ['expandHandle', 'expandable', 'fields', 'i18n', 'isTotal', 'row']
})
@Component({
  selector: 'glyph-list-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['expandHandle', 'expandable', 'fields', 'i18n', 'isTotal', 'row']
})
export class SynthListRow {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SynthNoData extends Components.SynthNoData {}
@ProxyCmp({
  inputs: ['bottomText', 'i18n', 'mode', 'text']
})
@Component({
  selector: 'glyph-no-data',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['bottomText', 'i18n', 'mode', 'text']
})
export class SynthNoData {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SynthSkLoader extends Components.SynthSkLoader {}
@ProxyCmp({
  inputs: ['height', 'repetitions']
})
@Component({
  selector: 'glyph-sk-loader',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['height', 'repetitions']
})
export class SynthSkLoader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SynthTitle extends Components.SynthTitle {}
@ProxyCmp({
  inputs: ['titleText']
})
@Component({
  selector: 'glyph-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['titleText']
})
export class SynthTitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SynthToggler extends Components.SynthToggler {}
@ProxyCmp({
  inputs: ['active', 'callback']
})
@Component({
  selector: 'glyph-toggler',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'callback']
})
export class SynthToggler {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
