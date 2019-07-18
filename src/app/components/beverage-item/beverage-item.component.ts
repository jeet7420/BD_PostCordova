import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Beverage } from 'src/app/models/Beverage';
import { BeverageService } from 'src/app/services/beverage.service';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-beverage-item',
  templateUrl: './beverage-item.component.html',
  styleUrls: ['./beverage-item.component.scss'],
})
export class BeverageItemComponent implements OnInit {

  @Input() beverageItem: Beverage;
  @Output() addBevToCart = new EventEmitter();
  constructor(private beverageService: BeverageService) { }

  ngOnInit() { }

  addClick(beverageItem: Beverage) {
    this.addBevToCart.emit(beverageItem);
  }


}
