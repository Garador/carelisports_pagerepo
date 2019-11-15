import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-parallax',
	templateUrl: './parallax.component.html',
	styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit {

	@Input("img_url") img_url: string;

	constructor(
		private dms: DomSanitizer
	) { }

	ngOnInit() {
	}

	getStyle() {
		return this.dms.bypassSecurityTrustStyle(`background-image:url(${this.img_url})`)
	}

	getSafeUrl(){
		return this.dms.bypassSecurityTrustUrl(this.img_url);
	}

}
