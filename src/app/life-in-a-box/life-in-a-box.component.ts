import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'life-in-a-box',
  templateUrl: './life-in-a-box.component.html',
  styleUrls: ['./life-in-a-box.component.css']
})
export class LifeInABoxComponent implements OnInit {
	public time: string;
	public numOfBoxRows: number;
	public numOfBoxRowsArray: number[];
	public numOfBoxes: number;

  constructor() {
  }

  ngOnInit() {
  	this.time  = 'weeks';
  	this.numOfBoxRows = 90;
  	this.numOfBoxRowsArray = Array(this.numOfBoxRows).fill(1).map((val, index)=>{
  		return index + 1;
	});
  	if(this.time === 'weeks'){
  		this.numOfBoxes = 52;
	}
  }

}
