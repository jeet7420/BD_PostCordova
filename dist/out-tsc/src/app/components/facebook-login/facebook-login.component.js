import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Facebook } from '@ionic-native/Facebook/ngx';
import * as firebase from 'firebase/app';
var FacebookLoginComponent = /** @class */ (function () {
    function FacebookLoginComponent(facebook) {
        this.facebook = facebook;
    }
    //@Output() facebookLogin = new EventEmitter();
    FacebookLoginComponent.prototype.ngOnInit = function () { };
    FacebookLoginComponent.prototype.processFacebookLoginNative = function () {
        this.facebook.login(["email"]).then(function (loginResponse) {
            var credential = firebase.auth.FacebookAuthProvider.credential(loginResponse.authResponse.accessToken);
            firebase.auth().signInWithCredential(credential).then(function (info) {
                alert(JSON.stringify(info));
                console.log(info.user.displayName);
                console.log(info.user.email);
            });
        });
    };
    FacebookLoginComponent.prototype.processFacebookLogin = function () {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithRedirect(provider).then(function () {
            firebase.auth().getRedirectResult().then(function (result) {
                console.log(result.user.email);
                console.log(result.user.displayName);
            });
        });
    };
    FacebookLoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-facebook-login',
            templateUrl: './facebook-login.component.html',
            styleUrls: ['./facebook-login.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Facebook])
    ], FacebookLoginComponent);
    return FacebookLoginComponent;
}());
export { FacebookLoginComponent };
//# sourceMappingURL=facebook-login.component.js.map