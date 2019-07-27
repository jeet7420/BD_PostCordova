import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
var SupportPage = /** @class */ (function () {
    function SupportPage(configService, callNumber) {
        this.configService = configService;
        this.callNumber = callNumber;
        this.faqs = [];
    }
    SupportPage.prototype.ngOnInit = function () {
        this.faqs = this.configService.getFaqs();
    };
    SupportPage.prototype.expandItem = function (item) {
        if (item.expanded) {
            item.expanded = false;
        }
        else {
            this.faqs.map(function (listItem) {
                if (item == listItem) {
                    listItem.expanded = !listItem.expanded;
                }
                else {
                    listItem.expanded = false;
                }
                return listItem;
            });
        }
    };
    SupportPage.prototype.callSupport = function () {
        console.log("here");
        this.callNumber.callNumber("7337367761", true)
            .then(function (res) { return console.log(res); })
            .catch(function (err) { return console.log(err); });
    };
    SupportPage = tslib_1.__decorate([
        Component({
            selector: 'app-support',
            templateUrl: './support.page.html',
            styleUrls: ['./support.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ConfigService,
            CallNumber])
    ], SupportPage);
    return SupportPage;
}());
export { SupportPage };
//# sourceMappingURL=support.page.js.map