import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartnerService } from 'src/app/services/partner.service';
import { BeverageService } from 'src/app/services/beverage.service';
import { AuthService } from 'src/app/services/auth.service';
var PartnerDetailsPage = /** @class */ (function () {
    function PartnerDetailsPage(activatedRoute, partnerService, authService, beverageService) {
        this.activatedRoute = activatedRoute;
        this.partnerService = partnerService;
        this.authService = authService;
        this.beverageService = beverageService;
        this.dataloadedFlag = false;
        this.bev = { beverageId: 0 };
        this.totalAmount = 0;
        this.imageUrl = "../../../assets/PartnerPics/1.jpg";
        this.user = { mailid: "" };
        this.order = { userId: "" };
    }
    PartnerDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.activatedRoute.snapshot.paramMap.get('partnerId');
        var selectedPartner = this.partnerService.getPartnerById(this.id);
        selectedPartner.subscribe(function (partner) {
            //ar response = JSON.parse(JSON.stringify(partner));
            _this.partnerFromService = partner;
            console.log(_this.partnerFromService);
            _this.partnerDetails = _this.partnerFromService;
            _this.dataloadedFlag = true;
            console.log(_this.partnerDetails);
        });
        //this.partnerDetails = this.partnerService.getPartnerById(id);
    };
    PartnerDetailsPage.prototype.ionViewDidEnter = function () {
        this.beverageService.clearCart();
    };
    PartnerDetailsPage.prototype.addToCart = function (beverage) {
        this.bev.beverageId = beverage.bevId;
        this.bev.beverageName = beverage.bevName;
        this.bev.beverageType = beverage.bevType;
        this.bev.bannerImageUrl = beverage.bevDisplayPicUrl;
        this.bev.beveragePrice = beverage.bevSalePrice;
        this.beverageService.addToCart(this.bev);
        this.totalAmount += beverage.bevSalePrice;
        this.cartBeverages = this.beverageService.getCart();
        console.log(JSON.stringify(this.cartBeverages));
    };
    PartnerDetailsPage.prototype.navigateToBuy = function () {
        var _this = this;
        console.log('Navigate to buy');
        this.getUserDetails().then(function (res) {
            _this.user = res;
            _this.order.userId = '' + _this.user.userId;
            _this.order.partnerId = _this.id;
            _this.order.orderAmount = _this.totalAmount;
            _this.order.customerName = _this.user.fullName;
            _this.order.customerEmail = _this.user.mailid;
            _this.order.customerPhone = _this.user.phoneNum;
            var initiateOrderResponsee = _this.partnerService.initiateOrder(_this.order);
            initiateOrderResponsee.subscribe(function (response) {
                _this.orderResponse = response;
                console.log(_this.orderResponse.msg);
            });
        });
    };
    PartnerDetailsPage.prototype.getUserDetails = function () {
        return this.authService.getLoggedInUser().then(function (res) {
            return res;
        });
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
            AuthService,
            BeverageService])
    ], PartnerDetailsPage);
    return PartnerDetailsPage;
}());
export { PartnerDetailsPage };
//# sourceMappingURL=partner-details.page.js.map