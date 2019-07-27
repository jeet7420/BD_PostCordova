import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var BeverageService = /** @class */ (function () {
    function BeverageService() {
        this.cartBeverages = [];
    }
    BeverageService.prototype.addToCart = function (bvr) {
        var found = false;
        for (var i = 0; i < this.cartBeverages.length; i++) {
            if (this.cartBeverages[i].beverageId === bvr.beverageId) {
                this.cartBeverages[i].quantity++;
                found = true;
                break;
            }
        }
        if (!found) {
            bvr.quantity = 1;
            this.cartBeverages.push(bvr);
        }
    };
    BeverageService.prototype.getCart = function () {
        return this.cartBeverages;
    };
    BeverageService.prototype.clearCart = function () {
        this.cartBeverages = [];
    };
    BeverageService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], BeverageService);
    return BeverageService;
}());
export { BeverageService };
//# sourceMappingURL=beverage.service.js.map