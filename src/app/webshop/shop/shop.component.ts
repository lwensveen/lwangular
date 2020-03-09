import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { Brand } from './services/brands';
import { OperatingSystem } from './services/operatingSystem';
import { Phone } from './services/phones';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Store } from '@ngrx/store';
import { filter, reset } from './actions/phone.actions';

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit, OnDestroy {
    brands$: Observable<Brand[]> = this.store.select(state => state.brands.brands);
    operatingSystems$: Observable<OperatingSystem[]> = this.store.select(state => state.operatingSystems.operatingSystems);
    phones$: Observable<Phone[]> = this.store.select(state => state.phones.phones);


    $handleBrands = new Subject();
    $handleOperatingSystem = new Subject();
    subscriptions: Subscription[] = [];

    constructor(
        private store: Store<{
            brands: {
                brands: Brand[];
            },
            operatingSystems: {
                operatingSystems: OperatingSystem[];
            },
            phones: {
                phones: Phone[];
            },
        }>
    ) {
    }

    ngOnInit() {
        this.store.dispatch({type: '[Shop Page] Load Brands'});
        this.store.dispatch({type: '[Shop Page] Load OperatingSystems'});
        this.store.dispatch({type: '[Shop Page] Load Phones'});

        this.subscriptions.push(
            this.$handleBrands.subscribe((evt: MatCheckboxChange) => {
                if (evt.checked === true) {
                    return this.store.dispatch(filter({evt}));
                }
                return this.store.dispatch(reset());
            })
        );

        this.subscriptions.push(
            this.$handleOperatingSystem.subscribe((evt: MatCheckboxChange) => {
                if (evt.checked === true) {
                    this.store.dispatch(filter({evt}));
                }
            })
        );
    }

    fixUrl(url) {
        return url.replace(/\s/g, '');
    }

    ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
}
