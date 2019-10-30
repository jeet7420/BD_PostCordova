import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(authService, formBuilder, toastCtrl, router, route) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.route = route;
        this.registerPayload = { mailid: "" };
        this.userLogin = 'P';
        this.googleLogin = 'G';
        this.registerForm = this.formBuilder.group({
            emailId: [null, Validators.required],
            fullName: [null, Validators.required],
            phoneNumber: [null, Validators.required]
        });
    }
    RegisterPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.redirect = params['redirect'] || '/tabs';
            _this.loginMode = params['loginMode'];
            if (_this.loginMode == _this.userLogin) {
                _this.phoneNumber = params['phoneNumber'];
                _this.registerForm.controls['phoneNumber'].setValue(_this.phoneNumber);
            }
            if (_this.loginMode == _this.googleLogin) {
                _this.emailId = params['emailId'];
                _this.fullName = params['fullName'];
                _this.registerForm.controls['emailId'].setValue(_this.emailId);
                _this.registerForm.controls['fullName'].setValue(_this.fullName);
            }
        });
    };
    RegisterPage.prototype.processRegister = function () {
        var _this = this;
        this.authService.register(this.registerForm.get("emailId").value, this.registerForm.get("fullName").value, this.registerForm.get("phoneNumber").value, this.loginMode, this.redirect).then(function (res) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!res) return [3 /*break*/, 1];
                        this.router.navigateByUrl(this.redirect);
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'User Registration Failed',
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
    RegisterPage = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.page.html',
            styleUrls: ['./register.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService,
            FormBuilder,
            ToastController,
            Router,
            ActivatedRoute])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.page.js.map