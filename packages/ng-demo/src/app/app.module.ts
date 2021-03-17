import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SynthComponentsModule, SynthServicesModule } from './../../../synth-angular/src';
import { HomeComponent } from './components/home/home.component';
import { environment } from '../environments/environment';
import { fakeBackendProvider } from '../helpers/fake-backend';

@NgModule({
    declarations: [ AppComponent, HomeComponent ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        SynthComponentsModule,
        SynthServicesModule.forRoot(environment)
    ],
    providers: [ fakeBackendProvider ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
