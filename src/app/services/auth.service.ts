import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { LoginPayload } from '../models/LoginPayload';
import { RegisterPayload } from '../models/RegisterPayload';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly authTokenKey = 'auth_token';
  readonly userLogin = 'U';
  readonly googleLogin = 'G';
  authToken: string;
  private _url="";
  loginPayload: LoginPayload = {loginMode:""};
  registerPayload: RegisterPayload = {emailId:""};

  constructor(private storage: Storage, private _http: HttpClient, private router: Router) { }

  register(emailId: string, fullName: string, phoneNumber: string, loginMode: string, redirectURL: string): Promise<boolean> {
    console.log("Email Id: ", emailId);
    console.log("Full Name: ", fullName);
    console.log("Phone Number: ", phoneNumber);
    console.log("Login Mode: ", loginMode);
    console.log("Redirect URL: ", redirectURL);
    this.registerPayload.emailId = emailId;
    this.registerPayload.fullName = fullName;
    this.registerPayload.phoneNumber = phoneNumber;
    if(loginMode == this.userLogin){
      const authToken = btoa(`${this.loginPayload.phoneNumber}`);
      return this.storage.set(this.authTokenKey, authToken).then(res => {
        this.authToken=authToken;
        return Promise.resolve(true);
      });
    }
    if(loginMode == this.googleLogin){
      const authToken = btoa(`${this.loginPayload.emailId}`);
      return this.storage.set(this.authTokenKey, authToken).then(res => {
        this.authToken=authToken;
        return Promise.resolve(true);
      });
    }
  }

  login(emailId: string, fullName: string, phoneNumber: string, loginMode: string, redirectURL: string): Promise<boolean> {
    console.log("CHECK: ", phoneNumber);
    this.loginPayload.emailId=emailId;
    this.loginPayload.phoneNumber=phoneNumber;
    this.loginPayload.loginMode=loginMode;
    if(this.loginPayload.loginMode == this.userLogin){
      if(!(this.loginPayload.phoneNumber == '8298916264' || this.loginPayload.phoneNumber == '7337367761')){
        this.router.navigate(['/tabs/register'], {
          queryParams: {
            redirect: redirectURL,
            loginMode: this.userLogin,
            phoneNumber: phoneNumber
          }
        });
        return Promise.resolve(false);
      }
      const authToken = btoa(`${this.loginPayload.phoneNumber}`);
      return this.storage.set(this.authTokenKey, authToken).then(res => {
        this.authToken=authToken;
        return Promise.resolve(true);
      });
    }
    if(this.loginPayload.loginMode == this.googleLogin){
      if(!(this.loginPayload.emailId == 'jeet7420@gmail.com' || this.loginPayload.emailId == 'shekhars271991@gmail.com')) {
        //this.registerPayload.emailId = this.loginPayload.emailId;
        //this.registerPayload.fullName = fullName;
        //console.log("from service: ", this.registerPayload.emailId);
        //console.log("from service: ", this.registerPayload.fullName);
        this.router.navigate(['/tabs/register'], {
          queryParams: {
            redirect: redirectURL,
            loginMode: this.googleLogin,
            emailId: this.loginPayload.emailId,
            fullName: fullName
          }
        });
        return Promise.resolve(false);
      }
      const authToken = btoa(`${this.loginPayload.emailId}`);
      return this.storage.set(this.authTokenKey, authToken).then(res => {
        this.authToken=authToken;
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
