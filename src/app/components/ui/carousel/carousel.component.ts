import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Image } from 'src/app/common/classes/image';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

	@Input("images") images: Image[];

	constructor(
		private _domS:DomSanitizer
	) { }

	ngOnInit() {
	}

	isActive(img:Image){
		return (this.images.indexOf(img) == 0);
	}

	getDivStyle(img:Image){
		return this._domS.bypassSecurityTrustStyle(`background-image:url("${img.src}")`);
	}

}
