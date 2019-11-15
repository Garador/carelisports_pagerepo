import { Component, OnInit } from '@angular/core';
import { SPORT_ID } from 'src/app/common/enums';
import { Image } from 'src/app/common/classes/image';
import { IndexService, PAGE_ID } from 'src/app/services/data/index.service';
import { EventService } from 'src/app/services/data/event.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Sport } from 'src/app/common/classes/sport';
import { Event } from 'src/app/common/classes/event';
import { Title } from '@angular/platform-browser';



@Component({
	selector: 'app-sport',
	templateUrl: './sport.component.html',
	styleUrls: ['./sport.component.scss']
})
export class SportComponent implements OnInit {
	smallCarouselImages: Image[] = [];
	public _events: Event[] = [];
	public _sport: Sport;

	constructor(
		private _IndexService: IndexService,
		private _router: Router,
		private _route: ActivatedRoute,
		private _TitleService: Title) {
			this._router.events.subscribe((ev)=>{
				if(ev instanceof NavigationEnd){
					this.init();
				}
			});
	}

	setTitle(){
		this._TitleService.setTitle("Careli Sports - "+this._sport.title)
	}

	ngOnInit() {
		console.log("ngOnInit activated.");
	}

	init(){
		this._sport = this._IndexService.getSport(<any>this._route.snapshot.paramMap.get("sportId"));
		this.loadSportEvents();
		this.setCarouselImages();
		this.setTitle();
	}

	setCarouselImages() {
		let carouselImages = this._IndexService.getCarouselImages(PAGE_ID.INDEX);
		this.smallCarouselImages = carouselImages.carousel_b;
	}

	loadSportEvents() {
		this._events = this._IndexService.getEventsBySport(this._sport.id);
		console.log(this._sport);
	}

	hasSports(){
		return this._events.length > 0;
	}

}
