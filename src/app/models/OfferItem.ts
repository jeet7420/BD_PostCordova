import { Beverage } from './Beverage';

export class OfferItem {

    offerId: number;
    offerType?: string;
    offerImgUrl?: string;
    offerDiscPercent?: number;
    offerDiscAmount?: number;
    offerMaxAmount?: number;
    freeBev?: Beverage;
    offerDescription?: string;

}