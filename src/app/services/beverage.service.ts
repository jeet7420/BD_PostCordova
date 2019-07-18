import { Injectable } from '@angular/core';
import { Beverage } from '../models/Beverage';

@Injectable({
  providedIn: 'root'
})
export class BeverageService {

  cartBeverages: Beverage[] = [];

  constructor() { }

  addToCart(bvr: Beverage): void {
    this.cartBeverages.push(bvr);
  }
  getCart(): Beverage[] {
    return this.cartBeverages;
  }
  clearCart(): void {
    this.cartBeverages = [];
  }
}

