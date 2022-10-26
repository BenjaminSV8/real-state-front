import { CommonModule } from '@angular/common';

import { DetailComponent } from './detail.component'
import { DetailRoutingModule } from './detail-routing.module'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { SectionDescriptionComponent } from 'src/app/layout/section-desctription';
import { SectionFeaturesComponent } from 'src/app/layout/section-features';
import { SectionSellerComponent } from 'src/app/layout/section-sellers';
import { SectionFilterComponent } from 'src/app/layout/section-filters';
import { SectionContactComponent } from 'src/app/layout/section-contact';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SectionSlideComponent } from 'src/app/layout/section-slide';
import { MapsComponent } from 'src/app/layout/maps';


@NgModule({
  declarations: [
    DetailComponent,
    SectionFeaturesComponent,
    SectionSellerComponent,
    SectionContactComponent,
    SectionFilterComponent,
    SectionDescriptionComponent,
    SectionSlideComponent,
    MapsComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    SlickCarouselModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class DetailModule { }