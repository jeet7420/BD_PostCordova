import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { DispenseRequest } from 'src/app/models/DispenseRequest';

@Component({
  selector: 'app-active-order',
  templateUrl: './active-order.component.html',
  styleUrls: ['./active-order.component.scss'],
})
export class ActiveOrderComponent implements OnInit {

  constructor() { }

  @Input() activeOrder: Order;
  @Output() dispenseBeverage = new EventEmitter();

  dispenseBevForOrder(dispenseRequest: DispenseRequest) {
    dispenseRequest.orderId = this.activeOrder.orderId;
    this.dispenseBeverage.emit(dispenseRequest);
  }

  ngOnInit() {}

}
