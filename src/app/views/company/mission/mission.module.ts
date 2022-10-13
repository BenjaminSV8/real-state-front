import { CommonModule } from '@angular/common';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MissionRoutingModule } from './mission-routing.module';
import { MissionComponent } from './mission.component';

@NgModule({
  declarations: [
    MissionComponent
  ],
  imports: [
    CommonModule,
    MissionRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class MissionModule { }