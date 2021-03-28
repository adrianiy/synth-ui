import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { defineCustomElements } from 'synth-components/loader';

import { SynthList, SynthListRow, SynthNoData } from './synth-directives/proxies';

import { StoreModule } from './store.module';

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
    imports: [ StoreModule, TranslateModule ],
    providers: []
})
export class SynthComponentsModule {}
