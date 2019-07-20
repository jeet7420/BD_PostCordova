import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DispensePage } from './dispense.page';

import { ActiveOrderComponent } from 'src/app/components/active-order/active-order.component';
import { ActiveOrderBeverageItemComponent } from 'src/app/components/active-order-beverage-item/active-order-beverage-item.component';

const routes: Routes = [
  {
    path: '',
    component: DispensePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DispensePage, ActiveOrderComponent, ActiveOrderBeverageItemComponent]
})
export class DispensePageModule {}
