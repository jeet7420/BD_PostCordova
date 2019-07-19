import { Component, OnInit } from '@angular/core';
import { DispenseService } from 'src/app/services/dispense.service';
import { Order } from 'src/app/models/Order';

@Component({
  selector: 'app-dispense',
  templateUrl: './dispense.page.html',
  styleUrls: ['./dispense.page.scss'],
})
export class DispensePage implements OnInit {

  constructor(private dispenseService: DispenseService) { }

  private activeOrdersList: Order[];

  ngOnInit() {
    this.activeOrdersList = this.dispenseService.getActiveOrders();
  }

  dispenseBeverage(orderId: number, beverageId: number) {
    this.dispenseService.dispenseOrder(orderId, beverageId);
  }

}
