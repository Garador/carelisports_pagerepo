import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-disney-experience',
  templateUrl: './disney-experience.component.html',
  styleUrls: ['./disney-experience.component.scss']
})
export class DisneyExperienceComponent implements OnInit {

  constructor(
	  private _TitleService: Title
  ) {
  }

  ngOnInit() {
	this.setTitle();
  }

  setTitle(){
	  this._TitleService.setTitle("Careli Sports - Disney Experience")
  }

}
