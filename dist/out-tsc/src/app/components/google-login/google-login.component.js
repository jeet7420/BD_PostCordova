import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
var GoogleLoginComponent = /** @class */ (function () {
    function GoogleLoginComponent(afAuth, gplus) {
        this.afAuth = afAuth;
        this.gplus = gplus;
        this.googleLogin = new EventEmitter();
    }
    GoogleLoginComponent.prototype.ngOnInit = function () { };
    GoogleLoginComponent.prototype.processGoogleLogin = function () {
        //this.nativeGoogleLogin();
        this.webGoogleLogin();
    };
    GoogleLoginComponent.prototype.nativeGoogleLogin = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var gplusUser, err_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.gplus.login({
                                'webClientId': '130563067105-h8dq4sb28vut2s7t7jev7duda5ec9a77.apps.googleusercontent.com',
                                'offline': true,
                                'scopes': 'profile email'
                            })];
                    case 1:
                        gplusUser = _a.sent();
                        return [4 /*yield*/, this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken))];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    GoogleLoginComponent.prototype.webGoogleLogin = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var provider, credential, err_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        provider = new firebase.auth.GoogleAuthProvider();
                        return [4 /*yield*/, this.afAuth.auth.signInWithPopup(provider)];
                    case 1:
                        credential = _a.sent();
                        console.log("NAME: " + credential.user.displayName);
                        this.emitgoogleUserDetailsToParent(credential.user.email, credential.user.displayName);
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        console.log(err_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    GoogleLoginComponent.prototype.signOut = function () {
        this.afAuth.auth.signOut();
        this.gplus.logout();
    };
    GoogleLoginComponent.prototype.emitgoogleUserDetailsToParent = function (emailId, fullName) {
        //this.googleUserDetails.emailId = emailId;
        this.googleLogin.emit({ "emailId": emailId, "fullName": fullName });
    };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], GoogleLoginComponent.prototype, "googleLogin", void 0);
    GoogleLoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-google-login',
            templateUrl: './google-login.component.html',
            styleUrls: ['./google-login.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth,
            GooglePlus])
    ], GoogleLoginComponent);
    return GoogleLoginComponent;
}());
export { GoogleLoginComponent };
//# sourceMappingURL=google-login.component.js.map