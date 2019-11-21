import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { PhonesService } from './services/phones.service';
import { Brands } from './services/brands';
import { BrandsService } from './services/brands.service';
import { OperatingSystem } from './services/operatingSystem';
import { OperatingSystemService } from './services/operating-system.service';
import { distinctUntilChanged, map, take } from 'rxjs/operators';
import { Phones } from './services/phones';
import { MatCheckboxChange } from '@angular/material/checkbox';

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
    phones: Phones[];
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
            ).subscribe((evt: MatCheckboxChange) => {

                if (evt.checked === true) {
                    this.$phonesSubject.pipe(
                        take(1),
                        map(phones => phones.filter(phone => phone.brand === evt.source.value)),
                    ).subscribe(val => {
                        this.$phonesSubject.next(val);
                    });
                    return;
                }

                return this.$phonesSubject.next(this.phones);
            })
        );

        this.subscriptions.push(
            this.$handleOperatingSystem.pipe(
                distinctUntilChanged()
            ).subscribe((evt: MatCheckboxChange)  => {

                if (evt.checked === true) {
                    this.$phonesSubject.pipe(
                        take(1),
                        map(phones => phones.filter(phone => phone.os === evt.source.value)),
                    ).subscribe(val => {
                        this.$phonesSubject.next(val);
                    });
                    return;
                }

                return this.$phonesSubject.next(this.phones);

            })
        );

    }

    fixUrl(url) {
        return url.split(' ').join('-').toLowerCase();
    }

    getContent(): void {
        this.phonesService.getPhones().subscribe(phones => {
            this.phones = phones;
            this.$phonesSubject.next(phones);
        });

        this.$brands = this.brandsService.getBrands();
        this.$operatingSystem = this.operatingSystemService.getOS();
    }

    ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
}
