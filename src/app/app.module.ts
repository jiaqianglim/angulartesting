import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Outer1Component } from './outer1/outer1.component';
import { Outer2Component } from './outer2/outer2.component';
import { Inner1Component } from './inner1/inner1.component';
import { EgressService } from './egress.service';
import { MainComponent } from './main/main.component';
import { Outer2widComponent } from './outer2wid/outer2wid.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    Outer1Component,
    Outer2Component,
    Inner1Component,
    MainComponent,
    Outer2widComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EgressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
