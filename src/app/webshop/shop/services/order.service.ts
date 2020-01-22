import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Order {
    bundle: string;
}

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    public $order = new Subject<Order>();

    constructor() {
    }
}
