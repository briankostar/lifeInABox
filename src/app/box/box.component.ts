import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
	@Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
