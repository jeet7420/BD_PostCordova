import { Beverage } from './Beverage';
import { Partner } from './Partner';


export class Order {
    orderId?: number;
    userId?: string;
    partnerId?: string;
    orderAmount?: number;
    customerEmail?: string;
    customerName?: string;
    customerPhone?: string;
}