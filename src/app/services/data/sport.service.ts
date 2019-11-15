import { Injectable } from '@angular/core';
import { SPORT_ID } from 'src/app/common/enums';
import { Sport } from 'src/app/common/classes/sport';
import { Image } from 'src/app/common/classes/image';

@Injectable({
	providedIn: 'root'
})
export class SportService {
	private _sports: Sport[];
	public get sports(){
		return this._sports;
	};

	constructor(
	) {
		this.loadSports();
	}

	loadSports(){
		let sports:Sport[] = [];

		let sport:Sport = new Sport();
		sport.id = SPORT_ID.MARATHON;
		sport.title = "Marathon";
		sport.banner1_img = new Image();
		sport.banner1_img.src = "assets/img/playground-2247477_960_720.jpg";
		sport.banner2_img = new Image();
		sport.banner2_img.src = "assets/img/Disney_Finish_with_Mickey.jpg";
		sports.push(sport);

		sport = new Sport();
		sport.id = SPORT_ID.SOCCER;
		sport.title = "Soccer";
		sport.banner1_img = new Image();
		//sport.banner1_img.src = "assets/img/haiti_women_disney_cup_international_youth_soccer_tournament_01-1.jpg";
		sport.banner1_img.src = "assets/img/17.jpg";
		
		sport.banner2_img = new Image();
		sport.banner2_img.src = "assets/img/img_6226.png";
		sports.push(sport);

		sport = new Sport();
		sport.id = SPORT_ID.HOCKEY;
		sport.title = "Hockey";
		sport.banner1_img = new Image();
		sport.banner1_img.src = "assets/img/Disney-Junior-Field-Hockey-Classic-TURICENTRO-3.jpg"
		
		sport.banner2_img = new Image();
		sport.banner2_img.src = "assets/img/DSC_6455.jpg";
		sports.push(sport);
		
		this._sports = sports;
	}

	getSport(id: string): Sport {
		return this._sports.find((sport)=>{
			return sport.id === id;
		});
	}
}
