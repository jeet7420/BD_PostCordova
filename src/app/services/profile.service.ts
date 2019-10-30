import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  private userDetails: User = {
    userId: 1,
    fullName: 'Shekhar Suman',
    mailid: 'shekhar_suman@outlook.com',
    phoneNum: '7337367761'
  }


  constructor() { }

  getUserDetails(userId: number): User {
    return this.userDetails;
  }
}
