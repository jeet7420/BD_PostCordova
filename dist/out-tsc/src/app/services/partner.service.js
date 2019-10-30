import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
var PartnerService = /** @class */ (function () {
    function PartnerService(_http, authService) {
        this._http = _http;
        this.authService = authService;
        this._url = 'http://103.120.179.22:5000/apiv1';
        this.order_url = 'http://103.120.179.22:4000/apiv1';
        this.location = { city: "" };
        this.partners = [
            {
                id: 1,
                partnerName: "Over the Moon",
                imageUrl: "../../../assets/PartnerPics/1.jpg",
                status: "O",
                beveragesServed: [{
                        beverageId: 1,
                        beverageName: "Kingfisher",
                        beverageType: "B",
                        beveragePrice: 200,
                        bannerImageUrl: "../../../assets/bevPics/kf.jpg"
                    },
                    {
                        beverageId: 2,
                        beverageName: "Hogarden",
                        beverageType: "B",
                        beveragePrice: 400,
                        bannerImageUrl: "../../../assets/bevPics/hg.jpg"
                    }]
            },
            {
                id: 2,
                partnerName: "The Laal Street",
                status: "O",
                imageUrl: "../../../assets/PartnerPics/2.jpg",
                beveragesServed: [{
                        beverageId: 1,
                        beverageName: "Kingfisher",
                        beverageType: "B",
                        beveragePrice: 250,
                        bannerImageUrl: "../../../assets/bevPics/kf.jpg"
                    },
                    {
                        beverageId: 3,
                        beverageName: "Heinkin",
                        beverageType: "B",
                        beveragePrice: 500,
                        bannerImageUrl: "../../../assets/bevPics/hk.jpg"
                    }]
            },
            {
                id: 3,
                partnerName: "Prost",
                imageUrl: "../../../assets/PartnerPics/3.jpg",
                status: "O",
                beveragesServed: [{
                        beverageId: 1,
                        beverageName: "Kingfisher",
                        beverageType: "B",
                        beveragePrice: 300,
                        bannerImageUrl: "../../../assets/bevPics/kf.jpg"
                    },
                    {
                        beverageId: 3,
                        beverageName: "Hogarden",
                        beverageType: "B",
                        beveragePrice: 300,
                        bannerImageUrl: "../../../assets/bevPics/hg.jpg"
                    }]
            },
            {
                id: 4,
                partnerName: "Ten Downing Street",
                status: "O",
                imageUrl: "../../../assets/PartnerPics/4.jpg",
                beveragesServed: [{
                        beverageId: 1,
                        beverageName: "Kingfisher",
                        beverageType: "B",
                        beveragePrice: 400,
                        bannerImageUrl: "../../../assets/bevPics/kf.jpg"
                    }]
            },
            {
                id: 5,
                partnerName: "Hoppipola",
                status: "C",
                imageUrl: "../../../assets/PartnerPics/5.jpg",
                beveragesServed: [{
                        beverageId: 1,
                        beverageName: "Kingfisher",
                        beverageType: "B",
                        beveragePrice: 200,
                        bannerImageUrl: "../../../assets/bevPics/kf.jpg"
                    },
                    {
                        beverageId: 2,
                        beverageName: "Hogarden",
                        beverageType: "B",
                        beveragePrice: 300,
                        bannerImageUrl: "../../../assets/bevPics/hg.jpg"
                    },
                    {
                        beverageId: 4,
                        beverageName: "Beera",
                        beverageType: "B",
                        beveragePrice: 550,
                        bannerImageUrl: "../../../assets/bevPics/br.jpg"
                    }],
            }
        ];
    }
    PartnerService.prototype.getAllPartners = function () {
        this.location.city = "";
        var options = {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
        };
        return this._http.post(this._url + "/partners/allPartners", this.location, options);
        //return [...this.partners];
    };
    PartnerService.prototype.getPartnerById = function (partnerId) {
        console.log("service call");
        var options = {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
        };
        return this._http.post(this._url + "/partners/partnerDetails", { "partnerId": "2" }, options);
        /*return {
          ...this.partners.find(partner => {
            return partner.id === partnerId;
          })
        }*/
    };
    PartnerService.prototype.initiateOrder = function (orderDetails) {
        console.log("initiate service call");
        var options = {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
        };
        return this._http.post(this.order_url + "/orders/initiateOrder", orderDetails, options);
    };
    PartnerService.prototype.filterItems = function (searchTerm, partnersFromService) {
        return partnersFromService.filter(function (partner) {
            return partner.partner_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    PartnerService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, AuthService])
    ], PartnerService);
    return PartnerService;
}());
export { PartnerService };
//# sourceMappingURL=partner.service.js.map