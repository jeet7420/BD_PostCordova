import { Injectable } from '@angular/core';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class DispenseService {


  private activeOrders: Order[] = [{
    orderId: 1,
    partner: {
      partnerName: "",
      id: 1,
      imageUrl: ""
    },
    beverages: [{
      beverageId: 2,
      beverageName: "Hogarden",
      beverageType: "B",
      quantity: 3,
      bannerImageUrl:"../../../assets/bevPics/hg.jpg"
    }, {
      beverageId: 1,
      beverageName: "Kingfisher",
      beverageType: "B",
      quantity: 2,
      bannerImageUrl:"../../../assets/bevPics/kf.jpg"
    }]
  }];
  constructor() { }

  getActiveOrders(): Order[] {
    return [...this.activeOrders];
  }



  dispenseOrder(orderId: number, beverageId: number) {
    let dispenseSatus = 'S';
    console.log('Order dispensed!', orderId, beverageId);
    if (dispenseSatus === 'S') {
      //removing from active Orders array

      for (let i = 0; i < this.activeOrders.length; i++) {
        if (this.activeOrders[i].orderId === orderId) {
          for (let j = 0; j < this.activeOrders[i].beverages.length; j++) {
            if (+this.activeOrders[i].beverages[j].beverageId === beverageId) {
              if (this.activeOrders[i].beverages[j].quantity === 1) {
                this.activeOrders[i].beverages.splice(j, 1);
              } else {
                this.activeOrders[i].beverages[j].quantity--;
              }
            }
          }
        }
      }

    }
  }



}
