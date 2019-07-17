import { Component, OnInit } from '@angular/core';
import { Partner } from 'src/app/models/partner';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  partners: Partner[];
  constructor(private partnerService: PartnerService) { }

  ngOnInit() {
    this.partners = this.partnerService.getAllPartners();
  }

}
