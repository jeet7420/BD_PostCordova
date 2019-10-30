import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var DispenseService = /** @class */ (function () {
    function DispenseService(_http) {
        this._http = _http;
        this._url = 'http://103.120.179.22:6000/apiv1';
    }
    /*private activeOrders: Order[] = [{
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
        bannerImageUrl:"../../../assets/bevPics/hg.jpg"
      }, {
        beverageId: 1,
        beverageName: "Kingfisher",
        beverageType: "B",
        quantity: 2,
        bannerImageUrl:"../../../assets/bevPics/kf.jpg"
      }]
    }];*/
    DispenseService.prototype.getActiveOrders = function () {
        var options = {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
        };
        console.log("Service Called");
        return this._http.post(this._url + "/dispense/getActiveDispenses", { "userId": "1" }, options);
        //return [...this.activeOrders];
    };
    DispenseService.prototype.dispenseOrder = function (orderId, beverageId) {
        var dispenseSatus = 'S';
        console.log('Order dispensed!', orderId, beverageId);
        if (dispenseSatus === 'S') {
            //removing from active Orders array
            for (var i = 0; i < this.activeOrders.length; i++) {
                if (this.activeOrders[i].orderId === orderId) {
                    /*for (let j = 0; j < this.activeOrders[i].beverages.length; j++) {
                      if (+this.activeOrders[i].beverages[j].beverageId === beverageId) {
                        if (this.activeOrders[i].beverages[j].quantity === 1) {
                          this.activeOrders[i].beverages.splice(j, 1);
                        } else {
                          this.activeOrders[i].beverages[j].quantity--;
                        }
                      }*/
                }
            }
        }
    };
    DispenseService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], DispenseService);
    return DispenseService;
}());
export { DispenseService };
//# sourceMappingURL=dispense.service.js.map