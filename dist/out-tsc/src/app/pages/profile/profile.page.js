import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { PickerController } from '@ionic/angular';
var ProfilePage = /** @class */ (function () {
    function ProfilePage(userProfile, pickerCtrl) {
        this.userProfile = userProfile;
        this.pickerCtrl = pickerCtrl;
        this.userCity = "Hyderbad";
    }
    ProfilePage.prototype.ngOnInit = function () {
        this.user = this.userProfile.getUserDetails(1);
    };
    ProfilePage.prototype.showBasicPicker = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var opts, picker;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        opts = {
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                },
                                {
                                    text: 'Done'
                                }
                            ],
                            columns: [
                                {
                                    name: 'city',
                                    options: [
                                        { text: 'Hyderabad', value: '1' },
                                        { text: 'Banglore', value: '2' },
                                        { text: 'Pune', value: '3' }
                                    ]
                                }
                            ]
                        };
                        return [4 /*yield*/, this.pickerCtrl.create(opts)];
                    case 1:
                        picker = _a.sent();
                        picker.present();
                        picker.onDidDismiss().then(function (data) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var col;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, picker.getColumn('city')];
                                    case 1:
                                        col = _a.sent();
                                        this.userCity = col.options[col.selectedIndex].text;
                                        console.log(this.userCity);
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage = tslib_1.__decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.page.html',
            styleUrls: ['./profile.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ProfileService,
            PickerController])
    ], ProfilePage);
    return ProfilePage;
}());
export { ProfilePage };
//# sourceMappingURL=profile.page.js.map