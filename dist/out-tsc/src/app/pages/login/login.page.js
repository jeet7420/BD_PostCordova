import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
var LoginPage = /** @class */ (function () {
    function LoginPage(authService, toastCtrl, router, formBuilder, route) {
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
        this.userLoginToken = 'P';
        this.googleLoginToken = 'G';
        this.loginForm = this.formBuilder.group({
            phoneNumber: [null, Validators.required]
        });
    }
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.loginForm.controls['phoneNumber'].setValue("");
            _this.redirect = params['redirect'] || '/tabs';
            console.log('query params: ', _this.redirect);
        });
    };
    LoginPage.prototype.verifyGoogleUser = function (googleUserDetails) {
        var _this = this;
        var loginResponse = this.authService.login(googleUserDetails.emailId, googleUserDetails.fullName, null, this.googleLoginToken, this.redirect);
        loginResponse.then(function (res) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (res) {
                    this.router.navigateByUrl(this.redirect);
                }
                else {
                    this.router.navigate(['/tabs/register'], {
                        queryParams: {
                            redirect: this.redirect,
                            loginMode: this.googleLoginToken,
                            emailId: googleUserDetails.emailId,
                            fullName: googleUserDetails.fullName
                        }
                    });
                }
                return [2 /*return*/];
            });
        }); });
    };
    LoginPage.prototype.verifyUser = function () {
        var _this = this;
        var phoneNumberLocal = this.loginForm.get("phoneNumber").value;
        this.authService.sendOtp(phoneNumberLocal).then(function (res) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!res) return [3 /*break*/, 1];
                        this.router.navigate(['/tabs/opt-input-panel'], {
                            queryParams: {
                                redirect: this.redirect,
                                loginMode: this.userLoginToken,
                                phoneNumber: phoneNumberLocal
                            }
                        });
                        ;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Otp not sent. Please renter phone number and click on login',
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
        //let phoneNumberLocal = this.loginForm.get("phoneNumber").value;
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService,
            ToastController,
            Router,
            FormBuilder,
            ActivatedRoute])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map