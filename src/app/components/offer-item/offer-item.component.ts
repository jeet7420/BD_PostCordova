import { Component, OnInit, Input } from '@angular/core';
import { OfferItem } from 'src/app/models/OfferItem';
import { OffersService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss'],
})
export class OfferItemComponent implements OnInit {

  @Input() OfferItem: OfferItem;
  constructor() { }

  ngOnInit() {

  }

}
