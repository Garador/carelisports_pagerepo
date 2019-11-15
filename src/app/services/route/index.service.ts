import { Injectable } from '@angular/core';
import { Event } from 'src/app/common/classes/event';
import { Sport } from 'src/app/common/classes/sport';

@Injectable({
	providedIn: 'root'
})
export class IndexRouteService {

	constructor() { }


	getEventAvailabilityUrl(event: Event): string {
		return `Sports/${event.sport.id}/availability/${event.id}`;
	}

	getTicketsUrl() {
		return `Tickets`;
	}

	getDisneyExperienceUrl() {
		return `Disney-Experience`;
	}


	getEventBookingUrl(event: Event): string {
		return `Sports/${event.sport.id}/availability/${event.id}`;
	}

	getSportsMainPageUrl(sport: Sport) {
		return `Sports/${sport.id}`;
	}

}
