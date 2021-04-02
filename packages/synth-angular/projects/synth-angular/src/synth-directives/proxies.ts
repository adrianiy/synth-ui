/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'synth-components';

import { ListComponent as IListComponent } from 'synth-components/dist/custom-elements/components/list/list';
export declare interface SynthList extends Components.SynthList {}
@ProxyCmp({
  inputs: ['data', 'decimals', 'defaultSortField', 'enableDownload', 'expandable', 'filterFields', 'i18n', 'limit', 'loading', 'update']
})
@Component({
  selector: 'synth-list',
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
  selector: 'synth-list-row',
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
  selector: 'synth-no-data',
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
  selector: 'synth-sk-loader',
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
  selector: 'synth-title',
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
