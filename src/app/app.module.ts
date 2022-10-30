import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { OrchestationComponent } from "./layout/orchestation";
import { FooterComponent } from "./layout/footer";
import { LayoutModule } from "./layout/layout.module";
import { SpinnerComponent } from "./layout/spinner";
import { LoadingInterceptor } from "./service/interceptor";
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    OrchestationComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
