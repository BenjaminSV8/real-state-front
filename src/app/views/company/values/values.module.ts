import { CommonModule } from '@angular/common';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ValuesRoutingModule } from './values-routing.module';
import { ValuesComponent } from './values.component';

@NgModule({
  declarations: [
    ValuesComponent
  ],
  imports: [
    CommonModule,
    ValuesRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ValuesModule { }