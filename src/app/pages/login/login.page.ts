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

  readonly userLoginToken = 'U';
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
    this.authService.login(googleUserDetails.emailId, googleUserDetails.fullName, null, this.googleLoginToken, this.redirect).then(
      async res => {
        if (res) {
          this.router.navigateByUrl(this.redirect);
        } else {
          const toast = await this.toastCtrl.create({
            message: 'Welcome to Beerdrum. Please enter the above details.',
            duration: 3000,
          });
          toast.present();
        }
      }
    );;
  }

  verifyUser(){
    this.authService.login(null, null, this.loginForm.get("phoneNumber").value, this.userLoginToken, this.redirect).then(
      async res => {
        if (res) {
          this.router.navigateByUrl(this.redirect);
        } else {
          const toast = await this.toastCtrl.create({
            message: 'Welcome to Beerdrum. Please enter the above details.',
            duration: 3000,
          });
          toast.present();
        }
      }
    );;
  }
}
