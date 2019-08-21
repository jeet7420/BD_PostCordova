import { Component, OnInit } from '@angular/core';
import { Partner } from 'src/app/models/Partner';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  noItemsMessageVisibilty = 'hidden';
  partners: Partner[];
  partnersFromService;
  filteredPartners: Partner[];
  public searchTerm: string = "";
  constructor(private partnerService: PartnerService) { }

  ngOnInit() {
    var fetchedPartners = this.partnerService.getAllPartners();
    fetchedPartners.subscribe(partners => {
      this.partnersFromService = partners;
      console.log(this.partnersFromService);
      this.filteredPartners = this.partnersFromService.partners;
    });
    //this.filteredPartners = null;
  }
  setFilteredItems() {
    this.filteredPartners = this.partnerService.filterItems(this.searchTerm);
  }

}

