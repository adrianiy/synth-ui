import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlyphAngularComponents, GlyphAngularServices, GlyphStoreModule } from 'glyph-angular-poc';
import { HomeComponent } from './components/home/home.component';
import { fakeBackendProvider } from '../helpers/fake-backend';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

export function createTranslateLoader(http: HttpClient) {
    return new MultiTranslateHttpLoader(http, [
        { prefix: './assets/i18n/shared/', suffix: '.json' },
        { prefix: './assets/i18n/countries/', suffix: '.json' },
        { prefix: './assets/i18n/filters/', suffix: '.json' },
        { prefix: './assets/i18n/screens/', suffix: '.json' },
    ]);
}

@NgModule({
    declarations: [AppComponent, HomeComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        GlyphAngularComponents,
        GlyphStoreModule,
        GlyphAngularServices.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient],
            },
        }),
    ],
    providers: [fakeBackendProvider],
    bootstrap: [AppComponent],
})
export class AppModule {}
