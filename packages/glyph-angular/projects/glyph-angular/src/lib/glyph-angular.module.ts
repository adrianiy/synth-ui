import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { defineCustomElements } from 'glyph-components/dist/loader';
import { ChipsbarComponent, ListComponent } from './components';

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
    GlyphBreadcrumbs
} from './glyph-directives/proxies';

const DECLARATIONS = [
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
    GlyphBreadcrumbs,
    ListComponent,
    ChipsbarComponent,
];

defineCustomElements(window);

@NgModule({
    declarations: DECLARATIONS,
    imports: [ TranslateModule, CommonModule ],
    exports: DECLARATIONS,
})
export class GlyphAngularComponents {}
