import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import { IndexService, PAGE_ID } from 'src/app/services/data/index.service';
import { Image } from 'src/app/common/classes/image';
import { Event } from 'src/app/common/classes/event';
import { IndexRouteService } from 'src/app/services/route/index.service';
import { FormatService } from 'src/app/services/format/format.service';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
	bigCarouselImages:Image[] = [];
	smallCarouselImages:Image[] = [];
	upcomingEvents:Event[] = [];

	constructor(
		private _IndexService:IndexService,
		private _IndexRouteService:IndexRouteService,
		private _FormatService: FormatService,
		private _TitleService: Title
	) { }

	ngOnInit() {
		this.setCarouselImages();
		this.setUpcomingEvents();
		this._TitleService.setTitle("Careli Sports - Principal");
	}

	setCarouselImages() {
		let carouselImages = this._IndexService.getCarouselImages(PAGE_ID.INDEX);
		this.bigCarouselImages = carouselImages.carousel_a;
		this.smallCarouselImages = carouselImages.carousel_b;
	}

	setUpcomingEvents(){
		this.upcomingEvents = this._IndexService.getUpcomingEvents();
	}

	getBookingUrl = this._IndexRouteService.getEventBookingUrl;

	getFormattedDates = this._FormatService.getFormattedDates;

}
