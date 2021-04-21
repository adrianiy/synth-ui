import { NgModule, ModuleWithProviders } from '@angular/core';
import { GlyphFilterService } from './filters/filters.service';
import { Implementations } from './implementations.interface';

@NgModule({})
export class GlyphServicesModule {
    public static forRoot(impl: Implementations = {} as any): ModuleWithProviders<GlyphServicesModule> {
        return {
            ngModule: GlyphServicesModule,
            providers: [
                {
                    provide: GlyphFilterService,
                    useClass: impl.glyphFilterService || GlyphFilterService,
                },
            ],
        };
    }
}

export { GlyphFilterService } from './filters/filters.service';
