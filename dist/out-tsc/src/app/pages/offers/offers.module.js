import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { OffersPage } from './offers.page';
import { OfferItemComponent } from 'src/app/components/offer-item/offer-item.component';
var routes = [
    {
        path: '',
        component: OffersPage
    }
];
var OffersPageModule = /** @class */ (function () {
    function OffersPageModule() {
    }
    OffersPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [OffersPage, OfferItemComponent]
        })
    ], OffersPageModule);
    return OffersPageModule;
}());
export { OffersPageModule };
//# sourceMappingURL=offers.module.js.map