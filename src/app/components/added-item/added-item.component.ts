import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Beverage } from 'src/app/models/Beverage';

@Component({
  selector: 'app-added-item',
  templateUrl: './added-item.component.html',
  styleUrls: ['./added-item.component.scss'],
})
export class AddedItemComponent implements OnInit {


  @Input() beverageItem: Beverage;
  @Output() deleteFromCart = new EventEmitter();
  constructor() { }

  deleteItem(id:number){
    this.deleteFromCart.emit(id);
  }

  ngOnInit() {}

}
