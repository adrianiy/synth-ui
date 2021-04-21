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
    GlyphAvatar,
    GlyphSelector,
    GlyphTabs,
    GlyphHeader,
    GlyphAppMenu,
    GlyphShareMenu,
    GlyphUserMenu,
    GlyphToaster,
    GlyphTimeline,
    GlyphModal,
    GlyphButtonGroup,
} from './glyph-directives/proxies';
import { ListComponent } from './components/list/list.component';
import { ChipsbarComponent } from './components/chipsbar/chipsbar.component';

import { StoreModule } from './store.module';
import { CommonModule } from '@angular/common';

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
    GlyphAvatar,
    GlyphSelector,
    GlyphTabs,
    GlyphHeader,
    GlyphAppMenu,
    GlyphShareMenu,
    GlyphUserMenu,
    GlyphToaster,
    GlyphTimeline,
    GlyphModal,
    GlyphButtonGroup,
    // components
    ListComponent,
    ChipsbarComponent,
];

@NgModule({
    declarations: DECLARATIONS,
    exports: DECLARATIONS,
    imports: [CommonModule, StoreModule, TranslateModule],
    providers: [],
})
export class GlyphComponentsModule {}
