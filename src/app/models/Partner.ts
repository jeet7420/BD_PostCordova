import { Beverage } from './Beverage';

export class Partner {

    id: number;
    partner_name: string;
    status?: string; //active - 'A', Inactive - 'I', Open - 'O', Closed - 'C'
    partner_location_lat?: number;
    partner_location_lon?: number;
    partner_address?: string;
    partner_image_url?: string;
    beveragesServed?: Beverage[];


}