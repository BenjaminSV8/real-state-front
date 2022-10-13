import { CommonModule } from '@angular/common';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ObjectiveRoutingModule } from './objective-routing.module';
import { ObjectiveComponent } from './objective.component';

@NgModule({
  declarations: [
    ObjectiveComponent
  ],
  imports: [
    CommonModule,
    ObjectiveRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ObjectiveModule { }