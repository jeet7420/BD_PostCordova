import { Injectable } from '@angular/core';
import { Partner } from '../models/partner';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  private partners: Partner[] = [
    {
      id: 1,
      partnerName: "Over the Moon",
      status: "O",
      beveragesServed: [{
        beverageId: 1,
        beverageName: "Kingfisher",
        beverageType: "B"
      },
      {
        beverageId: 2,
        beverageName: "Hogarden",
        beverageType: "B"
      }]
    },
    {
      id: 2,
      partnerName: "The Laal Street",
      status: "O",
      beveragesServed: [{
        beverageId: 1,
        beverageName: "Kingfisher",
        beverageType: "B"
      },
      {
        beverageId: 3,
        beverageName: "Heinkin",
        beverageType: "B"
      }]
    },
    {
      id: 3,
      partnerName: "Prost",
      status: "O",
      beveragesServed: [{
        beverageId: 1,
        beverageName: "Kingfisher",
        beverageType: "B"
      },
      {
        beverageId: 3,
        beverageName: "Hogarden",
        beverageType: "B"
      }]
    },
    {
      id: 4,
      partnerName: "Ten Downing Street",
      status: "O",
      beveragesServed: [{
        beverageId: 1,
        beverageName: "Kingfisher",
        beverageType: "B"
      }]
    },
    {
      id: 5,
      partnerName: "Hoppipola",
      status: "C",
      beveragesServed: [{
        beverageId: 1,
        beverageName: "Kingfisher",
        beverageType: "B"
      },
      {
        beverageId: 2,
        beverageName: "Hogarden",
        beverageType: "B"
      },
      {
        beverageId: 4,
        beverageName: "Beera",
        beverageType: "B"
      }],
    }
  ];

  constructor() { }

  getAllPartners() {
    return [...this.partners];
  }

  getPartnerById(partnerId: number) {
    return {
      ...this.partners.find(partner => {
        return partner.id === partnerId;
      })
    }
  }
}
