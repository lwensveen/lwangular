import { Component, OnInit } from '@angular/core';
import { PhonesService } from '../services/phones.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Phone } from '../services/phones';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { OrderService } from '../services/order.service';
import { uuid } from 'uuidv4';

export const durations = [
    {
        duration: '1',
        price: 1,
    },
    {
        duration: '2',
        price: 0,
    }
];

export const minutes = [
    {
        minute: '120 minutes',
        price: 0,
    },
    {
        minute: 'Unlimited',
        price: 2.50
    }
];

export const internet = [
    {
        internet: '1 GB',
        price: '13.50',
    },
    {
        internet: '5 GB',
        price: '15',
    },
    {
        internet: '10 GB',
        price: '20',
    },
    {
        internet: 'Onbeperkt GB',
        price: '35',
    }

];

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
    contractForm: FormGroup;
    durations = durations;
    id: string;
    internet = internet;
    minutes = minutes;
    phone: Phone;
    step: number;
    swapImage: string;
    title: string;
    contractInternet: { internet: number; price: number };
    contractDuration: { duration: number; price: number };
    contractMinutes: { minutes: number; price: number };

    constructor(
        private $phonesService: PhonesService,
        private activatedRoute: ActivatedRoute,
        private fb: FormBuilder,
        private orderService: OrderService,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.pipe(
            switchMap(params => this.$phonesService.getPhonebyId(params.get('title'), params.get('id')))
        ).subscribe(phone => {
            this.phone = phone;
            this.swapImage = this.phone.images.front;
        });

        this.contractForm = this.fb.group({
            contractDuration: ['1 | 1', [Validators.required]],
            contractMinutes: ['120 minutes | 0', [Validators.required]],
            contractInternet: ['1 GB | 13.50', [Validators.required]],
        });

        this.contractDuration = {
            duration: parseInt(this.contractForm.get('contractDuration').value.split('|')[0].trim(), 10),
            price: parseInt(this.contractForm.get('contractDuration').value.split('|')[1].trim(), 10)
        };
        this.contractMinutes = {
            minutes: this.contractForm.get('contractMinutes').value.split('|')[0].trim(),
            price: parseInt(this.contractForm.get('contractMinutes').value.split('|')[1].trim(), 10)
        };
        this.contractInternet = {
            internet: this.contractForm.get('contractInternet').value.split('|')[0].trim(),
            price: parseInt(this.contractForm.get('contractInternet').value.split('|')[1].trim(), 10)
        };

        this.contractForm.valueChanges.subscribe(val => {
            this.contractDuration = {
                duration: parseInt(val.contractDuration.split('|')[0], 10),
                price: parseInt(val.contractDuration.split('|')[1], 10),
            };
            this.contractMinutes = {
                minutes: val.contractMinutes.split('|')[0],
                price: parseInt(val.contractMinutes.split('|')[1], 10),
            };
            this.contractInternet = {
                internet: val.contractInternet.split('|')[0],
                price: parseInt(val.contractInternet.split('|')[1], 10),
            };
        });
    }

    onSubmit() {
        this.router.navigate(['/examples/webshop/shop/shoppingcart']).then(() => {
            this.orderService.$orders.next([{
                order: {
                    id: uuid(),
                    phone: this.phone,
                    contract: this.contractForm.value
                }
            }]);
        });

    }

    parseInt(stringInput) {
        return parseInt(stringInput, 10);
    }

    onClick(imageSrc) {
        this.swapImage = imageSrc;
    }

    setStep(index: number) {
        this.step = index;
    }

    nextStep() {
        this.step++;
        console.log(this.contractForm.get('contractDuration'));
    }

    prevStep() {
        this.step--;
    }
}
