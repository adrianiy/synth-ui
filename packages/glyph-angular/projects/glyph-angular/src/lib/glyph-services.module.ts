import { NgModule, ModuleWithProviders } from '@angular/core';
import { FilterService } from './services/filters/filters.service';
import { Implementations } from './services/implementations.interface';

@NgModule({})
export class GlyphAngularServices {
    public static forRoot(impl: Implementations = {} as any): ModuleWithProviders<GlyphAngularServices> {
        return {
            ngModule: GlyphAngularServices,
            providers: [
                {
                    provide: FilterService,
                    useClass: impl.filterService || FilterService,
                },
            ],
        };
    }
}
