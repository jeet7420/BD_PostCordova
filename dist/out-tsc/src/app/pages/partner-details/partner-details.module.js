import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PartnerDetailsPage } from './partner-details.page';
import { BeverageItemComponent } from 'src/app/components/beverage-item/beverage-item.component';
import { OrderDetailsComponent } from 'src/app/components/order-details/order-details.component';
import { AddedItemComponent } from 'src/app/components/added-item/added-item.component';
var routes = [
    {
        path: '',
        component: PartnerDetailsPage
    }
];
var PartnerDetailsPageModule = /** @class */ (function () {
    function PartnerDetailsPageModule() {
    }
    PartnerDetailsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PartnerDetailsPage, BeverageItemComponent, OrderDetailsComponent, AddedItemComponent]
        })
    ], PartnerDetailsPageModule);
    return PartnerDetailsPageModule;
}());
export { PartnerDetailsPageModule };
//# sourceMappingURL=partner-details.module.js.map