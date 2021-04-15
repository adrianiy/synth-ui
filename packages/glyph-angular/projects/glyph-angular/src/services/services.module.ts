import { NgModule, ModuleWithProviders } from '@angular/core';
import { GlyphFilterService } from './filters/filters.service';
import { Implementations } from './implementations.interface';

@NgModule({})
export class GlyphServicesModule {
    public static forRoot(
        environment: any,
        impl: Implementations = {} as any
    ): ModuleWithProviders<GlyphServicesModule> {
        return {
            ngModule: GlyphServicesModule,
            providers: [
                {
                    provide: GlyphFilterService,
                    useClass: impl.glyphFilterService || GlyphFilterService,
                },
                {
                    provide: 'env', // you can also use InjectionToken
                    useValue: environment,
                },
            ],
        };
    }
}

export { GlyphFilterService } from './filters/filters.service';
