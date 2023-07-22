import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {

  order?: Order[];
  currentOrder: Order | {} = {};
  currentIndex = -1;
  name = '';

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {

    this.retrieveOrder();
  }

  retrieveOrder(): void {

    this.orderService.getAll()
      .subscribe({
        next: (data) => {
          this.order = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {

    this.retrieveOrder();
    this.currentOrder = {};
    this.currentIndex = -1;
  }

  setActiveOrder(order: Order, index: number): void {

    this.currentOrder = order;
    this.currentIndex = index;
  }

  removeAllOrder(): void {

    this.orderService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
          },
        error: (e) => console.error(e)
      });
  }

  searchName(): void {

    this.currentOrder = {};
    this.currentIndex = -1;

    this.orderService.findByName(this.name)
      .subscribe({
        next: (data: Order[] | undefined) => {
          this.order = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }


}
