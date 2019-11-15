import { Injectable } from '@angular/core';
import { ImageService, IMG_SET } from './image.service';
import { EventService } from './event.service';
import { Image } from 'src/app/common/classes/image';
import { Sport } from 'src/app/common/classes/sport';
import { SportService } from './sport.service';
import { SPORT_ID } from 'src/app/common/enums';

export enum PAGE_ID {
	INDEX = 1,
	SPORT = 2,
	EVENT_AVAILABILITY = 3
}

@Injectable({
  providedIn: 'root'
})
export class IndexService {

	events: Event[];
	sports: Sport[];

  constructor(
	  private _imageService: ImageService,
	  private _eventService: EventService,
	  private _sportService: SportService
  ) {
  }

  getCarouselImages(page:PAGE_ID){
	  switch(page){
		  case PAGE_ID.INDEX:
		  return {
			  carousel_a: this._imageService.getImages().filter((img)=>{
				return ( img.id === "1" || img.id === "2" || img.id === "3");
			  }),
			  carousel_b: this._imageService.getImages().filter((img)=>{
				return ( img.id === "4" || img.id === "5" || img.id === "6");
			  })
		  }
		  case PAGE_ID.SPORT:
		  return {
			  carousel_a: this._imageService.getImages().filter((img)=>{
				return ( img.id === "1" || img.id === "2" || img.id === "3");
			  }),
			  carousel_b: this._imageService.getImages().filter((img)=>{
				return ( img.id === "4" || img.id === "5" || img.id === "6");
			  })
		  }
	  }
  }

  getEventsBySport(sportId:string){
	return this._eventService.getEvents()
	.filter((ev)=>{
		return ev.sport.id === sportId;
	})
  }

  getSport(sportId:string){
	return this._sportService.getSport(sportId);
  }

  getEvent(eventId:string){
	  return this._eventService.getEvents().find((ev)=>{
		return ev.id === eventId;
	  })
  }

  getUpcomingEvents(){
	return this._eventService.getUpcomingEvents();
  }
}
