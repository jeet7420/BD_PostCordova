import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartnerService } from 'src/app/services/partner.service';
import { Partner } from 'src/app/models/partner';
import { BeverageService } from 'src/app/services/beverage.service';
import { Beverage } from 'src/app/models/Beverage';

@Component({
  selector: 'app-partner-details',
  templateUrl: './partner-details.page.html',
  styleUrls: ['./partner-details.page.scss'],
})
export class PartnerDetailsPage implements OnInit {

  partnerDetails: Partner;
  cartBeverages: Beverage[];
  totalAmount: number = 0;

  constructor(private activatedRoute: ActivatedRoute
    , private partnerService: PartnerService
    , private beverageService: BeverageService) { }

  ngOnInit() {
    let id = +this.activatedRoute.snapshot.paramMap.get('partnerId');
    this.partnerDetails = this.partnerService.getPartnerById(id);
  }
  ionViewDidEnter() {
    this.beverageService.clearCart();
  }

  addToCart(beverage: Beverage) {
    console.log("Added Beverage", beverage.beverageName);
    this.beverageService.addToCart(beverage);
    this.totalAmount += beverage.beveragePrice;
    this.cartBeverages = this.beverageService.getCart();
    console.log(JSON.stringify(this.cartBeverages));
  }

  navigateToBuy(): void {
    console.log("Navigate to buy");
  }

}
