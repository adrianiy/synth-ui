/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'synth-components';


export declare interface SynthList extends Components.SynthList {}
@ProxyCmp({
    inputs: [ 'data', 'decimals', 'decorationType', 'enableDownload', 'expandable', 'fieldsConfig', 'filterFields', 'headerTitle', 'limit', 'loading', 'update' ]
})
@Component({
    selector: 'synth-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: '<ng-content></ng-content>',
    inputs: [ 'data', 'decimals', 'decorationType', 'enableDownload', 'expandable', 'fieldsConfig', 'filterFields', 'headerTitle', 'limit', 'loading', 'update' ]
})
export class SynthList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
      c.detach();
      this.el = r.nativeElement;
  }
}


export declare interface SynthListRow extends Components.SynthListRow {}
@ProxyCmp({
    inputs: [ 'decorationType', 'expandable', 'fieldsConfig', 'i18n', 'isTotal', 'row' ]
})
@Component({
    selector: 'synth-list-row',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: '<ng-content></ng-content>',
    inputs: [ 'decorationType', 'expandable', 'fieldsConfig', 'i18n', 'isTotal', 'row' ]
})
export class SynthListRow {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
      c.detach();
      this.el = r.nativeElement;
  }
}


export declare interface SynthNoData extends Components.SynthNoData {}

@Component({
    selector: 'synth-no-data',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: '<ng-content></ng-content>'
})
export class SynthNoData {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
      c.detach();
      this.el = r.nativeElement;
  }
}
