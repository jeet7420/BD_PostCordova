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
      status: "O"
    },
    {
      id: 2,
      partnerName: "The Laal Street",
      status: "O"
    },
    {
      id: 3,
      partnerName: "Prost",
      status: "O"
    },
    {
      id: 4,
      partnerName: "Ten Downing Street",
      status: "O"
    },
    {
      id: 5,
      partnerName: "Hoppipola",
      status: "C"
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
