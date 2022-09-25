import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './views/nflComponent/games/games.component';
import { MenuComponent } from './layout/menu/menu.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './views/infoComponent/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { GuideComponent } from './views/infoComponent/guide/guide.component';
import { AboutUsComponent } from './views/infoComponent/about-us/about-us.component';
import { ContactComponent } from './views/infoComponent/contact/contact.component';
import { SlideComponent } from './layout/slide/slide.component';
import { TeamComponent } from './views/nflComponent/team/team.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrchestationComponent } from './layout/orchestation/orchestation.component';
import { NavHeaderComponent } from './layout/nav/nav-header/nav-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import { CardsComponent } from './layout/cards/cards.component'
import { HamburgerComponent } from './layout/hamburger/hamburger.component'

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    MenuComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    GuideComponent,
    AboutUsComponent,
    ContactComponent,
    SlideComponent,
    TeamComponent,
    OrchestationComponent,
    NavHeaderComponent,
    CardsComponent,
    HamburgerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
