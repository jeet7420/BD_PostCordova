import { Component, OnInit, Input } from '@angular/core';
import { Beverage } from 'src/app/models/Beverage';

@Component({
  selector: 'app-beverage-item',
  templateUrl: './beverage-item.component.html',
  styleUrls: ['./beverage-item.component.scss'],
})
export class BeverageItemComponent implements OnInit {

  @Input() beverageItem: Beverage;
  constructor() { }

  ngOnInit() { }

  addBeverage(beverageItem: Beverage) {
    console.log("Added Beverage", beverageItem.beverageName);
  }

}
