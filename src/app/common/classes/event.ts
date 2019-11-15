import { Image } from './image';
import { Sport } from './sport';

export class Event {
	id:string;
	title:string;
	description_short:string;
	start_date: Date;
	end_date: Date;
	ref_image: Image;
	carousel_images:Image[];
	sport: Sport;
	propsedDatesText: string;
	proposedRatesText: string;
}