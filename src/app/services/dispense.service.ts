import { Injectable } from '@angular/core';
import { OrderBeverage } from '../models/OrderBeverage';

@Injectable({
  providedIn: 'root'
})
export class DispenseService {


  private activeOrders: OrderBeverage[] = [{
    orderBeverageId: 1,
    orderId: 1,
    beverage: {
      beverageId: 2,
      beverageName: "Hogarden",
      beverageType: "B"
    }
  },
  {
    orderBeverageId: 2,
    orderId: 1,
    beverage: {
      beverageId: 2,
      beverageName: "Hogarden",
      beverageType: "B",
    }
  },
  {
    orderBeverageId: 3,
    orderId: 1,
    beverage: {
      beverageId: 1,
      beverageName: "Kingfisher",
      beverageType: "B",
    }
  }];
  constructor() { }

  getActiveOrders(): OrderBeverage[] {
    return [...this.activeOrders];
  }

  dispenseOrder(orderBeverageId: number) {
    console.log("Order dispensed!", orderBeverageId);
  }



}
