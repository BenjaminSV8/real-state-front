import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { Routes } from '@angular/router';

import { CardsComponent } from './cards';
import { SectionDescriptionComponent } from './section-desctription';
import { SectionFeaturesComponent } from './section-features';
import { MapsComponent } from './maps';
import { SlideComponent } from './slide';
@NgModule({
  declarations: [
    CardsComponent,
    SectionDescriptionComponent,
    SectionFeaturesComponent,
    MapsComponent,
    SlideComponent
  ],
  exports: [
    CardsComponent,
    SectionDescriptionComponent,
    SectionFeaturesComponent,
    MapsComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: []
})
export class LayoutModule { }
