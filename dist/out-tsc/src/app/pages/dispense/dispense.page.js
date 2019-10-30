import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DispenseService } from 'src/app/services/dispense.service';
var DispensePage = /** @class */ (function () {
    function DispensePage(dispenseService) {
        this.dispenseService = dispenseService;
    }
    DispensePage.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Service Invoked");
        var dispenseList = this.dispenseService.getActiveOrders();
        dispenseList.subscribe(function (data) {
            _this.activeOrdersListFromService = data;
            console.log(_this.activeOrdersListFromService);
            _this.activeOrdersList = _this.activeOrdersListFromService;
        });
        //this.activeOrdersList = this.dispenseService.getActiveOrders();
    };
    DispensePage.prototype.dispenseBeverage = function (dispenseRequest) {
        this.dispenseService.dispenseOrder(dispenseRequest.orderId, dispenseRequest.beverageId);
    };
    DispensePage = tslib_1.__decorate([
        Component({
            selector: 'app-dispense',
            templateUrl: './dispense.page.html',
            styleUrls: ['./dispense.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [DispenseService])
    ], DispensePage);
    return DispensePage;
}());
export { DispensePage };
//# sourceMappingURL=dispense.page.js.map