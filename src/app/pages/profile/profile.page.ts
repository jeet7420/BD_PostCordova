import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private userProfile: ProfileService,
    private pickerCtrl: PickerController,
    private authService: AuthService,
    private storage: Storage,
    private alertCtrl: AlertController) { }

  private user: User= {mailid:""};
  private userDetails: User;

  ngOnInit() {
    //this.user = this.userProfile.getUserDetails(1);
    this.getUserDetails().then(res => { 
      this.user = res;
      console.log("name " + this.user.full_name);
      console.log("email " + this.user.mailid);
      console.log("phone " + this.user.phone_number);
      console.log("category " + this.user.user_category);
      console.log("type " + this.user.user_type);
    });
  }

   getUserDetails() {
    return this.authService.getLoggedInUser().then(res => {
      //console.log("ole " + res.full_name);
      //console.log("ole " + res.mailid);
      //console.log("ole " + res.phone_number);
      //console.log("ole " + res.user_category);
      //console.log("ole " + res.user_type);
      return res;
    });
  }

  userCity: string = "Hyderbad";

  async logoutWarning() {

    const alertMsg = `
      <style>
        .logout-warning {
          color: var(--ion-color-primary);
        }
        .logout-warning .alert-message {
          text-align: center;
        }
        .logout-warning img {
          max-width: 4em;
        }
        .logout-warning strong {
          display: block;
          margin: 1em 0;
        }
      </style>
      <strong>Are you sure ?</strong>
    `;

    const alert = await this.alertCtrl.create({
      message: alertMsg,
      cssClass: 'logout-warning',
      buttons: [{
        text: 'YES',
        handler: () => {
          this.authService.logout();
        }
      },
      {
        text: 'NO',
        handler: () => {
          this.alertCtrl.dismiss;   
        }
      }],
    });
    await alert.present();
  }

  async showBasicPicker() {
    let opts: PickerOptions = {
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Done'
        }
      ],
      columns: [
        {
          name: 'city',
          options: [
            { text: 'Hyderabad', value: '1' },
            { text: 'Banglore', value: '2' },
            { text: 'Pune', value: '3' }
          ]
        }
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn('city');
      this.userCity = col.options[col.selectedIndex].text;
      console.log(this.userCity);
    });
  }

  logout() {
      this.authService.logout();
  }
}
