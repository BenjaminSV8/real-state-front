import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CardsComponent } from '../../../layout/cards';
import { SlideComponent } from 'src/app/layout/slide';

@NgModule({
  declarations: [
    HomeComponent, 
    CardsComponent,
    SlideComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class HomeModule { }