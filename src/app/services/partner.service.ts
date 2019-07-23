import { Injectable } from '@angular/core';
import { Partner } from '../models/Partner';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  private partners: Partner[] = [
    {
      id: 1,
      partnerName: "Over the Moon",
      imageUrl:"../../../assets/PartnerPics/1.jpg",
      status: "O",
      beveragesServed: [{
        beverageId: 1,
        beverageName: "Kingfisher",
        beverageType: "B",
        beveragePrice : 200,
        bannerImageUrl:"../../../assets/bevPics/kf.jpg"
      },
      {
        beverageId: 2,
        beverageName: "Hogarden",
        beverageType: "B",
        beveragePrice : 400,
        bannerImageUrl:"../../../assets/bevPics/hg.jpg"
      }]
    },
    {
      id: 2,
      partnerName: "The Laal Street",
      status: "O",
      imageUrl:"../../../assets/PartnerPics/2.jpg",
      beveragesServed: [{
        beverageId: 1,
        beverageName: "Kingfisher",
        beverageType: "B",
        beveragePrice : 250,
        bannerImageUrl:"../../../assets/bevPics/kf.jpg"
        
      },
      {
        beverageId: 3,
        beverageName: "Heinkin",
        beverageType: "B",
        beveragePrice : 500,
        bannerImageUrl:"../../../assets/bevPics/hk.jpg"
      }]
    },
    {
      id: 3,
      partnerName: "Prost",
      imageUrl:"../../../assets/PartnerPics/3.jpg",
      status: "O",
      beveragesServed: [{
        beverageId: 1,
        beverageName: "Kingfisher",
        beverageType: "B",
        beveragePrice : 300,
        bannerImageUrl:"../../../assets/bevPics/kf.jpg"
      },
      {
        beverageId: 3,
        beverageName: "Hogarden",
        beverageType: "B",
        beveragePrice : 300,
        bannerImageUrl:"../../../assets/bevPics/hg.jpg"
      }]
    },
    {
      id: 4,
      partnerName: "Ten Downing Street",
      status: "O",
      imageUrl:"../../../assets/PartnerPics/4.jpg",
      beveragesServed: [{
        beverageId: 1,
        beverageName: "Kingfisher",
        beverageType: "B",
        beveragePrice : 400,
        bannerImageUrl:"../../../assets/bevPics/kf.jpg"
      }]
    },
    {
      id: 5,
      partnerName: "Hoppipola",
      status: "C",
      imageUrl:"../../../assets/PartnerPics/5.jpg",
      beveragesServed: [{
        beverageId: 1,
        beverageName: "Kingfisher",
        beverageType: "B",
        beveragePrice : 200,
        bannerImageUrl:"../../../assets/bevPics/kf.jpg"
      },
      {
        beverageId: 2,
        beverageName: "Hogarden",
        beverageType: "B",
        beveragePrice : 300,
        bannerImageUrl:"../../../assets/bevPics/hg.jpg"
      },
      {
        beverageId: 4,
        beverageName: "Beera",
        beverageType: "B",
        beveragePrice : 550,
        bannerImageUrl:"../../../assets/bevPics/br.jpg"
      }],
    }
  ];

  constructor() { }

  getAllPartners() {
    return [...this.partners];
  }

  getPartnerById(partnerId: number):Partner {
    return {
      ...this.partners.find(partner => {
        return partner.id === partnerId;
      })
    }
  }

  filterItems(searchTerm: string):Partner[]{
    return this.partners.filter(partner => {
      return partner.partnerName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}
