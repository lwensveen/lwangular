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
import { CustomerDetailsComponent } from './shop/customer-details/customer-details.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { EffectsModule } from '@ngrx/effects';
import { BrandEffects } from './shop/effects/brand.effects';
import { PhoneEffects } from './shop/effects/phone.effects';
import { OperatingSystemEffects } from './shop/effects/operating-system.effects';
import { StoreModule } from '@ngrx/store';
import * as fromBrands from './shop/reducers/brand.reducer';
import * as fromOperatingSystem from './shop/reducers/operating-system.reducer';
import * as fromPhone from './shop/reducers/phone.reducer';

@NgModule({
    declarations: [
        CustomerDetailsComponent,
        DetailComponent,
        ShopComponent,
        ShoppingCartComponent,
        WebshopComponent,
    ],
    imports: [
        StoreModule.forFeature('brands', fromBrands.reducer),
        StoreModule.forFeature('operatingSystems', fromOperatingSystem.reducer,),
        StoreModule.forFeature('phones', fromPhone.reducer,),
        EffectsModule.forFeature([
            BrandEffects,
            PhoneEffects,
            OperatingSystemEffects
        ]),
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
