import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-customer-details',
    templateUrl: './customer-details.component.html',
    styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent {
    customerDetails = this.formBuilder.group({
        typeOrder: ['', Validators.required],
        gender: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        mobile: ['', Validators.required],
        email: ['', [Validators.email, Validators.required]],
        dob: this.formBuilder.group({
            day: ['', [Validators.minLength(2), Validators.maxLength(2), Validators.required]],
            month: ['', [Validators.minLength(2), Validators.maxLength(2), Validators.required]],
            year: ['', [Validators.minLength(4), Validators.maxLength(4), Validators.required]],
        }),
        address: this.formBuilder.group({
            street: ['', Validators.required],
            houseNumber: ['', Validators.required],
            city: ['', Validators.required],
            state: [''],
            zipcode: ['', Validators.required],
        }),
    });

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
    ) {
    }

    onSubmit() {
        console.warn(this.customerDetails.value);
    }
}
