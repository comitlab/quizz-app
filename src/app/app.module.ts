import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { FooterComponent, HeaderComponent, MainComponent } from './layout';
import { from } from 'rxjs';

import { QuizzService } from './services/quizz/quizz.service';

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    QuizzService
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
