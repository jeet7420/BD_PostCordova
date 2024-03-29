import { Component, OnInit } from '@angular/core';
import { FaqItem } from 'src/app/models/FaqItem';
import { ConfigService } from 'src/app/services/config.service';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {

  public faqs: FaqItem[] = [];

  constructor(private configService: ConfigService,
    private callNumber: CallNumber) { }

  ngOnInit() {
    this.faqs = this.configService.getFaqs();
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

  callSupport() {
    console.log("here");
    this.callNumber.callNumber("7337367761", true)
      .then(res => console.log(res))
      .catch(err => console.log(err));

  }

}
