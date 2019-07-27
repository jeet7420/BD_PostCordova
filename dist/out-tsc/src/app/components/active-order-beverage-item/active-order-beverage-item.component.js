import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beverage } from 'src/app/models/Beverage';
var ActiveOrderBeverageItemComponent = /** @class */ (function () {
    function ActiveOrderBeverageItemComponent() {
        this.dispenseRequest = {};
        this.dispenseBeverage = new EventEmitter();
    }
    ActiveOrderBeverageItemComponent.prototype.dispenseBev = function (beverageId) {
        this.dispenseRequest.beverageId = beverageId;
        this.dispenseBeverage.emit(this.dispenseRequest);
    };
    ActiveOrderBeverageItemComponent.prototype.ngOnInit = function () { };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Beverage)
    ], ActiveOrderBeverageItemComponent.prototype, "beverage", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], ActiveOrderBeverageItemComponent.prototype, "dispenseBeverage", void 0);
    ActiveOrderBeverageItemComponent = tslib_1.__decorate([
        Component({
            selector: 'app-active-order-beverage-item',
            templateUrl: './active-order-beverage-item.component.html',
            styleUrls: ['./active-order-beverage-item.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ActiveOrderBeverageItemComponent);
    return ActiveOrderBeverageItemComponent;
}());
export { ActiveOrderBeverageItemComponent };
//# sourceMappingURL=active-order-beverage-item.component.js.map