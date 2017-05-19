import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component( {
	selector   :'app-view-selector',
	templateUrl:'./view-selector.component.html',
	styleUrls  :[ './view-selector.component.css' ]
} )
export class ViewSelectorComponent implements OnInit {
	public viewType:string = 'weeks';
	public viewSelection:any[] = [
		{ value:'days', text:'Life in Days' },
		{ value:'weeks', text:'Life in Weeks' },
		{ value:'months', text:'Life in Months' }
	];

	@Output() onViewSelectionChanged = new EventEmitter<string>();

	constructor() {
	}

	ngOnInit() {
	}

	emitView() {
		console.log( 'VIEW', this.viewType );
		this.onViewSelectionChanged.emit( this.viewType )
	}

}
