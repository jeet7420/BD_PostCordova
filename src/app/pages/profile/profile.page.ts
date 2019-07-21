import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private userProfile: ProfileService,
    private pickerCtrl: PickerController) { }

  private user: User;

  ngOnInit() {
    this.user = this.userProfile.getUserDetails(1);
  }
  userCity: string = "Hyderbad";


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

}
