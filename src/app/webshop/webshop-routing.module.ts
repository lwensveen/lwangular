import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebshopComponent } from './webshop.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
    {
        path: 'shop',
        component: ShopComponent
    },
    {
        path: '',
        component: WebshopComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebshopRoutingModule { }
