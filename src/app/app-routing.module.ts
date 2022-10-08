import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',loadChildren: () => import('./views/infoComponent/home/home.module').then(m => m.HomeModule) },
  // { path: 'about',loadChildren: () => import('./customers/customers.module').then(m => m.) },
  // { path: 'contact',loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'detail',loadChildren: () => import('./views/infoComponent/detail/detail.module').then(m => m.DetailModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
