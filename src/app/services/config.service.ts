import { Injectable } from '@angular/core';
import { FaqItem } from '../models/FaqItem';

@Injectable({
  providedIn: 'root'
})
// contains services related to configurations
export class ConfigService {

  private faq: FaqItem[] = [
    {
      title: "How to use the app",
      expanded: false,
      subtitles: [{
        subtitleHeading: "Purchase",
        answer: "All you need to do is to purchase the beverages you want from the bar you are planning to go, or you already are at. After you purchase you will be able to see your purchase in the dispense page of your app"
      },
      {
        subtitleHeading: "Dispense",
        answer: "Go to the Beer-drum dispenser machine placed in the bar (just look for the bright yellow thing around you) pick up a glass placed on the side, place it below the tap and open the tap. Now, click the dispense button on the app and voila, you have chilled beer in your hands to rejoice with"
      },
      {
        subtitleHeading: "What if I forget to open the tap before pressing the button?",
        answer: "Don’t worry, the dispense will only start once you open the tap and only it after the tap has dispensed the correct amount."
      }]
    },
    {
      title: "Payment failed but amount deducted",
      expanded: false,
      subtitles: [{
        subtitleHeading: "Failed Transaction",
        answer: "You have nothing to worry about. The amount charged for unsuccessful transaction will be refunded to you within 4 hours. All you have to do then is wait for your bank to process the refund which take around 3-4 days depending on the bank and the bank timelines"
      }]
    },
    {
      title: "Dispense failed",
      expanded: false,
      subtitles: [{
        subtitleHeading: "Dispense Failed in App",
        answer: "Nothing to fret about. If the app shows you the message that the dispense had failed, it might be just an unstable internet connection. Just give the machine a minute and try again. After 3 failed attempts the order will be automatically cancelled and the full amount for the remaining dispenses in the order will be refunded back to you within 4 hours"
      },
      {
        subtitleHeading: "Dispense successful but no beverage came out of the tap",
        answer: "There is possibility that the super enthusiastic crowd has already gulped down all the contents of the beer canister plugged to the dispenser and the staff have forgotten to replace it. Don’t worry, in this scenario just show the dispense id displayed in your screen to the staff immediately, they will take a note of it and give you a free beer. Cheers!"
      }]
    },
    {
      title: "Issue in the app",
      expanded: false,
      subtitles: [{
        subtitleHeading: "Something went wrong",
        answer: "Just call us directly and we would be able to help you out"
      }]
    }
  ];
  constructor() { }

  getFaqs(): FaqItem[] {
    return this.faq;
  }


}
