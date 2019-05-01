import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { PhonesService } from './services/phones.service';
import { Brands } from './services/brands';
import { BrandsService } from './services/brands.service';
import { OperatingSystem } from './services/operatingSystem';
import { OperatingSystemService } from './services/operating-system.service';
import { distinctUntilChanged, filter, tap } from 'rxjs/operators';

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit, OnDestroy {
    $phonesSubject = new BehaviorSubject(null);
    $brands: Observable<Brands[]>;
    $handleBrands = new Subject();
    $operatingSystem: Observable<OperatingSystem[]>;
    $handleOperatingSystem = new Subject();
    subscriptions: Subscription[] = [];

    constructor(
        private phonesService: PhonesService,
        private brandsService: BrandsService,
        private operatingSystemService: OperatingSystemService
    ) {
    }

    ngOnInit() {
        this.getContent();

        this.subscriptions.push(
            this.$handleBrands.pipe(
                distinctUntilChanged()
            ).subscribe(evt => {
                console.log(evt);

                const test = this.$phonesSubject.pipe(
                    tap(test => console.log('test', test)),
                    filter(phone => phone.title.includes(evt)),
                );

                test.subscribe(val => console.log(val));

            })
        );

        this.subscriptions.push(
            this.$handleOperatingSystem.pipe(
                distinctUntilChanged()
            ).subscribe(evt => {
                console.log(evt);

            })
        );

    }

    fixUrl(url) {
        return url.split(' ').join('-').toLowerCase();
    }

    getContent(): void {
        this.phonesService.getPhones().subscribe(data => this.$phonesSubject.next(data));

        this.$brands = this.brandsService.getBrands();
        this.$operatingSystem = this.operatingSystemService.getOS();
    }

    ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
}
