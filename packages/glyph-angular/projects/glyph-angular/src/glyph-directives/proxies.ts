/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'glyph-components';

export declare interface GlyphButton extends Components.GlyphButton {}
@ProxyCmp({
    inputs: ['icon', 'text'],
})
@Component({
    selector: 'glyph-button',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: '<ng-content></ng-content>',
    inputs: ['icon', 'text'],
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
    inputs: ['filtersConfig', 'i18n'],
})
@Component({
    selector: 'glyph-chipsbar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: '<ng-content></ng-content>',
    inputs: ['filtersConfig', 'i18n'],
    outputs: ['filterSelect', 'filterClear', 'filterMultiSelect', 'clearAll'],
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
    inputs: [
        'description',
        'haveMultiSelect',
        'i18n',
        'multiSelect',
        'options',
        'plural',
        'searchPlaceholder',
        'selected',
    ],
})
@Component({
    selector: 'glyph-filter',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: '<ng-content></ng-content>',
    inputs: [
        'description',
        'haveMultiSelect',
        'i18n',
        'multiSelect',
        'options',
        'plural',
        'searchPlaceholder',
        'selected',
    ],
    outputs: ['optionClickEvent', 'clearEvent', 'multiSelectEvent'],
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

import { ListComponent as IListComponent } from 'glyph-components/dist/types/components/list/list';
export declare interface GlyphList extends Components.GlyphList {}
@ProxyCmp({
    inputs: [
        'data',
        'decimals',
        'defaultSortField',
        'enableDownload',
        'expandable',
        'filterFields',
        'i18n',
        'limit',
        'loading',
        'update',
    ],
})
@Component({
    selector: 'glyph-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: '<ng-content></ng-content>',
    inputs: [
        'data',
        'decimals',
        'defaultSortField',
        'enableDownload',
        'expandable',
        'filterFields',
        'i18n',
        'limit',
        'loading',
        'update',
    ],
    outputs: ['expandRow'],
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
    inputs: ['expandHandle', 'expandable', 'fields', 'i18n', 'isTotal', 'row'],
})
@Component({
    selector: 'glyph-list-row',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: '<ng-content></ng-content>',
    inputs: ['expandHandle', 'expandable', 'fields', 'i18n', 'isTotal', 'row'],
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
    inputs: ['bottomText', 'i18n', 'mode', 'text'],
})
@Component({
    selector: 'glyph-no-data',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: '<ng-content></ng-content>',
    inputs: ['bottomText', 'i18n', 'mode', 'text'],
})
export class GlyphNoData {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface GlyphSkLoader extends Components.GlyphSkLoader {}
@ProxyCmp({
    inputs: ['height', 'repetitions'],
})
@Component({
    selector: 'glyph-sk-loader',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: '<ng-content></ng-content>',
    inputs: ['height', 'repetitions'],
})
export class GlyphSkLoader {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface GlyphTitle extends Components.GlyphTitle {}
@ProxyCmp({
    inputs: ['titleText'],
})
@Component({
    selector: 'glyph-title',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: '<ng-content></ng-content>',
    inputs: ['titleText'],
})
export class GlyphTitle {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}

export declare interface GlyphToggler extends Components.GlyphToggler {}
@ProxyCmp({
    inputs: ['active', 'callback'],
})
@Component({
    selector: 'glyph-toggler',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: '<ng-content></ng-content>',
    inputs: ['active', 'callback'],
})
export class GlyphToggler {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}
