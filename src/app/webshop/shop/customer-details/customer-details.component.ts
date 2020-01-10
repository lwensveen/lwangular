import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-customer-details',
    templateUrl: './customer-details.component.html',
    styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
    customerDetails = this.formBuilder.group({
        typeOrder: [''],
        gender: [''],
        firstName: [''],
        lastName: [''],
        mobile: [''],
        email: [''],
        dob: this.formBuilder.group({
            day: [''],
            month: [''],
            year: [''],
        }),
        address: this.formBuilder.group({
            street: [''],
            city: [''],
            state: [''],
            zip: ['']
        }),
    });

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
    }
}
