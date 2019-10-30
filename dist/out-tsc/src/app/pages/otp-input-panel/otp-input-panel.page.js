import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';
var OtpInputPanelPage = /** @class */ (function () {
    function OtpInputPanelPage(formBuilder, router, toastCtrl, route, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.route = route;
        this.authService = authService;
        this.otpForm = this.formBuilder.group({
            otp: [null, Validators.required]
        });
    }
    OtpInputPanelPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.phoneNumber = params['phoneNumber'];
            _this.loginMode = params['loginMode'];
            _this.redirect = params['redirect'];
            console.log('query params: ', _this.phoneNumber);
        });
    };
    OtpInputPanelPage.prototype.verifyOtp = function () {
        var _this = this;
        var otp = this.otpForm.get("otp").value;
        this.authService.verifyOtp(this.phoneNumber, otp).then(function (res) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var toast;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!res) return [3 /*break*/, 1];
                        this.authService.login(null, null, this.phoneNumber, this.loginMode, this.redirect).then(function (res) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                if (res) {
                                    this.router.navigateByUrl(this.redirect);
                                }
                                else {
                                    this.router.navigate(['/tabs/register'], {
                                        queryParams: {
                                            redirect: this.redirect,
                                            loginMode: this.loginMode,
                                            phoneNumber: this.phoneNumber,
                                        }
                                    });
                                    ;
                                }
                                return [2 /*return*/];
                            });
                        }); });
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Invalid Otp. Please re-enter otp',
                            duration: 1500,
                        })];
                    case 2:
                        toast = _a.sent();
                        toast.present();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    OtpInputPanelPage = tslib_1.__decorate([
        Component({
            selector: 'app-otp-input-panel',
            templateUrl: './otp-input-panel.page.html',
            styleUrls: ['./otp-input-panel.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            Router,
            ToastController,
            ActivatedRoute,
            AuthService])
    ], OtpInputPanelPage);
    return OtpInputPanelPage;
}());
export { OtpInputPanelPage };
//# sourceMappingURL=otp-input-panel.page.js.map