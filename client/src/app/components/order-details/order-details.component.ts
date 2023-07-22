import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  @Input() viewMode  = false;

  @Input() currentOrder: Order = {
    name: '',
    quantity: 0,
    category: ''
  };

  message = '';

  constructor(private orderService: OrderService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if(!this.viewMode) {
      this.message = '';
      this.getOrder(this.route.snapshot.params["id"]);
    }
  }

  getOrder(id: string): void {
    this.orderService.get(id)
      .subscribe({
        next: (data) => {
          this.currentOrder = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateOrder(): void {

    this.message = '';

    this.orderService.update(this.currentOrder.id, this.currentOrder)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.message = 'The order was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteOrder(): void {

    this.orderService.delete(this.currentOrder.id)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/order']);
        },
        error: (e) => console.error(e)
      });
  }
}


