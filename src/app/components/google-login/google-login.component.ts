import { Component, OnInit, NgZone, Output, EventEmitter } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { app } from 'firebase';
import { GooglePlus } from '@ionic-native/google-plus/ngx'
import { Observable } from 'rxjs';
import { GoogleLoginService } from 'src/app/services/google-login.service';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss'],
})
export class GoogleLoginComponent implements OnInit {

  user: Observable<firebase.User>;

  googleUserDetails: any;

  constructor(private afAuth: AngularFireAuth,
    private gplus: GooglePlus) { }

  @Output() googleLogin = new EventEmitter();

  ngOnInit() { }

  processGoogleLogin() {
    //this.nativeGoogleLogin();
    this.webGoogleLogin();
  }

  async nativeGoogleLogin(): Promise<any> {
    try {
      const gplusUser = await this.gplus.login({
        'webClientId': '130563067105-h8dq4sb28vut2s7t7jev7duda5ec9a77.apps.googleusercontent.com',
        'offline': true,
        'scopes': 'profile email'
      })

      return await this.afAuth.auth.signInWithCredential(
        firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken)
      )
    } catch (err) {
      console.log(err)
    }
  }

  async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);
      console.log("NAME: " + credential.user.displayName);
      this.emitgoogleUserDetailsToParent(credential.user.email, credential.user.displayName);
    } catch (err) {
      console.log(err);
    }
  }

  signOut() {
    this.afAuth.auth.signOut();
    this.gplus.logout();
  }

  emitgoogleUserDetailsToParent(emailId: string, fullName: string) {
    //this.googleUserDetails.emailId = emailId;
    this.googleLogin.emit({ "emailId": emailId, "fullName": fullName});
  }
}
