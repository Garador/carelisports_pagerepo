import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  constructor(private _TitleService: Title) { }

  ngOnInit() {
	  this._TitleService.setTitle("Careli Sports - Tickets");
  }

}
