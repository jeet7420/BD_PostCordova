import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PartnerDetailsPage } from './partner-details.page';
import { BeverageItemComponent } from 'src/app/components/beverage-item/beverage-item.component';

const routes: Routes = [
  {
    path: '',
    component: PartnerDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PartnerDetailsPage,BeverageItemComponent]
})
export class PartnerDetailsPageModule {}
