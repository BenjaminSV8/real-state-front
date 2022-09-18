import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/views/infoComponent/home/home.component';
import { GamesComponent } from '../app/views/nflComponent/games/games.component';
import { TeamComponent } from '../app/views/nflComponent/team/team.component';
import { LoginComponent } from '../app/views/login/login.component';
import { AboutUsComponent } from '../app/views/infoComponent/about-us/about-us.component';
import { GuideComponent } from '../app/views/infoComponent/guide/guide.component';
import { ContactComponent } from '../app/views/infoComponent/contact/contact.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'games', component: GamesComponent },
  { path: 'team', component: TeamComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
