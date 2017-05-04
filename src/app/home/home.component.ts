import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public form:FormGroup;

  constructor(fb:FormBuilder) {
  	this.form = fb.group({
  		"birthday": '2089-11-18',
  		"lifeExpectancy": 80
	})
  }

  ngOnInit() {
  }

	onSubmit() {
		console.log( 'form submitted', this.form )
	}

}
