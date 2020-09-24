import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrandComponent, FooterComponent, HeaderComponent, MainComponent} from './layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    FooterComponent,
    BrandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [MainComponent]
})
export class AppModule { } 
