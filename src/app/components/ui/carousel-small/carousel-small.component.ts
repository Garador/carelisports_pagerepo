import { Component, OnInit, Input } from '@angular/core';
import { Image } from 'src/app/common/classes/image';

@Component({
	selector: 'app-carousel-small',
	templateUrl: './carousel-small.component.html',
	styleUrls: ['./carousel-small.component.scss']
})
export class CarouselSmallComponent implements OnInit {

	@Input("images") images: Image[];

	constructor() { }

	ngOnInit() {
	}


	isActive(img:Image){
		return this.images.indexOf(img) == 0;
	}

}
