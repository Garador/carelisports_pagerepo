import { Component, OnInit } from '@angular/core';
import { SportService } from 'src/app/services/data/sport.service';
import { Sport } from 'src/app/common/classes/sport';
import { IndexRouteService } from 'src/app/services/route/index.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	public _sports: Sport[] = this._SportService.sports;

	constructor(
		private _SportService: SportService,
		private _IndexRouteService: IndexRouteService
	) { }

	ngOnInit() {
	}

	getSportId(sport:Sport){
		return this._IndexRouteService.getSportsMainPageUrl(sport);
	}

	getTicketsUrl = this._IndexRouteService.getTicketsUrl;

	getDisneyExperienceUrl = this._IndexRouteService.getDisneyExperienceUrl;

}
