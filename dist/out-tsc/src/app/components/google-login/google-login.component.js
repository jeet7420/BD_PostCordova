import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
var GoogleLoginComponent = /** @class */ (function () {
    function GoogleLoginComponent(afAuth, gplus) {
        this.afAuth = afAuth;
        this.gplus = gplus;
    }
    GoogleLoginComponent.prototype.ngOnInit = function () { };
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