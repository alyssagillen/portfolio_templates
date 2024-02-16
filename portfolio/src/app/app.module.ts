import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingTimelessComponent } from './landing-timeless/landing-timeless.component';
import { LandingMinimalistComponent } from './landing-minimalist/landing-minimalist.component';
import { LandingShowcaseComponent } from './landing-showcase/landing-showcase.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingTimelessComponent,
    LandingMinimalistComponent,
    LandingShowcaseComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
