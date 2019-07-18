import { Component, OnInit, Input } from '@angular/core';
import { Beverage } from 'src/app/models/Beverage';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {


  @Input() addedBeverages: Beverage[];
  constructor() { }

  ngOnInit() { }

  deleteFromCart(id: number) {
    console.log("in order-details component controller, deleteFromCart", id)
  }

}
