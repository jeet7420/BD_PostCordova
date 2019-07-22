import { Component, OnInit } from '@angular/core';
import { FaqItem } from 'src/app/models/FaqItem';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {

  public faqs: FaqItem[] = [];

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.faqs = this.configService.getFaqs();
    console.log(this.faqs);
  }

  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.faqs.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

}
