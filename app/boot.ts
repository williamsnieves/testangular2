/**
 * Created by willians on 17/1/17.
 */
import 'core-js';
import 'zone.js/dist/zone';
import {APP_BASE_HREF} from '@angular/common';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import { routes } from './routes';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent
    ],
    bootstrap: [AppComponent],
    providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);