import { NgModule } from '@angular/core';
import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { provideReduxForms } from '@angular-redux/form';
import { createLogger } from 'redux-logger';

import { rootReducer } from 'glyph-core-poc';

@NgModule({
    imports: [ NgReduxModule ],
})
export class GlyphStoreModule {
    constructor(public store: NgRedux<any>, devTools: DevToolsExtension) {
        store.configureStore(rootReducer, {}, [ createLogger() ], devTools.isEnabled() ? [ devTools.enhancer() ] : []);

        provideReduxForms(store);
    }
}
