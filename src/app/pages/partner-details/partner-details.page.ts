import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartnerService } from 'src/app/services/partner.service';
import { Partner } from 'src/app/models/Partner';
import { BeverageService } from 'src/app/services/beverage.service';
import { Beverage } from 'src/app/models/Beverage';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/User';
import { Order } from 'src/app/models/Order';

@Component({
  selector: 'app-partner-details',
  templateUrl: './partner-details.page.html',
  styleUrls: ['./partner-details.page.scss'],
})
export class PartnerDetailsPage implements OnInit {
  
  dataloadedFlag = false;
  partnerDetails: Partner;
  cartBeverages: Beverage[];
  private bev: Beverage = {beverageId:0};
  totalAmount = 0;
  partnerFromService;
  imageUrl = "../../../assets/PartnerPics/1.jpg";
  private user: User= {mailid:""};
  private order: Order= {userId:""};
  orderResponse;
  id;

  constructor(private activatedRoute: ActivatedRoute
    , private partnerService: PartnerService
    , private authService: AuthService
    , private beverageService: BeverageService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('partnerId');
    console.log(this.id);
    var selectedPartner = this.partnerService.getPartnerById(this.id);
    selectedPartner.subscribe(partner => {
      //ar response = JSON.parse(JSON.stringify(partner));
      this.partnerFromService=partner;
      console.log(this.partnerFromService);
      this.partnerDetails=this.partnerFromService;
      this.dataloadedFlag=true;
      console.log(this.partnerDetails);
    });
    //this.partnerDetails = this.partnerService.getPartnerById(id);
  }
  ionViewDidEnter() {
    this.beverageService.clearCart();
  }

  addToCart(beverage: any) {
    this.bev.beverageId = beverage.bevId;
    this.bev.beverageName = beverage.bevName;
    this.bev.beverageType = beverage.bevType;
    this.bev.bannerImageUrl = beverage.bevDisplayPicUrl;
    this.bev.beveragePrice = beverage.bevSalePrice;
    this.beverageService.addToCart(this.bev);
    this.totalAmount += beverage.bevSalePrice;
    this.cartBeverages = this.beverageService.getCart();
    console.log(JSON.stringify(this.cartBeverages));
  }

  navigateToBuy(): void {
    console.log('Navigate to buy');
    this.getUserDetails().then(res => { 
      this.user = res;
      this.order.userId = '' + this.user.userId;
      this.order.partnerId = this.id;
      this.order.orderAmount = this.totalAmount;
      this.order.customerName = this.user.fullName;
      this.order.customerEmail = this.user.mailid;
      this.order.customerPhone = this.user.phoneNum;
      var initiateOrderResponsee = this.partnerService.initiateOrder(this.order);
      initiateOrderResponsee.subscribe(response => {
        this.orderResponse = response;
        console.log(this.orderResponse.msg);
      })
    });
  }

  getUserDetails() {
    return this.authService.getLoggedInUser().then(res => {
      return res;
    });
  }

  deleteItemFromCart(id: number) {

    console.log('in partner details controller');

    for (let i = 0; i < this.cartBeverages.length; i++) {
      if (this.cartBeverages[i].beverageId === id) {
        this.totalAmount -= this.cartBeverages[i].beveragePrice;
        if (this.cartBeverages[i].quantity === 1) {
          this.cartBeverages.splice(i, 1);
        } else {
          this.cartBeverages[i].quantity--;
        }
      }
    }
  }

}
