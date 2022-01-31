import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListModule } from './product-list/product-list.module';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'product', loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductListModule)},
  {path: 'countdown', loadChildren: () => import('./timer/timer.module').then(m => m.TimerModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
