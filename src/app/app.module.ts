import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './layout/menu/menu.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './views/infoComponent/home/home.component';
import { DetailComponent } from './views/infoComponent/detail/detail.component';
import { AboutUsComponent } from './views/company/about-us/about-us.component';
import { ContactComponent } from './views/company/contact/contact.component';
import { SlideComponent } from './layout/slide/slide.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrchestationComponent } from './layout/orchestation/orchestation.component';
import { NavHeaderComponent } from './layout/nav/nav-header/nav-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsComponent } from './layout/cards/cards.component'
import { HamburgerComponent } from './layout/hamburger/hamburger.component'
import { SectionDescriptionComponent } from './layout/section-desctription/section-description.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    HomeComponent,
    AboutUsComponent,
    ContactComponent,
    SlideComponent,
    OrchestationComponent,
    NavHeaderComponent,
    CardsComponent,
    HamburgerComponent,
    FooterComponent,
    DetailComponent,
    SectionDescriptionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
