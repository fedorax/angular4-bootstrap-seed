import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { RouterModule, Routes } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';

const appRoutes: Routes = [
    { path: '', component: HelloComponent },
    { path: 'hello', component: HelloComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        HelloComponent
    ],
    imports: [
        BrowserModule,
        ModalModule.forRoot(),
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
