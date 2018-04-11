import { Component } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';


@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{

	bugs : Bug[] = [];

	/*bugOperations : BugOperationsService = null;

	constructor(_bugOperations : BugOperationsService){
		this.bugOperations = _bugOperations
	}*/

	constructor(private bugOperations : BugOperationsService){
		
	}

	onCreateClick(bugName : string){
		let newBug : Bug = this.bugOperations.createNew(bugName);
		this.bugs.push(newBug);
	}

	onBugNameClick(bugToToggle : Bug){
		this.bugOperations.toggle(bugToToggle);
	}

	onRemoveClosedClick(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	getClosedBugCount(){
		return this.bugs.reduce((prevResult, bug) => bug.isClosed ? ++prevResult : prevResult, 0);
	}
}