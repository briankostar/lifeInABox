import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'box-row',
  templateUrl: './box-row.component.html',
  styleUrls: ['./box-row.component.css']
})
export class BoxRowComponent implements OnInit {
	@Input() year: number;
	@Input() age: number;
	@Input() numOfBoxes: number;
	public numOfBoxesArray: number[];

  constructor() { }

  ngOnInit() {
	  this.numOfBoxesArray = Array(this.numOfBoxes).fill(1).map((val, index)=>{
		  return index;
	  });
  }

}
