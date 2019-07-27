import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OffersService } from 'src/app/services/offers.service';
var OffersPage = /** @class */ (function () {
    function OffersPage(offersService) {
        this.offersService = offersService;
    }
    OffersPage.prototype.ngOnInit = function () {
        this.offers = this.offersService.getAllOffers();
    };
    OffersPage = tslib_1.__decorate([
        Component({
            selector: 'app-offers',
            templateUrl: './offers.page.html',
            styleUrls: ['./offers.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [OffersService])
    ], OffersPage);
    return OffersPage;
}());
export { OffersPage };
//# sourceMappingURL=offers.page.js.map