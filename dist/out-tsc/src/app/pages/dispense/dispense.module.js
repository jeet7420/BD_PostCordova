import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DispensePage } from './dispense.page';
import { ActiveOrderComponent } from 'src/app/components/active-order/active-order.component';
import { ActiveOrderBeverageItemComponent } from 'src/app/components/active-order-beverage-item/active-order-beverage-item.component';
var routes = [
    {
        path: '',
        component: DispensePage
    }
];
var DispensePageModule = /** @class */ (function () {
    function DispensePageModule() {
    }
    DispensePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [DispensePage, ActiveOrderComponent, ActiveOrderBeverageItemComponent]
        })
    ], DispensePageModule);
    return DispensePageModule;
}());
export { DispensePageModule };
//# sourceMappingURL=dispense.module.js.map