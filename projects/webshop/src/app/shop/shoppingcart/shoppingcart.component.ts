import { Component, OnInit } from '@angular/core';
import { Ordered, OrderService } from '../services/order.service';

@Component({
    selector: 'app-shoppingcart',
    templateUrl: './shoppingcart.component.html',
    styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
    orders: Ordered[];

    constructor(private orderService: OrderService) {
    }

    ngOnInit() {
        this.orderService.$orders.subscribe(orders => this.orders = orders);
    }
}
