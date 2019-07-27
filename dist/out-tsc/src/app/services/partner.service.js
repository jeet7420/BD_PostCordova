import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var PartnerService = /** @class */ (function () {
    function PartnerService() {
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
        return this.partners.slice();
    };
    PartnerService.prototype.getPartnerById = function (partnerId) {
        return tslib_1.__assign({}, this.partners.find(function (partner) {
            return partner.id === partnerId;
        }));
    };
    PartnerService.prototype.filterItems = function (searchTerm) {
        return this.partners.filter(function (partner) {
            return partner.partnerName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    PartnerService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], PartnerService);
    return PartnerService;
}());
export { PartnerService };
//# sourceMappingURL=partner.service.js.map