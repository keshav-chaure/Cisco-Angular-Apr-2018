import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugServerService } from './bugServer.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BugOperationsService{

	constructor(private bugServer : BugServerService){

	}
	createNew(bugName : string) : Observable<Bug> {
		let newBugData : Bug = {
			id : 0,
			name : bugName,
			isClosed : false,
			createdAt : new Date(),
			desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		};
		return this.bugServer.add(newBugData);
	}
	toggle(bugToToggle : Bug) : Observable<Bug> {
		let toggledBug = {...bugToToggle, isClosed : !bugToToggle.isClosed};
		return this.bugServer.update(toggledBug);

	}
	remove(bug : Bug) : Observable<any>{
		return this.bugServer.remove(bug);
	}
	getAll() : Observable<Bug[]> {
		return this.bugServer.getAll();
	}
}