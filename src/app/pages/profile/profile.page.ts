import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private userProfile: ProfileService,
    private router: Router) { }

  private user: User;

  ngOnInit() {
    this.user = this.userProfile.getUserDetails(1);
  }

  openHistoryPage(){

  }

}
