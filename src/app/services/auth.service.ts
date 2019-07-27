import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { LoginPayload } from '../models/LoginPayload';

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

  constructor(private storage: Storage, private _http: HttpClient) { }

  login(emailId: string, phoneNumber: string, loginMode: string): Promise<boolean> {
    this.loginPayload.emailId=emailId;
    this.loginPayload.phoneNumber=phoneNumber;
    this.loginPayload.loginMode=loginMode;
    if(this.loginPayload.loginMode == this.userLogin){
      if(!(this.loginPayload.phoneNumber == '8298916264' || this.loginPayload.phoneNumber == '7337367761')){
        return Promise.resolve(false);
      }
      const authToken = btoa(`${this.loginPayload.phoneNumber}`);
      return this.storage.set(this.authTokenKey, authToken).then(res => {
        this.authToken=authToken;
        return Promise.resolve(true);
      });
    }
    if(this.loginPayload.loginMode == this.googleLogin){
      if(!(this.loginPayload.emailId == 'jeet7420@gmail.com' || this.loginPayload.emailId == 'shekhars271991@gmail.com')){
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
