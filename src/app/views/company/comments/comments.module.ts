import { CommonModule } from '@angular/common';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments.component';

@NgModule({
  declarations: [
    CommentsComponent,
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class CommentsModule { }