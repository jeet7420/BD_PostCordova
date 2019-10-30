import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PartnerService } from 'src/app/services/partner.service';
var HomePage = /** @class */ (function () {
    function HomePage(partnerService) {
        this.partnerService = partnerService;
        this.noItemsMessageVisibilty = 'hidden';
        this.searchTerm = "";
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        var fetchedPartners = this.partnerService.getAllPartners();
        fetchedPartners.subscribe(function (partners) {
            _this.partnersFromService = partners;
            console.log(_this.partnersFromService);
            _this.filteredPartners = _this.partnersFromService.partners;
        });
        //this.filteredPartners = null;
    };
    HomePage.prototype.setFilteredItems = function () {
        this.filteredPartners = this.partnerService.filterItems(this.searchTerm, this.partnersFromService.partners);
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.page.html',
            styleUrls: ['./home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [PartnerService])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map