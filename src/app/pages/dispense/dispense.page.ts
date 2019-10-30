import { Component, OnInit } from '@angular/core';
import { DispenseService } from 'src/app/services/dispense.service';
import { Order } from 'src/app/models/Order';
import { DispenseRequest } from 'src/app/models/DispenseRequest';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-dispense',
  templateUrl: './dispense.page.html',
  styleUrls: ['./dispense.page.scss'],
})
export class DispensePage implements OnInit {

  constructor(private dispenseService: DispenseService) { }

  private activeOrdersList: Order[];
  activeOrdersListFromService;

  ngOnInit() {
    console.log("Service Invoked");
    var dispenseList = this.dispenseService.getActiveOrders();
    dispenseList.subscribe(data => {
      this.activeOrdersListFromService = data;
      console.log(this.activeOrdersListFromService);
      this.activeOrdersList = this.activeOrdersListFromService;
    });
    //this.activeOrdersList = this.dispenseService.getActiveOrders();
  }

  dispenseBeverage(dispenseRequest: DispenseRequest) {
    this.dispenseService.dispenseOrder(dispenseRequest.orderId, dispenseRequest.beverageId);
  }

}
