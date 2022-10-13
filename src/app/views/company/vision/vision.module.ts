import { CommonModule } from '@angular/common';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { VisionRoutingModule } from './vision-routing.module';
import { VisionComponent } from './vision.component';

@NgModule({
  declarations: [
    VisionComponent
  ],
  imports: [
    CommonModule,
    VisionRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class VisionModule { }