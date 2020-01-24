import { Component, OnInit } from '@angular/core';
import { Order, OrderService } from '../services/order.service';

@Component({
    selector: 'app-shoppingcart',
    templateUrl: './shoppingcart.component.html',
    styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
    orders: Order[];

    constructor(private orderService: OrderService) {
    }

    ngOnInit() {
        this.orderService.$order.subscribe(orders => this.orders = orders);
    }
}
