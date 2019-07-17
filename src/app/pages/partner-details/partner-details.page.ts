import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartnerService } from 'src/app/services/partner.service';
import { Partner } from 'src/app/models/partner';

@Component({
  selector: 'app-partner-details',
  templateUrl: './partner-details.page.html',
  styleUrls: ['./partner-details.page.scss'],
})
export class PartnerDetailsPage implements OnInit {

  partnerDetails: Partner;

  abs =1;

  constructor(private activatedRoute: ActivatedRoute
    , private partnerService: PartnerService) { }

  ngOnInit() {

    let id = +this.activatedRoute.snapshot.paramMap.get('partnerId');
    this.partnerDetails = this.partnerService.getPartnerById(id);
  }

}
