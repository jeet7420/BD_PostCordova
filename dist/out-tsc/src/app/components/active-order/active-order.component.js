import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Order } from 'src/app/models/Order';
var ActiveOrderComponent = /** @class */ (function () {
    function ActiveOrderComponent() {
        this.dispenseBeverage = new EventEmitter();
    }
    ActiveOrderComponent.prototype.dispenseBevForOrder = function (dispenseRequest) {
        dispenseRequest.orderId = this.activeOrder.orderId;
        this.dispenseBeverage.emit(dispenseRequest);
    };
    ActiveOrderComponent.prototype.ngOnInit = function () { };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Order)
    ], ActiveOrderComponent.prototype, "activeOrder", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], ActiveOrderComponent.prototype, "dispenseBeverage", void 0);
    ActiveOrderComponent = tslib_1.__decorate([
        Component({
            selector: 'app-active-order',
            templateUrl: './active-order.component.html',
            styleUrls: ['./active-order.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ActiveOrderComponent);
    return ActiveOrderComponent;
}());
export { ActiveOrderComponent };
//# sourceMappingURL=active-order.component.js.map