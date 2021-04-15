import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { defineCustomElements } from 'glyph-components/dist/loader';

import {
    SynthList,
    SynthListRow,
    SynthNoData,
    SynthTitle,
    SynthSkLoader,
    SynthFilter,
    SynthToggler,
    SynthChipsbar,
    SynthButton,
} from './glyph-directives/proxies';
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
    SynthFilter,
    SynthToggler,
    SynthButton,
    SynthChipsbar,
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
