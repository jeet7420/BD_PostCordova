import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartnerService } from 'src/app/services/partner.service';
import { BeverageService } from 'src/app/services/beverage.service';
var PartnerDetailsPage = /** @class */ (function () {
    function PartnerDetailsPage(activatedRoute, partnerService, beverageService) {
        this.activatedRoute = activatedRoute;
        this.partnerService = partnerService;
        this.beverageService = beverageService;
        this.totalAmount = 0;
        this.imageUrl = "../../../assets/PartnerPics/1.jpg";
    }
    PartnerDetailsPage.prototype.ngOnInit = function () {
        var id = +this.activatedRoute.snapshot.paramMap.get('partnerId');
        this.partnerDetails = this.partnerService.getPartnerById(id);
    };
    PartnerDetailsPage.prototype.ionViewDidEnter = function () {
        this.beverageService.clearCart();
    };
    PartnerDetailsPage.prototype.addToCart = function (beverage) {
        console.log('Added Beverage', beverage.beverageName);
        this.beverageService.addToCart(beverage);
        this.totalAmount += beverage.beveragePrice;
        this.cartBeverages = this.beverageService.getCart();
        console.log(JSON.stringify(this.cartBeverages));
    };
    PartnerDetailsPage.prototype.navigateToBuy = function () {
        console.log('Navigate to buy');
    };
    PartnerDetailsPage.prototype.deleteItemFromCart = function (id) {
        console.log('in partner details controller');
        for (var i = 0; i < this.cartBeverages.length; i++) {
            if (this.cartBeverages[i].beverageId === id) {
                this.totalAmount -= this.cartBeverages[i].beveragePrice;
                if (this.cartBeverages[i].quantity === 1) {
                    this.cartBeverages.splice(i, 1);
                }
                else {
                    this.cartBeverages[i].quantity--;
                }
            }
        }
    };
    PartnerDetailsPage = tslib_1.__decorate([
        Component({
            selector: 'app-partner-details',
            templateUrl: './partner-details.page.html',
            styleUrls: ['./partner-details.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            PartnerService,
            BeverageService])
    ], PartnerDetailsPage);
    return PartnerDetailsPage;
}());
export { PartnerDetailsPage };
//# sourceMappingURL=partner-details.page.js.map