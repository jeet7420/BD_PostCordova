import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
var GoogleLoginService = /** @class */ (function () {
    function GoogleLoginService(afAuth, gplus) {
        this.afAuth = afAuth;
        this.gplus = gplus;
    }
    GoogleLoginService.prototype.nativeGoogleLogin = function () {
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
    GoogleLoginService.prototype.webGoogleLogin = function () {
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
    GoogleLoginService.prototype.signOut = function () {
        this.afAuth.auth.signOut();
        this.gplus.logout();
    };
    GoogleLoginService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth, GooglePlus])
    ], GoogleLoginService);
    return GoogleLoginService;
}());
export { GoogleLoginService };
//# sourceMappingURL=google-login.service.js.map