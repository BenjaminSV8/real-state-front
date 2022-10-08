import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { OrchestationComponent } from './orchestation/orchestation.component';
import { CardsComponent } from './cards/cards.component';
import { SectionDescriptionComponent } from './section-desctription/section-description.component';
import { SectionFeaturesComponent } from './section-features/section-features.component';
import { MapsComponent } from './maps/maps.component';
import { SlideComponent } from './slide/slide.component';
import { FooterComponent } from './footer/footer.component';
import { GoogleMapsModule } from '@angular/google-maps';
@NgModule({
  declarations: [
    CardsComponent,
    FooterComponent,
    SectionDescriptionComponent,
    SectionFeaturesComponent,
    MapsComponent,
    SlideComponent,
    OrchestationComponent,
  ],
  exports: [
    CardsComponent,
    FooterComponent,
    SectionDescriptionComponent,
    SectionFeaturesComponent,
    MapsComponent,
    SlideComponent,
    OrchestationComponent,
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
