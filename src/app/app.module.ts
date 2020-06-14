import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FooterComponent, HeaderComponent, MainComponent, NavComponent} from './layout';

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
