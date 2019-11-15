import { Component, OnInit } from "@angular/core";
import { IndexService, PAGE_ID } from "src/app/services/data/index.service";
import { Image } from "src/app/common/classes/image";
import { Sport } from "src/app/common/classes/sport";
import { ActivatedRoute } from "@angular/router";
import { Event } from "src/app/common/classes/event";
import { FormatService } from 'src/app/services/format/format.service';
import { Title, DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: "app-event-availability",
	templateUrl: "./event-availability.component.html",
	styleUrls: ["./event-availability.component.scss"]
})
export class EventAvailabilityComponent implements OnInit {
	smallCarouselImages: Image[];
	public _sport: Sport;
	public _event: Event;

	constructor(
		private _IndexService: IndexService,
		private _route: ActivatedRoute,
		private _FormatService: FormatService,
		private _TitleService: Title,
		private _DOMSanitizer: DomSanitizer
	) { }

	ngOnInit() {
		this.loadSportEvents();
		this.setCarouselImages();
	}

	setTitle(){
		this._TitleService.setTitle(`Careli Sports - ${this._sport.title} - ${this._event.title}`)
	}

	setCarouselImages() {
		let carouselImages = this._IndexService.getCarouselImages(PAGE_ID.INDEX);
		this.smallCarouselImages = carouselImages.carousel_b;
	}

	loadSportEvents() {
		this._sport = this._IndexService.getSport(<any>(
			this._route.snapshot.paramMap.get("sportId")
		));
		this._event = this._IndexService.getEvent(
			this._route.snapshot.paramMap.get("eventId")
		);
		this.setTitle();
	}

	getFormmatedDates() {
		return this._FormatService.getFormattedDates(this._event);
	}

	getScapedHTML(htmlText:string){
		return this._DOMSanitizer.bypassSecurityTrustHtml(htmlText);
	}
}
