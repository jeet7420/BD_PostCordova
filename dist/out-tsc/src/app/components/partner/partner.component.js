import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Partner } from 'src/app/models/Partner';
var PartnerComponent = /** @class */ (function () {
    function PartnerComponent() {
        this.bg = "../../../assets/PartnerPics/3.jpg";
    }
    PartnerComponent.prototype.ngOnInit = function () { };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Partner)
    ], PartnerComponent.prototype, "partnerItem", void 0);
    PartnerComponent = tslib_1.__decorate([
        Component({
            selector: 'app-partner',
            templateUrl: './partner.component.html',
            styleUrls: ['./partner.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], PartnerComponent);
    return PartnerComponent;
}());
export { PartnerComponent };
//# sourceMappingURL=partner.component.js.map