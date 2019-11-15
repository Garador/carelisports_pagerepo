import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
declare var $:any;
declare var Rellax:any;

@Component({
  selector: 'app-parallax-header',
  templateUrl: './parallax-header.component.html',
  styleUrls: ['./parallax-header.component.scss']
})
export class ParallaxHeaderComponent implements OnInit {

	private _imgUrl: string;
	private _id = Math.floor(Math.random()*3000).toString(16);

	@Input("img_url")
	set img_url(imgUrl:string){
		this._imgUrl = imgUrl;
	}
	get img_url(){
		return this._imgUrl;
	}

	constructor(
		private _dms: DomSanitizer
	) { }

	ngOnInit() {
		
	}

	getStyle() {
		return this._dms.bypassSecurityTrustStyle(`background-image:url(${this.img_url})`)
	}

	getSafeUrl(){
		return this._dms.bypassSecurityTrustUrl(this.img_url);
	}

}
