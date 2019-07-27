import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  readonly userLoginToken = 'U';
  readonly googleLoginToken = 'G';
  redirect: string;

  constructor(private authService: AuthService,
    private toastCtrl: ToastController,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.redirect = params['redirect'] || '/tabs';
      console.log('query params: ', this.redirect);
    })
  }

  verifyGoogleUser(googleUserDetails: any){
    this.authService.login(googleUserDetails.emailId, null, this.googleLoginToken).then(
      async res => {
        if (res) {
          this.router.navigateByUrl(this.redirect);
        } else {
          const toast = await this.toastCtrl.create({
            message: 'Incorrect credentials.',
            duration: 1500,
          });
          toast.present();
        }
      }
    );;
  }
}
