import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';
import { RegisterPayload } from 'src/app/models/RegisterPayload';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  redirect: string;
  loginMode: string;
  emailId: string;
  phoneNumber: string;
  fullName: string;
  registerPayload: RegisterPayload = {mailid:""};
  registerForm: FormGroup;
  readonly userLogin = 'P';
  readonly googleLogin = 'G';

  constructor(private authService: AuthService,
    private formBuilder: FormBuilder,
    private toastCtrl: ToastController,
    private router: Router,
    private route: ActivatedRoute) {
    this.registerForm = this.formBuilder.group({
      emailId: [null, Validators.required],
      fullName: [null, Validators.required],
      phoneNumber: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.redirect = params['redirect'] || '/tabs';
      this.loginMode = params['loginMode'];
      if(this.loginMode == this.userLogin) {
        this.phoneNumber = params['phoneNumber'];
        this.registerForm.controls['phoneNumber'].setValue(this.phoneNumber);
      }
      if(this.loginMode == this.googleLogin) {
        this.emailId = params['emailId'];
        this.fullName = params['fullName'];
        this.registerForm.controls['emailId'].setValue(this.emailId);
        this.registerForm.controls['fullName'].setValue(this.fullName);
      }
    })
  }

  processRegister() {
    this.authService.register(this.registerForm.get("emailId").value,
      this.registerForm.get("fullName").value,
      this.registerForm.get("phoneNumber").value,
      this.loginMode,
      this.redirect).then(
        async (res) => {
          if (res) {
            this.router.navigateByUrl(this.redirect);
          } else {
            const toast = await this.toastCtrl.create({
              message: 'User Registration Failed',
              duration: 1500,
            });
            toast.present();
          }
        }
      );
  }
}
