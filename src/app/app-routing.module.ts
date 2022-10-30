import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',loadChildren: () => import('./views/infoComponent/home/home.module').then(m => m.HomeModule) },
  { path: 'mi-futuro-hogar',loadChildren: () => import('./views/infoComponent/detail/detail.module').then(m => m.DetailModule) },
  { path: 'acerca-de-nosotros',loadChildren: () => import('./views/company/about-us/about-us.module').then(m => m.AboutUsModule) },
  { path: 'contactanos',loadChildren: () => import('./views/company/contact/contact.module').then(m => m.ContactModule) },
  { path: 'comentarios',loadChildren: () => import('./views/company/comments/comments.module').then(m => m.CommentsModule) },
  { path: 'mision',loadChildren: () => import('./views/company/mission/mission.module').then(m => m.MissionModule) },
  { path: 'objetivo',loadChildren: () => import('./views/company/objective/objective.module').then(m => m.ObjectiveModule) },
  { path: 'valores',loadChildren: () => import('./views/company/values/values.module').then(m => m.ValuesModule) },
  { path: 'vision',loadChildren: () => import('./views/company/vision/vision.module').then(m => m.VisionModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
