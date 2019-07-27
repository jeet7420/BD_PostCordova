import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var DispenseService = /** @class */ (function () {
    function DispenseService() {
        this.activeOrders = [{
                orderId: 1,
                partner: {
                    partnerName: "Over The Moon",
                    id: 1,
                    imageUrl: ""
                },
                beverages: [{
                        beverageId: 2,
                        beverageName: "Hogarden",
                        beverageType: "B",
                        quantity: 3,
                        bannerImageUrl: "../../../assets/bevPics/hg.jpg"
                    }, {
                        beverageId: 1,
                        beverageName: "Kingfisher",
                        beverageType: "B",
                        quantity: 2,
                        bannerImageUrl: "../../../assets/bevPics/kf.jpg"
                    }]
            }];
    }
    DispenseService.prototype.getActiveOrders = function () {
        return this.activeOrders.slice();
    };
    DispenseService.prototype.dispenseOrder = function (orderId, beverageId) {
        var dispenseSatus = 'S';
        console.log('Order dispensed!', orderId, beverageId);
        if (dispenseSatus === 'S') {
            //removing from active Orders array
            for (var i = 0; i < this.activeOrders.length; i++) {
                if (this.activeOrders[i].orderId === orderId) {
                    for (var j = 0; j < this.activeOrders[i].beverages.length; j++) {
                        if (+this.activeOrders[i].beverages[j].beverageId === beverageId) {
                            if (this.activeOrders[i].beverages[j].quantity === 1) {
                                this.activeOrders[i].beverages.splice(j, 1);
                            }
                            else {
                                this.activeOrders[i].beverages[j].quantity--;
                            }
                        }
                    }
                }
            }
        }
    };
    DispenseService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DispenseService);
    return DispenseService;
}());
export { DispenseService };
//# sourceMappingURL=dispense.service.js.map