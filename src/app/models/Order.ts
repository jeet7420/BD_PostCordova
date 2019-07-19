import { Beverage } from './Beverage';


export class Order {
    orderId?: number;
    beverages: Beverage[];
}