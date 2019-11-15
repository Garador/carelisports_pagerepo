import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Event } from 'src/app/common/classes/event';

@Injectable({
  providedIn: 'root'
})
export class FormatService {

  constructor() { }

  getFormattedDates(event:Event, mode?:number){
	  let startDate = moment(event.start_date);
	  let endDate = moment(event.end_date);
	  let format = "Do MMM YYYY";
	  let string = startDate.format(format) + (endDate.get('DDD') === startDate.get('DDD') ? "" : " - "+endDate.format(format));
	  return string;
  }
}
