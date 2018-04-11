import { Component } from '@angular/core';
import { Bug } from './models/Bug';


@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{

	bugs : Bug[] = [];

	onCreateClick(bugName : string){
		let newBug : Bug = {
			name : bugName,
			isClosed : false
		};
		this.bugs.push(newBug);
	}

	onBugNameClick(bugToToggle : Bug){
		bugToToggle.isClosed = !bugToToggle.isClosed;
	}
}