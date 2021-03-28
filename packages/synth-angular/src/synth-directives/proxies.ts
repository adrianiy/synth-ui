/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'synth-components';


export declare interface SynthList extends Components.SynthList {}
@ProxyCmp({
    inputs: [ 'data', 'decimals', 'defaultSortField', 'enableDownload', 'expandable', 'filterFields', 'limit', 'loading', 'update' ]
})
@Component({
    selector: 'synth-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: '<ng-content></ng-content>',
    inputs: [ 'data', 'decimals', 'defaultSortField', 'enableDownload', 'expandable', 'filterFields', 'limit', 'loading', 'update' ]
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
    inputs: [ 'expandable', 'i18n', 'isTotal', 'row' ]
})
@Component({
    selector: 'synth-list-row',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: '<ng-content></ng-content>',
    inputs: [ 'expandable', 'i18n', 'isTotal', 'row' ]
})
export class SynthListRow {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
      c.detach();
      this.el = r.nativeElement;
  }
}


export declare interface SynthLoader extends Components.SynthLoader {}
@ProxyCmp({
    inputs: [ 'height', 'repetitions' ]
})
@Component({
    selector: 'synth-loader',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: '<ng-content></ng-content>',
    inputs: [ 'height', 'repetitions' ]
})
export class SynthLoader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
      c.detach();
      this.el = r.nativeElement;
  }
}


export declare interface SynthNoData extends Components.SynthNoData {}
@ProxyCmp({
    inputs: [ 'bottomText', 'mode', 'text' ]
})
@Component({
    selector: 'synth-no-data',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: '<ng-content></ng-content>',
    inputs: [ 'bottomText', 'mode', 'text' ]
})
export class SynthNoData {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
      c.detach();
      this.el = r.nativeElement;
  }
}


export declare interface SynthTitle extends Components.SynthTitle {}
@ProxyCmp({
    inputs: [ 'titleText' ]
})
@Component({
    selector: 'synth-title',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: '<ng-content></ng-content>',
    inputs: [ 'titleText' ]
})
export class SynthTitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
      c.detach();
      this.el = r.nativeElement;
  }
}
