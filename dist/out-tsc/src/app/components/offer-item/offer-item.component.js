import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { OfferItem } from 'src/app/models/OfferItem';
var OfferItemComponent = /** @class */ (function () {
    function OfferItemComponent() {
    }
    OfferItemComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", OfferItem)
    ], OfferItemComponent.prototype, "OfferItem", void 0);
    OfferItemComponent = tslib_1.__decorate([
        Component({
            selector: 'app-offer-item',
            templateUrl: './offer-item.component.html',
            styleUrls: ['./offer-item.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], OfferItemComponent);
    return OfferItemComponent;
}());
export { OfferItemComponent };
//# sourceMappingURL=offer-item.component.js.map