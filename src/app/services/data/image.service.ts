import { Injectable } from '@angular/core';
import { Image } from 'src/app/common/classes/image';

export enum IMG_SET {
	CAROUSEL_A = 1,
	CAROUSEL_B = 2
}

@Injectable({
	providedIn: 'root'
})
export class ImageService {
	private _images: Image[];

	constructor() { }


	getImages(): Image[] {
		if(this._images && this._images.length>0){
			return this._images;
		}

		let images: Image[] = [];
		let image = new Image();

		//+Big index carousel images
		image.caption = "Hospédate en Disney All Star Resort";
		image.src = "assets/img/0-1200x900.jpg";
		image.id = "1";
		images.push(image);

		image = new Image();
		image.caption = "Compite a nivel mundial";
		image.src = "assets/img/disney-all-star-sports-resort-exterior-6d37f.jpg";
		image.id = "2";
		images.push(image);

		image = new Image();
		image.caption = "Disfruta de tu estadia";
		image.src = "assets/img/disney+world+all+star+sports+resort+review+grounds+10.jpeg";
		image.id = "3";
		images.push(image);
		//-Big index carousel images

		//+Small index carousel images
		image = new Image();
		image.caption = ""
		image.src = "assets/img/maraton-disney-2019-2.jpg";
		image.id = "4";
		images.push(image);

		image = new Image();
		image.caption = ""
		image.src = "assets/img/HH1_0767_2x.jpg";
		image.id = "5";
		images.push(image);

		image = new Image();
		image.caption = ""
		image.src = "assets/img/wws993782LARGE.jpg";
		image.id = "6";
		images.push(image);
		//-Small index carousel images

		this._images = images;
		return this._images;
	}


	getEventCarouselImages(eventId:string):Image[]{
		let imgs = [];
		if(eventId === "1"){
			let img = new Image();

			img = new Image();
			img.id = "EV1-2"
			img.caption = ""
			img.src = "assets/img/c8374ecf-6afb-4a5d-8df2-21aeba632bc8-copy-556x300.jpg"
			imgs.push(img);

			img = new Image();
			img.id = "EV1-3"
			img.caption = ""
			img.src = "assets/img/17.jpg"
			imgs.push(img);

			img = new Image();
			img.id = "EV1-3"
			img.caption = ""
			img.src = "assets/img/wws993782LARGE.jpg"
			imgs.push(img);
		}else if(eventId === "U9-U19"){
			let img = new Image();

			img = new Image();
			img.id = "U9-U19-1"
			img.caption = ""
			img.src = "assets/img/5778fdde37dc65e9f28dc435fc57a133.jpg"
			imgs.push(img);

			img = new Image();
			img.id = "U9-U19-2"
			img.caption = ""
			img.src = "assets/img/8e541e9f3e8ed134c56060f5686ad4bb.jpg"
			imgs.push(img);

			img = new Image();
			img.id = "U9-U19-3"
			img.caption = ""
			img.src = "assets/img/download.jpeg"
			imgs.push(img);
		}
		else if(eventId === "WDM-8ENE"){

			let img = new Image();

			img = new Image();
			img.id = "EV1-2"
			img.caption = ""
			img.src = "assets/img/WDW-Marathon-Header-Image_2-800x400.jpg"
			imgs.push(img);

			img = new Image();
			img.id = "EV1-3"
			img.caption = ""
			img.src = "assets/img/kdjhfgjkheg873982.jpg"
			imgs.push(img);

			img = new Image();
			img.id = "EV1-3"
			img.caption = ""
			img.src = "assets/img/runDisney-Cinderella-Castle.jpg"
			imgs.push(img);

		}
		else{

			let img = new Image();

			img = new Image();
			img.id = "EV1-2"
			img.caption = ""
			img.src = "assets/img/c8374ecf-6afb-4a5d-8df2-21aeba632bc8-copy-556x300.jpg"
			imgs.push(img);

			img = new Image();
			img.id = "EV1-3"
			img.caption = ""
			img.src = "assets/img/17.jpg"
			imgs.push(img);

			img = new Image();
			img.id = "EV1-3"
			img.caption = ""
			img.src = "assets/img/wws993782LARGE.jpg"
			imgs.push(img);
		}
		return imgs;
	}

	getEventRefImages(eventId:string){
		let image = new Image();
		if(eventId === "U9-U19"){
			image.caption = ""
			image.src = "assets/img/DisneyHockey_Disney2017_New_800x500.jpg";
			return image;
		}
		if(eventId === "WDM-8ENE"){
			image.caption = ""
			image.src = "assets/img/WaltDisneyWorldMarathon2020.png";
			return image;
		}
		image.caption = ""
		image.src = "assets/img/DisneySoccer_1.png";
		return image;
	}
}
