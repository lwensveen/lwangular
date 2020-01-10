import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebshopComponent } from './webshop.component';
import { ShopComponent } from './shop/shop.component';
import { DetailComponent } from './shop/detail/detail.component';
import { ShoppingCartComponent } from './shop/shoppingcart/shoppingcart.component';
import { CustomerDetailsComponent } from './shop/customer-details/customer-details.component';

const routes: Routes = [
    {
        path: 'shop/customer-details',
        component: CustomerDetailsComponent
    },
    {
        path: 'shop/mijn-gegevens',
        component: DetailComponent
    },
    {
        path: 'shop/shoppingcart',
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
export class WebshopRoutingModule {
}
