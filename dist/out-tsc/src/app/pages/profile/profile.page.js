import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { PickerController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
var ProfilePage = /** @class */ (function () {
    function ProfilePage(userProfile, pickerCtrl, authService, storage, alertCtrl) {
        this.userProfile = userProfile;
        this.pickerCtrl = pickerCtrl;
        this.authService = authService;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.user = { mailid: "" };
        this.userCity = "Hyderbad";
    }
    ProfilePage.prototype.ngOnInit = function () {
        //this.user = this.userProfile.getUserDetails(1);
        this.getUserDetails().then(function (res) {
            //this.user = res;
            //console.log("name " + this.user.full_name);
            //console.log("email " + this.user.mailid);
            //console.log("phone " + this.user.phone_number);
            //console.log("category " + this.user.user_category);
            //console.log("type " + this.user.user_type);
        });
    };
    ProfilePage.prototype.getUserDetails = function () {
        return this.authService.getLoggedInUser().then(function (res) {
            //console.log("ole " + res.full_name);
            //console.log("ole " + res.mailid);
            //console.log("ole " + res.phone_number);
            //console.log("ole " + res.user_category);
            //console.log("ole " + res.user_type);
            return res;
        });
    };
    ProfilePage.prototype.logoutWarning = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alertMsg, alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alertMsg = "\n      <style>\n        .logout-warning {\n          color: var(--ion-color-primary);\n        }\n        .logout-warning .alert-message {\n          text-align: center;\n        }\n        .logout-warning img {\n          max-width: 4em;\n        }\n        .logout-warning strong {\n          display: block;\n          margin: 1em 0;\n        }\n      </style>\n      <strong>Are you sure ?</strong>\n    ";
                        return [4 /*yield*/, this.alertCtrl.create({
                                message: alertMsg,
                                cssClass: 'logout-warning',
                                buttons: [{
                                        text: 'YES',
                                        handler: function () {
                                            _this.authService.logout();
                                        }
                                    },
                                    {
                                        text: 'NO',
                                        handler: function () {
                                            _this.alertCtrl.dismiss;
                                        }
                                    }],
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
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
    ProfilePage.prototype.logout = function () {
        this.authService.logout();
    };
    ProfilePage = tslib_1.__decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.page.html',
            styleUrls: ['./profile.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ProfileService,
            PickerController,
            AuthService,
            Storage,
            AlertController])
    ], ProfilePage);
    return ProfilePage;
}());
export { ProfilePage };
//# sourceMappingURL=profile.page.js.map