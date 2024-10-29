import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./views/layout.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)},
      {path: '', loadChildren: () => import('./views/products/products.module').then(m => m.ProductsModule)},
      {path: 'order', loadChildren: () => import('./views/order/order.module').then(m => m.OrderModule)}
    ]
  },
  // {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled', useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
