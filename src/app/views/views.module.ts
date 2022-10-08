import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AboutUsComponent } from './company/about-us/about-us.component';
import { ContactComponent } from './company/contact/contact.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [
    AboutUsComponent,
    ContactComponent
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ViewsModule { }
