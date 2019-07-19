import { Beverage } from './Beverage';
import { Partner } from './Partner';


export class Order {
    partner?:Partner;
    orderId?: number;
    beverages: Beverage[];
}