import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Ordered, OrderService } from '../services/order.service';
import { uuid } from 'uuidv4';
import { Test } from 'tslint';

export interface FinalOrder {
    order: Test;
}

export interface Test {
    id: string;
    userDetails: UserDetails;
    orders: Ordered[]
}

export interface UserDetails {
    firstname: string;
}

@Component({
    selector: 'app-customer-details',
    templateUrl: './customer-details.component.html',
    styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
    step: number;
    orders: Ordered[];
    finalOrder: FinalOrder;

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
        private orderService: OrderService
    ) {
    }

    ngOnInit(): void {
        this.orderService.$orders.subscribe(orders => this.orders = orders);
    }

    onSubmit() {
        console.log(this.customerDetails.value);
        console.log(this.orders);
        this.finalOrder = {order: {id: uuid(), userDetails: {...this.customerDetails.value}, orders: {...this.orders}}};
        console.log(this.finalOrder);
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
