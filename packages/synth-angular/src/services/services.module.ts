import { NgModule, ModuleWithProviders } from "@angular/core";
import { SynthFilterService } from "./filters/filters.service";
import { Implementations } from "./implementations.interface";

@NgModule({})
export class SynthServicesModule {
    public static forRoot(
        environment: any,
        impl: Implementations = {} as any
    ): ModuleWithProviders<SynthServicesModule> {
        return {
            ngModule: SynthServicesModule,
            providers: [
                {
                    provide: SynthFilterService,
                    useClass: impl.filterService || SynthFilterService
                },
                {
                    provide: "env", // you can also use InjectionToken
                    useValue: environment
                }
            ]
        };
    }
}

export { SynthFilterService } from "./filters/filters.service";
