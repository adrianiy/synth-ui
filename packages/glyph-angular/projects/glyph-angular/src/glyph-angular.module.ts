import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { defineCustomElements } from 'glyph-components/dist/loader';

import {
    GlyphList,
    GlyphListRow,
    GlyphNoData,
    GlyphTitle,
    GlyphSkLoader,
    GlyphFilter,
    GlyphFilterOptions,
    GlyphToggler,
    GlyphChipsbar,
    GlyphButton,
} from './glyph-directives/proxies';
import { ListComponent } from './components/list/list.component';

import { StoreModule } from './store.module';

defineCustomElements(window);

const DECLARATIONS = [
    // proxies
    GlyphList,
    GlyphListRow,
    GlyphNoData,
    GlyphTitle,
    GlyphSkLoader,
    GlyphFilter,
    GlyphFilterOptions,
    GlyphToggler,
    GlyphButton,
    GlyphChipsbar,
    // components
    ListComponent,
];

@NgModule({
    declarations: DECLARATIONS,
    exports: DECLARATIONS,
    imports: [StoreModule, TranslateModule],
    providers: [],
})
export class GlyphComponentsModule {}
