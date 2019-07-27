import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var ProfileService = /** @class */ (function () {
    function ProfileService() {
        this.userDetails = {
            userId: 1,
            userName: 'Shekhar Suman',
            userMailId: 'shekhar_suman@outlook.com',
            userPhoneNum: '7337367761'
        };
    }
    ProfileService.prototype.getUserDetails = function (userId) {
        return this.userDetails;
    };
    ProfileService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ProfileService);
    return ProfileService;
}());
export { ProfileService };
//# sourceMappingURL=profile.service.js.map