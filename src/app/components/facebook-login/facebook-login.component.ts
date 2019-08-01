import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Facebook } from '@ionic-native/Facebook/ngx';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-facebook-login',
  templateUrl: './facebook-login.component.html',
  styleUrls: ['./facebook-login.component.scss'],
})
export class FacebookLoginComponent implements OnInit {

  constructor(private facebook: Facebook) { }

  //@Output() facebookLogin = new EventEmitter();

  ngOnInit() {}

  processFacebookLoginNative() {
    this.facebook.login(["email"]).then((loginResponse) =>  {
      let credential = firebase.auth.FacebookAuthProvider.credential(loginResponse.authResponse.accessToken);
      firebase.auth().signInWithCredential(credential).then((info) =>  {
        alert(JSON.stringify(info));
        console.log(info.user.displayName);
        console.log(info.user.email);
      })
    })
  }

  processFacebookLogin() {
    let provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider).then(() => {
       firebase.auth().getRedirectResult().then((result ) => {
          console.log(result.user.email);
          console.log(result.user.displayName);
       })
    })
  }
}
