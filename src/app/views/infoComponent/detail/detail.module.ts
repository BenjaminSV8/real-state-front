import { CommonModule } from '@angular/common';

import { DetailComponent } from './detail.component'
import { DetailRoutingModule } from './detail-routing.module'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    DetailRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class DetailModule { }