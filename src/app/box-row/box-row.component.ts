import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'box-row',
  templateUrl: './box-row.component.html',
  styleUrls: ['./box-row.component.css']
})
export class BoxRowComponent implements OnInit, OnChanges {
	@Input() year: number;
	@Input() age: number;
	@Input() numOfBoxes: number;
	public numOfBoxesArray: number[];
	public currentDate: Date;
	public currentWeek: number;

  constructor() { }

  ngOnInit() {
	  this.numOfBoxesArray = Array(this.numOfBoxes).fill(1).map((val, index)=>{
		  return index;
	  });
	  this.currentDate = new Date();
	  this.currentWeek = this.getWeek();
	  // console.log('this.currentDate', this.getWeek());
  }

	ngOnChanges(changes: any) {
  		console.log('input on box-row changed:', changes);
	}


  	//NOTE: there may be error as # weeks in a year can technically be 52-53 depending on which day Jan 1st is. So.. there could be 53 week boxes /year.
	getWeek() {
		var date = new Date();
		date.setHours(0, 0, 0, 0);
		// Thursday in current week decides the year.
		date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
		// January 4 is always in week 1.
		var week1 = new Date(date.getFullYear(), 0, 4);
		// Adjust to Thursday in week 1 and count number of weeks from date to week1.
		return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
				- 3 + (week1.getDay() + 6) % 7) / 7);
	}

	getDay(){

	}

	getMonth(){
		return new Date().getMonth(); //+1?
	}



}
