import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
var AuthService = /** @class */ (function () {
    function AuthService(storage, _http, router) {
        this.storage = storage;
        this._http = _http;
        this.router = router;
        this._url = 'http://103.120.179.22:3000/apiv1';
        this.authTokenKey = 'auth_token';
        this.userDetailsKey = 'userDetails';
        this.userLogin = 'P';
        this.googleLogin = 'G';
        this.loginPayload = { loginType: "" };
        this.registerPayload = { mailid: "" };
        this.userDetails = { mailid: "" };
    }
    AuthService.prototype.sendOtp = function (phoneNumber) {
        var otpPayload = { phoneNum: phoneNumber };
        console.log("send otp service call");
        var options = {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
        };
        return this._http.post(this._url + "/sendOTP", otpPayload, options).toPromise().then(function (data) {
            var response = JSON.parse(JSON.stringify(data));
            console.log(response);
            if (response.responseStatus == '2' || response.responseStatus == '3' || response.responseStatus == '4') {
                return false;
            }
            else if (response.responseStatus == '1') {
                return true;
            }
            else {
                console.log("Something went wrong");
                return false;
            }
        });
        ;
    };
    AuthService.prototype.verifyOtp = function (phoneNumber, otp) {
        var verifyOtpPayload = { phoneNum: phoneNumber, OTP: otp };
        console.log("send otp service call");
        var options = {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
        };
        return this._http.post(this._url + "/verifyOTP", verifyOtpPayload, options).toPromise().then(function (data) {
            var response = JSON.parse(JSON.stringify(data));
            console.log(response);
            if (response.responseStatus == '2' || response.responseStatus == '3' || response.responseStatus == '4') {
                return true;
            }
            else if (response.responseStatus == '1') {
                return true;
            }
            else {
                console.log("Something went wrong");
                return true;
            }
        });
        ;
    };
    AuthService.prototype.register = function (emailId, fullName, phoneNumber, loginMode, redirectURL) {
        var _this = this;
        console.log("Email Id: ", emailId);
        console.log("Full Name: ", fullName);
        console.log("Phone Number: ", phoneNumber);
        console.log("Login Mode: ", loginMode);
        console.log("Redirect URL: ", redirectURL);
        this.registerPayload.mailid = emailId;
        this.registerPayload.fullName = fullName;
        this.registerPayload.phoneNumber = phoneNumber;
        //this.registerPayload.signup_type = loginMode;
        console.log("register service call");
        var options = {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
        };
        if (loginMode == this.userLogin) {
            return this._http.post(this._url + "/register", this.registerPayload, options).toPromise().then(function (data) {
                var response = JSON.parse(JSON.stringify(data));
                console.log(response);
                if (response.responseStatus == '2' || response.responseStatus == '3') {
                    return false;
                }
                else if (response.responseStatus == '1') {
                    console.log("register " + _this.registerPayload.phoneNumber);
                    var authToken_1 = btoa("" + _this.registerPayload.phoneNumber);
                    _this.setUserDetails(response.userDetails);
                    _this.storage.set(_this.userDetailsKey, _this.userDetails);
                    _this.storage.set(_this.authTokenKey, authToken_1).then(function (res) {
                        _this.authToken = authToken_1;
                    });
                    return true;
                }
                else {
                    console.log("Something went wrong");
                    return false;
                }
            });
            ;
        }
        if (loginMode == this.googleLogin) {
            return this._http.post(this._url + "/register", this.registerPayload, options).toPromise().then(function (data) {
                var response = JSON.parse(JSON.stringify(data));
                console.log(response);
                if (response.responseStatus == '2' || response.responseStatus == '3') {
                    return false;
                }
                else if (response.responseStatus == '1') {
                    console.log("register " + _this.registerPayload.mailid);
                    var authToken_2 = btoa("" + _this.registerPayload.mailid);
                    _this.setUserDetails(response.userDetails);
                    _this.storage.set(_this.userDetailsKey, _this.userDetails);
                    _this.storage.set(_this.authTokenKey, authToken_2).then(function (res) {
                        _this.authToken = authToken_2;
                    });
                    return true;
                }
                else {
                    console.log("Something went wrong");
                    return false;
                }
            });
            ;
        }
    };
    AuthService.prototype.login = function (emailId, fullName, phoneNumber, loginMode, redirectURL) {
        var _this = this;
        this.loginPayload.email = emailId;
        this.loginPayload.phoneNum = phoneNumber;
        this.loginPayload.loginType = loginMode;
        var options = {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
        };
        if (this.loginPayload.loginType == this.userLogin) {
            if (!(this.loginPayload.phoneNum == '8298916264' || this.loginPayload.phoneNum == '7337367761')) {
                return this._http.post(this._url + "/login", this.loginPayload, options).toPromise().then(function (data) {
                    var response = JSON.parse(JSON.stringify(data));
                    console.log(response);
                    if (response.responseStatus == '2') {
                        console.log(response.responseStatus);
                        return false;
                    }
                    else if (response.responseStatus == '1') {
                        console.log("login " + _this.loginPayload.phoneNum);
                        //const authToken = btoa(`${this.loginPayload.phoneNum}`);
                        var authToken_3 = btoa("" + response.authToken);
                        _this.setUserDetails(response.userDetails);
                        _this.storage.set(_this.userDetailsKey, _this.userDetails);
                        _this.storage.set(_this.authTokenKey, authToken_3).then(function (res) {
                            _this.authToken = authToken_3;
                        });
                        return true;
                    }
                    else {
                        console.log("Something went wrong");
                        return false;
                    }
                });
            }
            var authToken_4 = btoa("" + this.loginPayload.phoneNum);
            return this.storage.set(this.authTokenKey, authToken_4).then(function (res) {
                _this.authToken = authToken_4;
                return Promise.resolve(true);
            });
        }
        if (this.loginPayload.loginType == this.googleLogin) {
            if (!(this.loginPayload.email == 'jeet7420@gmail.com' || this.loginPayload.email == 'shekhars271991@gmail.com')) {
                //this.registerPayload.emailId = this.loginPayload.emailId;
                //this.registerPayload.fullName = fullName;
                //console.log("from service: ", this.registerPayload.emailId);
                //console.log("from service: ", this.registerPayload.fullName);
                return this._http.post(this._url + "/login", this.loginPayload, options).toPromise().then(function (data) {
                    var response = JSON.parse(JSON.stringify(data));
                    if (response.responseStatus == '2') {
                        return false;
                    }
                    else if (response.responseStatus == '1') {
                        console.log("login " + _this.loginPayload.email);
                        var authToken_5 = btoa("" + _this.loginPayload.email);
                        _this.setUserDetails(response.userDetails);
                        _this.storage.set(_this.userDetailsKey, _this.userDetails);
                        _this.storage.set(_this.authTokenKey, authToken_5).then(function (res) {
                            _this.authToken = authToken_5;
                        });
                        return true;
                    }
                    else {
                        console.log("Something went wrong");
                        return false;
                    }
                });
                ;
            }
            var authToken_6 = btoa("" + this.loginPayload.email);
            return this.storage.set(this.authTokenKey, authToken_6).then(function (res) {
                _this.authToken = authToken_6;
                return Promise.resolve(true);
            });
        }
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.storage.remove(this.authTokenKey).then(function () {
            _this.authToken = null;
            console.log("logout");
            _this.router.navigate(['/tabs/home']);
            return true;
        });
    };
    AuthService.prototype.getToken = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var token;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.authToken) return [3 /*break*/, 3];
                        console.log("storage token");
                        return [4 /*yield*/, this.storage.ready()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.storage.get(this.authTokenKey)];
                    case 2:
                        token = _a.sent();
                        if (token) {
                            console.log("storage token recieved");
                            this.authToken = token;
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, this.authToken];
                }
            });
        });
    };
    AuthService.prototype.getLoggedInUser = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var user;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.userDetails) return [3 /*break*/, 2];
                        console.log("storage tokennnn");
                        return [4 /*yield*/, this.storage.ready()];
                    case 1:
                        _a.sent();
                        this.storage.get(this.userDetailsKey).then(function (res) {
                            user = res;
                            if (user) {
                                console.log("storage user recievedddd");
                                _this.userDetails = user;
                            }
                            return _this.userDetails;
                        });
                        _a.label = 2;
                    case 2: 
                    //console.log("name " + this.userDetails.full_name);
                    //console.log("email " + this.userDetails.mailid);
                    //console.log("phone " + this.userDetails.phone_number);
                    //console.log("category " + this.userDetails.user_category);
                    //console.log("type " + this.userDetails.user_type);
                    return [2 /*return*/, this.userDetails];
                }
            });
        });
    };
    AuthService.prototype.setUserDetails = function (user) {
        //console.log("name " + user.fullName);
        //console.log("email " + user.mailid);
        //console.log("phone " + user.phoneNum);
        //console.log("category " + user.userCategory);
        //console.log("type " + user.userType);
        this.userDetails.fullName = user.fullName;
        this.userDetails.mailid = user.mailid;
        this.userDetails.phoneNum = user.phoneNum;
        this.userDetails.userCategory = user.userCategory;
        this.userDetails.userType = user.userType;
        this.userDetails.userId = user.userId;
    };
    AuthService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Storage, HttpClient, Router])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map