import { Component, OnInit } from '@angular/core';
import { IndexRouteService } from 'src/app/services/route/index.service';
import { SportService } from 'src/app/services/data/sport.service';
import { Sport } from 'src/app/common/classes/sport';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

	public _sports: Sport[] = [];

  constructor(
	  private _IndexRouteService:IndexRouteService,
	  private _SportService: SportService
  ) {
	this._sports = _SportService.sports.filter((sport)=>{
		return (_SportService.sports.indexOf(sport)<3);
	});
  }

  ngOnInit() {
  }

  getSportsMainPageUrl = this._IndexRouteService.getSportsMainPageUrl;

}
