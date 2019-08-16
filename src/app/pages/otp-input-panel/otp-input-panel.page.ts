import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-otp-input-panel',
  templateUrl: './otp-input-panel.page.html',
  styleUrls: ['./otp-input-panel.page.scss'],
})
export class OtpInputPanelPage implements OnInit {

  otpForm: FormGroup;
  phoneNumber: string;
  redirect: string;
  loginMode: string;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private toastCtrl: ToastController,
    private route: ActivatedRoute,
    private authService: AuthService) {
    this.otpForm = this.formBuilder.group({
      otp: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.phoneNumber = params['phoneNumber'];
      this.loginMode = params['loginMode'];
      this.redirect = params['redirect'];
      console.log('query params: ', this.phoneNumber);
    })
  }

  verifyOtp() {
    let otp = this.otpForm.get("otp").value;
    this.authService.verifyOtp(this.phoneNumber, otp).then(
      async res => {
        if (res) {
          this.authService.login(null, null, this.phoneNumber, this.loginMode, this.redirect).then(
            async res => {
              if (res) {
                this.router.navigateByUrl(this.redirect);
              } else {
                this.router.navigate(['/tabs/register'], {
                  queryParams: {
                    redirect: this.redirect,
                    loginMode: this.loginMode,
                    phoneNumber: this.phoneNumber,
                  }
                });;
              }
            }
          );
        }
        else {
          const toast = await this.toastCtrl.create({
            message: 'Invalid Otp. Please re-enter otp',
            duration: 1500,
          });
          toast.present();
        }
      }
    );
  }
}
