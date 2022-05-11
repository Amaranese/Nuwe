import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitService } from './init.service';
import { Settings } from './models/settings';
import { MaterialModule } from './shared/material/material.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: InitService.initFactory,
            deps: [InitService],
            multi: true
        },
        {
            provide: Settings,
            useFactory: (initService) => initService.settings,
            deps: [InitService]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
