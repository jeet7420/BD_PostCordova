import * as tslib_1 from "tslib";
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Beverage } from 'src/app/models/Beverage';
var AddedItemComponent = /** @class */ (function () {
    function AddedItemComponent() {
        this.deleteFromCart = new EventEmitter();
    }
    AddedItemComponent.prototype.deleteItem = function (id) {
        this.deleteFromCart.emit(id);
    };
    AddedItemComponent.prototype.ngOnInit = function () { };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Beverage)
    ], AddedItemComponent.prototype, "beverageItem", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], AddedItemComponent.prototype, "deleteFromCart", void 0);
    AddedItemComponent = tslib_1.__decorate([
        Component({
            selector: 'app-added-item',
            templateUrl: './added-item.component.html',
            styleUrls: ['./added-item.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AddedItemComponent);
    return AddedItemComponent;
}());
export { AddedItemComponent };
//# sourceMappingURL=added-item.component.js.map