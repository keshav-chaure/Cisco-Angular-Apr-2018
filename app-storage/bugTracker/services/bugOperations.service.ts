import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugStorageService } from './bugStorage.service';

@Injectable()
export class BugOperationsService{

	constructor(private bugStorage : BugStorageService){

	}
	createNew(bugName : string) : Bug {
		let newBugData : Bug = {
			id : 0,
			name : bugName,
			isClosed : false,
			createdAt : new Date(),
			desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		};
		let newBug = this.bugStorage.save(newBugData);
		return newBug;
	}
	toggle(bugToToggle : Bug) : Bug {
		let toggledBug = {...bugToToggle, isClosed : !bugToToggle.isClosed};
		this.bugStorage.save(toggledBug);
		return toggledBug;
	}
	remove(bug : Bug){
		this.bugStorage.remove(bug);
	}
	getAll() : Bug[] {
		return this.bugStorage.getAll();
	}
}