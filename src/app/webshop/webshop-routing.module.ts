import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebshopComponent } from './webshop.component';
import { ShopComponent } from './shop/shop.component';
import { DetailComponent } from './shop/detail/detail.component';
import { ShoppingCartComponent } from './shop/shoppingcart/shoppingcart.component';

const routes: Routes = [
    {
        path: 'shop/bestellen/mijn-gegevens',
        component: DetailComponent
    },
    {
        path: 'shop/bestellen/winkelwagen',
        component: ShoppingCartComponent
    },
    {
        path: 'shop/product/:title/:id',
        component: DetailComponent
    },
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
