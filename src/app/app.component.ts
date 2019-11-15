import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app1';
  constructor(private _router: Router, private _changeDetectorRef: ChangeDetectorRef){

  }

  ngOnInit(){
	  this._router.events.subscribe((evt) => {
		  if (!(evt instanceof NavigationEnd)) {
		  }else{
			window.scrollTo(0, 0)
			$(".parallax-mirror").remove();
		  }
	  })
  }
}
