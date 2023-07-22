import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Input() viewMode  = false;

  @Input() currentOrder: Order = {
    name: '',
    quantity: 0,
    category: ''
  };
}
