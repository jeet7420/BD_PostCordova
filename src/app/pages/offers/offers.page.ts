import { Component, OnInit } from '@angular/core';
import { OfferItem } from 'src/app/models/OfferItem';
import { OffersService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  constructor(private offersService: OffersService) { }

  private offers: OfferItem[];
  ngOnInit() {
    this.offers = this.offersService.getAllOffers();
  }

}
