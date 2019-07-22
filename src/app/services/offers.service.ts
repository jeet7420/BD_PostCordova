import { Injectable } from '@angular/core';
import { OfferItem } from '../models/OfferItem';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  private offers: OfferItem[] = [
    {
      offerId: 1,
      offerType: "discount percentage",
      offerDiscPercent: 10,
      offerMaxAmount: 200,
      offerImgUrl: "../../assets/offerImages/offer10POff",
      offerDescription: "hello hola im here"
    },
    {
      offerId: 2,
      offerType: "discount percentage",
      offerDiscPercent: 10,
      offerMaxAmount: 100,
      offerImgUrl: "../../assets/offerImages/offer10POff",
      offerDescription: "hello hola was there"
    }
  ];
  constructor() { }

  getAllOffers(): OfferItem[] {
    return this.offers;

  }



}
