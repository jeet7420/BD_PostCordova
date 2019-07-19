import { Injectable } from '@angular/core';
import { Beverage } from '../models/Beverage';

@Injectable({
  providedIn: 'root'
})
export class BeverageService {

  cartBeverages: Beverage[] = [];

  constructor() { }

  addToCart(bvr: Beverage): void {

    let found: boolean = false;

    for (var i = 0; i < this.cartBeverages.length; i++) {
      if (this.cartBeverages[i].beverageId === bvr.beverageId) {
        this.cartBeverages[i].quantity++;
        found = true;
        break;
      }
    }
    if (!found) {
      bvr.quantity = 1;
      this.cartBeverages.push(bvr);
    }


  }
  getCart(): Beverage[] {
    return this.cartBeverages;
  }
  clearCart(): void {
    this.cartBeverages = [];
  }
}

