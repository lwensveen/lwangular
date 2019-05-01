import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebshopRoutingModule } from './webshop-routing.module';
import { WebshopComponent } from './webshop.component';
import { ShopComponent } from './shop/shop.component';
import { FlexModule } from '@angular/flex-layout';
import {
    MatButtonModule,
    MatCardModule, MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule
} from '@angular/material';

@NgModule({
    declarations: [WebshopComponent, ShopComponent],
    imports: [
        CommonModule,
        WebshopRoutingModule,
        FlexModule,
        MatCardModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule
    ]
})
export class WebshopModule {
}
