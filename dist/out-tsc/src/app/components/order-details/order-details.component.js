import * as tslib_1 from "tslib";
import { Component, Input, EventEmitter, Output } from '@angular/core';
var OrderDetailsComponent = /** @class */ (function () {
    function OrderDetailsComponent() {
        this.deleteItemFromCart = new EventEmitter();
    }
    OrderDetailsComponent.prototype.ngOnInit = function () { };
    OrderDetailsComponent.prototype.deleteFromCart = function (id) {
        this.deleteItemFromCart.emit(id);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], OrderDetailsComponent.prototype, "addedBeverages", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], OrderDetailsComponent.prototype, "deleteItemFromCart", void 0);
    OrderDetailsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-order-details',
            templateUrl: './order-details.component.html',
            styleUrls: ['./order-details.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], OrderDetailsComponent);
    return OrderDetailsComponent;
}());
export { OrderDetailsComponent };
//# sourceMappingURL=order-details.component.js.map