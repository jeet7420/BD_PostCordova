import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor() { }
  allNotif: boolean;
  newPlaces: boolean;
  newOffers: boolean;
  ngOnInit() {
  }

}
