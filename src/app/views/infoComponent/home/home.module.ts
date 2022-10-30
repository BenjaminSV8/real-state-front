import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CardsComponent } from '../../../layout/cards';
import { FilterCardsComponent } from '../../../layout/filter-cards/filter-cards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SlideComponent } from 'src/app/layout/slide';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@NgModule({
  declarations: [
    HomeComponent, 
    CardsComponent,
    FilterCardsComponent,
    SlideComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SlickCarouselModule
  ],
  providers: [

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class HomeModule { }