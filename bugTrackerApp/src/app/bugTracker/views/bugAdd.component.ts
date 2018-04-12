import { Bug } from '../models/Bug';
import { Component, Output, EventEmitter } from '@angular/core';

import { BugOperationsService } from '../services/bugOperations.service';

@Component({
	selector : 'app-bug-add',
	template : `
		<section class="add">
			<label for="">Bug Name :</label>
			<input type="text" #txtBugName>
			<input type="button" value="Create" (click)="onCreateClick(txtBugName.value)">
		</section>
	`
})
export class BugAddComponent{

	@Output()
	create : EventEmitter<Bug> = new EventEmitter<Bug>();

	constructor(private bugOperations : BugOperationsService){

	}
	onCreateClick(bugName : string){
		let newBug : Bug = this.bugOperations.createNew(bugName);
		this.create.emit(newBug);
	}
}
