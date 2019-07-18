import { Component, OnInit, Input } from '@angular/core';
import { Partner } from 'src/app/models/Partner';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss'],
})
export class PartnerComponent implements OnInit {

  @Input() partnerItem: Partner;

  constructor() { }

  ngOnInit() { }

}
