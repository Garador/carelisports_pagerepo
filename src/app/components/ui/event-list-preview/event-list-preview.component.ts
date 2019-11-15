import { Component, OnInit, Input } from '@angular/core';
import { Event } from 'src/app/common/classes/event';
import { IndexService, PAGE_ID } from 'src/app/services/data/index.service';
import { Image } from 'src/app/common/classes/image';
import { IndexRouteService } from 'src/app/services/route/index.service';
import { FormatService } from 'src/app/services/format/format.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-event-list-preview',
	templateUrl: './event-list-preview.component.html',
	styleUrls: ['./event-list-preview.component.scss']
})
export class EventListPreviewComponent implements OnInit {

	@Input("event") event: Event;

	constructor(
		private _IndexService: IndexService,
		private _IndexRouteService: IndexRouteService,
		private _FormatService: FormatService,
		private _router: Router
	) { }

	ngOnInit() {
	}

	getFormattedDate(event: Event) {
		return this._FormatService.getFormattedDates(event);
	}

	viewAvailability(){
		this._router.navigateByUrl(this._IndexRouteService.getEventAvailabilityUrl(this.event));
	}

	bookTicketsNow(){
		this._router.navigateByUrl(this._IndexRouteService.getTicketsUrl());
	}

}
