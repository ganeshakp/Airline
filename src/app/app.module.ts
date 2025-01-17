import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [AppComponent, HeaderComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: environment.production,
          // Register the ServiceWorker as soon as the application is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerWhenStable:30000'
        }),
        // ServiceWorkerModule.register('ngsw-worker.js', {
        //     enabled: environment.production, // Register the ServiceWorker as soon as the app is stable // or after 30 seconds (whichever comes first).
        //     registrationStrategy: 'registerWhenStable:10000'
        // })
    ],
    exports: [],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
