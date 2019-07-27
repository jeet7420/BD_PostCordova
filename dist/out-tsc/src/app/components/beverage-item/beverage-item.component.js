import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beverage } from 'src/app/models/Beverage';
import { BeverageService } from 'src/app/services/beverage.service';
//import { EventEmitter } from 'events';
var BeverageItemComponent = /** @class */ (function () {
    function BeverageItemComponent(beverageService) {
        this.beverageService = beverageService;
        this.addBevToCart = new EventEmitter();
    }
    BeverageItemComponent.prototype.ngOnInit = function () { };
    BeverageItemComponent.prototype.addClick = function (beverageItem) {
        this.addBevToCart.emit(beverageItem);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Beverage)
    ], BeverageItemComponent.prototype, "beverageItem", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], BeverageItemComponent.prototype, "addBevToCart", void 0);
    BeverageItemComponent = tslib_1.__decorate([
        Component({
            selector: 'app-beverage-item',
            templateUrl: './beverage-item.component.html',
            styleUrls: ['./beverage-item.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [BeverageService])
    ], BeverageItemComponent);
    return BeverageItemComponent;
}());
export { BeverageItemComponent };
//# sourceMappingURL=beverage-item.component.js.map