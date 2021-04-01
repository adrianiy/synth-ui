import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { defineCustomElements } from 'synth-components/dist/loader';

import { SynthList, SynthListRow, SynthNoData, SynthTitle, SynthSkLoader } from './synth-directives/proxies';
import { ListComponent } from './components/list/list.component';

import { StoreModule } from './store.module';

defineCustomElements(window);

const DECLARATIONS = [
    // proxies
    SynthList,
    SynthListRow,
    SynthNoData,
    SynthTitle,
    SynthSkLoader,
    // components
    ListComponent,
];

@NgModule({
    declarations: DECLARATIONS,
    exports: DECLARATIONS,
    imports: [StoreModule, TranslateModule],
    providers: [],
})
export class SynthComponentsModule {}
