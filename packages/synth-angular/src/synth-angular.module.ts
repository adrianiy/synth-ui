import { NgModule } from '@angular/core';
import { defineCustomElements } from 'synth-components/loader';

import { SynthList, SynthListRow, SynthNoData } from './directives/proxies';

import { StoreModule } from './store/store.module';

defineCustomElements(window);

const DECLARATIONS = [
    // proxies
    SynthList,
    SynthListRow,
    SynthNoData
];

@NgModule({
    declarations: DECLARATIONS,
    exports: DECLARATIONS,
    imports: [ StoreModule ],
    providers: []
})
export class SynthComponentsModule {}
