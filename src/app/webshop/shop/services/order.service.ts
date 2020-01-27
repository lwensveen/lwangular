import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Phone } from './phones';

export interface Order {
    id: string;
    phone: Phone;
    contract: any;
}

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    public $order = new ReplaySubject<any>();

    constructor() {
    }
}
