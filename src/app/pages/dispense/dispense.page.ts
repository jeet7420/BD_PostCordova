import { Component, OnInit } from '@angular/core';
import { DispenseService } from 'src/app/services/dispense.service';
import { OrderBeverage } from 'src/app/models/OrderBeverage';

@Component({
  selector: 'app-dispense',
  templateUrl: './dispense.page.html',
  styleUrls: ['./dispense.page.scss'],
})
export class DispensePage implements OnInit {

  constructor(private dispenseService: DispenseService) { }

  private activeOrdersList: OrderBeverage[];

  ngOnInit() {
    this.activeOrdersList = this.dispenseService.getActiveOrders();
  }

  dispenseBeverage(id: number) {
    this.dispenseService.dispenseOrder(id);
  }

}
