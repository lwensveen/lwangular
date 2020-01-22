import { Component, OnInit } from '@angular/core';
import { PhonesService } from '../services/phones.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Phone } from '../services/phones';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
    id: string;
    contractForm: FormGroup;
    phone: Phone;
    step = 0;
    swapImage: string;
    title: string;

    constructor(
        private $phonesService: PhonesService,
        private activatedRoute: ActivatedRoute,
        private fb: FormBuilder,
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
            contractDuration: ['1', Validators.required],
            contractMinutes: ['1', Validators.required],
            contractBundles: ['1', Validators.required],
        });
    }

    onSubmit() {
        this.router.navigate(['/examples/webshop/shop/shoppingcart']);
        console.warn(this.contractForm.value);
    }

    onClick(imageSrc) {
        this.swapImage = imageSrc;
    }

    setStep(index: number) {
        this.step = index;
    }

    nextStep() {
        this.step++;
    }

    prevStep() {
        this.step--;
    }
}
