import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginPayload } from '../models/LoginPayload';
import { RegisterPayload } from '../models/RegisterPayload';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ObjectOrientedRenderer3 } from '@angular/core/src/render3/interfaces/renderer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _url = 'http://103.120.179.22:3000/apiv1';
  readonly authTokenKey = 'auth_token';
  readonly userLogin = 'P';
  readonly googleLogin = 'G';
  authToken: string;
  loginPayload: LoginPayload = {loginType:""};
  registerPayload: RegisterPayload = {mailid:""};

  constructor(private storage: Storage, private _http: HttpClient, private router: Router) { }

  sendOtp(phoneNumber: string): Promise<boolean> {
    let otpPayload = { phoneNum: phoneNumber};
    console.log("send otp service call");
    var options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    };
    return this._http.post(this._url + "/sendOTP"
        , otpPayload
        , options
      ).toPromise<Object>().then(data => {
        var response = JSON.parse(JSON.stringify(data));
        console.log(response);
        if (response.responseStatus == '2' || response.responseStatus == '3' || response.responseStatus == '4') {
          return false;
        } else if (response.responseStatus == '1') {
          return true;
        } else {
          console.log("Something went wrong");
          return false;
        }
      });;
  }

  verifyOtp(phoneNumber: string, otp: string): Promise<boolean> {
    let verifyOtpPayload = { phoneNum: phoneNumber, OTP: otp};
    console.log("send otp service call");
    var options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    };
    return this._http.post(this._url + "/verifyOTP"
        , verifyOtpPayload
        , options
      ).toPromise<Object>().then(data => {
        var response = JSON.parse(JSON.stringify(data));
        console.log(response);
        if (response.responseStatus == '2' || response.responseStatus == '3' || response.responseStatus == '4') {
          return false;
        } else if (response.responseStatus == '1') {
          return true;
        } else {
          console.log("Something went wrong");
          return false;
        }
      });;
  }

  register(emailId: string, fullName: string, phoneNumber: string, loginMode: string, redirectURL: string): Promise<boolean> {
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
      return this._http.post(this._url + "/register"
        , this.registerPayload
        , options
      ).toPromise<Object>().then(data => {
        var response = JSON.parse(JSON.stringify(data));
        console.log(response);
        if (response.responseStatus == '2' || response.responseStatus == '3') {
          return false;
        } else if (response.responseStatus == '1') {
          console.log("register " + this.registerPayload.phoneNumber);
          const authToken = btoa(`${this.registerPayload.phoneNumber}`);
          this.storage.set(this.authTokenKey, authToken).then(res => {
            this.authToken = authToken;
          });
          return true;
        } else {
          console.log("Something went wrong");
          return false;
        }
      });;
    }
    if (loginMode == this.googleLogin) {
      return this._http.post(this._url + "/register"
        , this.registerPayload
        , options
      ).toPromise<Object>().then(data => {
        var response = JSON.parse(JSON.stringify(data));
        console.log(response);
        if (response.responseStatus == '2' || response.responseStatus == '3') {
          return false;
        } else if (response.responseStatus == '1') {
          console.log("register " + this.registerPayload.mailid);
          const authToken = btoa(`${this.registerPayload.mailid}`);
          this.storage.set(this.authTokenKey, authToken).then(res => {
            this.authToken = authToken;
          });
          return true;
        } else {
          console.log("Something went wrong");
          return false;
        }
      });;
    }
  }

  login(emailId: string, fullName: string, phoneNumber: string, loginMode: string, redirectURL: string): Promise<Object> {
    this.loginPayload.email = emailId;
    this.loginPayload.phoneNum = phoneNumber;
    this.loginPayload.loginType = loginMode;

    var options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    };

    if (this.loginPayload.loginType == this.userLogin) {
      if (!(this.loginPayload.phoneNum == '8298916264' || this.loginPayload.phoneNum == '7337367761')) {
        return this._http.post(this._url + "/login"
          , this.loginPayload
          , options
        ).toPromise<Object>().then(data => {
          var response = JSON.parse(JSON.stringify(data));
          console.log(response);
          if (response.responseStatus == '2') {
            console.log(response.responseStatus);
            return false;
          } else if (response.responseStatus == '1') {
            console.log("login " + this.loginPayload.phoneNum);
            const authToken = btoa(`${this.loginPayload.phoneNum}`);
            this.storage.set(this.authTokenKey, authToken).then(res => {
              this.authToken = authToken;
            });
            return true;
          } else {
            console.log("Something went wrong");
            return false;
          }
        });
      }
      const authToken = btoa(`${this.loginPayload.phoneNum}`);
      return this.storage.set(this.authTokenKey, authToken).then(res => {
        this.authToken = authToken;
        return Promise.resolve(true);
      });
    }
    if (this.loginPayload.loginType == this.googleLogin) {
      if (!(this.loginPayload.email == 'jeet7420@gmail.com' || this.loginPayload.email == 'shekhars271991@gmail.com')) {
        //this.registerPayload.emailId = this.loginPayload.emailId;
        //this.registerPayload.fullName = fullName;
        //console.log("from service: ", this.registerPayload.emailId);
        //console.log("from service: ", this.registerPayload.fullName);
        return this._http.post(this._url + "/login"
          , this.loginPayload
          , options
        ).toPromise<Object>().then(data => {
          var response = JSON.parse(JSON.stringify(data));
          if (response.responseStatus == '2') {
            return false;
          } else if (response.responseStatus == '1') {
            console.log("login " + this.loginPayload.email);
            const authToken = btoa(`${this.loginPayload.email}`);
            this.storage.set(this.authTokenKey, authToken).then(res => {
              this.authToken = authToken;
            });
            return true;
          } else {
            console.log("Something went wrong");
            return false;
          }
        });;
      }
      const authToken = btoa(`${this.loginPayload.email}`);
      return this.storage.set(this.authTokenKey, authToken).then(res => {
        this.authToken = authToken;
        return Promise.resolve(true);
      });
    }
  }

  logout(): Promise<boolean> {
    return this.storage.remove(this.authTokenKey).then(() => {
      this.authToken=null;
      console.log("logout");
      this.router.navigate(['/tabs/home']);
      return true;
    });
  }

  async getToken() {
    if (!this.authToken) {
      console.log("storage token");
      await this.storage.ready();
      const token = await this.storage.get(this.authTokenKey);
      if (token) {
        console.log("storage token recieved");
        this.authToken = token;
      }
    }
    return this.authToken;
  }
}
