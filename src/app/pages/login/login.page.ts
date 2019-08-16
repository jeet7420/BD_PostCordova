import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  readonly userLoginToken = 'P';
  readonly googleLoginToken = 'G';
  loginForm: FormGroup;
  redirect: string;

  constructor(private authService: AuthService,
    private toastCtrl: ToastController,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) {
      this.loginForm = this.formBuilder.group({
        phoneNumber: [null, Validators.required]
      });
     }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.loginForm.controls['phoneNumber'].setValue("");
      this.redirect = params['redirect'] || '/tabs';
      console.log('query params: ', this.redirect);
    })
  }

  verifyGoogleUser(googleUserDetails: any){
    var loginResponse = this.authService.login(googleUserDetails.emailId, googleUserDetails.fullName, null, this.googleLoginToken, this.redirect);
    loginResponse.then(
      async res => {
        if (res) {
          this.router.navigateByUrl(this.redirect);
        } else {
          this.router.navigate(['/tabs/register'], {
            queryParams: {
              redirect: this.redirect,
              loginMode: this.googleLoginToken,
              emailId: googleUserDetails.emailId,
              fullName: googleUserDetails.fullName
            }
          });
        }
      }
    );
  }

  verifyUser(){
    let phoneNumberLocal = this.loginForm.get("phoneNumber").value;
    this.authService.login(null, null, phoneNumberLocal, this.userLoginToken, this.redirect).then(
      async res => {
        if (res) {
          this.router.navigateByUrl(this.redirect);
        } else {
          this.router.navigate(['/tabs/register'], {
            queryParams: {
              redirect: this.redirect,
              loginMode: this.userLoginToken,
              phoneNumber: phoneNumberLocal,
            }
          });;
        }
      }
    );
  }
}
