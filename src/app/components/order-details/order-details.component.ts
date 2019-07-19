import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Beverage } from 'src/app/models/Beverage';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {


  @Input() addedBeverages: Beverage[];
  @Output() deleteItemFromCart = new EventEmitter();
  constructor() { }

  ngOnInit() { }

  deleteFromCart(id: number) {
    this.deleteItemFromCart.emit(id);
  }

}
