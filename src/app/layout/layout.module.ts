import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
@NgModule({
  declarations: [
  ],
  exports: [
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: []
})
export class LayoutModule { }
