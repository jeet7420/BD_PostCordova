import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var OffersService = /** @class */ (function () {
    function OffersService() {
        this.offers = [
            {
                offerId: 1,
                offerType: "discount percentage",
                offerDiscPercent: 10,
                offerMaxAmount: 200,
                offerImgUrl: "../../assets/offerImages/offer10POff",
                offerDescription: "hello hola im here"
            },
            {
                offerId: 2,
                offerType: "discount percentage",
                offerDiscPercent: 10,
                offerMaxAmount: 100,
                offerImgUrl: "../../assets/offerImages/offer10POff",
                offerDescription: "hello hola was there"
            }
        ];
    }
    OffersService.prototype.getAllOffers = function () {
        return this.offers;
    };
    OffersService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], OffersService);
    return OffersService;
}());
export { OffersService };
//# sourceMappingURL=offers.service.js.map