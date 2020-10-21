import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CleanupAboutComponent } from './cleanup-about/cleanup-about.component';
import { CleanupProductsComponent } from './cleanup-products/cleanup-products.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: CleanupProductsComponent
  },
  {
    path: 'about',
    component: CleanupAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
