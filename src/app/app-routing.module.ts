import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/views/infoComponent/home/home.component';
import { DetailComponent } from '../app/views/infoComponent/detail/detail.component';
import { AboutUsComponent } from '../app/views/company/about-us/about-us.component';
import { ContactComponent } from '../app/views/company/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'detail', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
