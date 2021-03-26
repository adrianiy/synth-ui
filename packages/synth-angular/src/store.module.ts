import { NgModule } from '@angular/core';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { provideReduxForms } from '@angular-redux/form';
import { createLogger } from 'redux-logger';

import { rootReducer } from 'synth-core';

@NgModule({
    imports: [ NgReduxModule, NgReduxRouterModule.forRoot() ]
})
export class StoreModule {
    constructor(public store: NgRedux<any>, devTools: DevToolsExtension, ngReduxRouter: NgReduxRouter) {
        store.configureStore(rootReducer, {}, [ createLogger() ], devTools.isEnabled() ? [ devTools.enhancer() ] : []);

        if (ngReduxRouter) {
            ngReduxRouter.initialize();
        }

        provideReduxForms(store);
    }
}

export * from 'synth-core/dist/models';
