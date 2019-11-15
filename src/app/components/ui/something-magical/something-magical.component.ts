import { Component, OnInit, Input } from "@angular/core";
import { Image } from "src/app/common/classes/image";

@Component({
	selector: "app-something-magical",
	templateUrl: "./something-magical.component.html",
	styleUrls: ["./something-magical.component.scss"]
})
export class SomethingMagicalComponent implements OnInit {
	@Input()
	smallCarouselImages: Image[] = [];

	constructor() { }

	ngOnInit() { }
}
