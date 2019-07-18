import { Beverage } from './Beverage';

export class Partner {

    id: number;
    partnerName: string;
    status: string; //active - 'A', Inactive - 'I', Open - 'O', Closed - 'C'
    locationLat?: number;
    locationLon?: number;
    address?: string;
    imageUrl?: string;
    beveragesServed?: Beverage[];


}