import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Beverage } from 'src/app/models/Beverage';
import { DispenseRequest } from 'src/app/models/DispenseRequest';

@Component({
  selector: 'app-active-order-beverage-item',
  templateUrl: './active-order-beverage-item.component.html',
  styleUrls: ['./active-order-beverage-item.component.scss'],
})
export class ActiveOrderBeverageItemComponent implements OnInit {

  constructor() { }

  dispenseRequest: DispenseRequest = {};

  @Input() beverage: Beverage;
  @Output() dispenseBeverage = new EventEmitter();

  dispenseBev(beverageId: number){
    this.dispenseRequest.beverageId = beverageId;
    this.dispenseBeverage.emit(this.dispenseRequest);
  }

  ngOnInit() {}
;
}
