import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebshopRoutingModule } from './webshop-routing.module';
import { WebshopComponent } from './webshop.component';
import { ShopComponent } from './shop/shop.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { DetailComponent } from './shop/detail/detail.component';
import { ShoppingCartComponent } from './shop/shoppingcart/shoppingcart.component';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule, MatProgressSpinnerModule, MatToolbarModule } from '@angular/material';
import { CustomerDetailsComponent } from './shop/customer-details/customer-details.component';

@NgModule({
    declarations: [
        CustomerDetailsComponent,
        DetailComponent,
        ShopComponent,
        ShoppingCartComponent,
        WebshopComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatToolbarModule,
        ReactiveFormsModule,
        ReactiveFormsModule,
        WebshopRoutingModule,
    ]
})
export class WebshopModule {
}
