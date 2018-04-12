import { Pipe, PipeTransform } from '@angular/core';
import { Bug } from '../models/Bug';


@Pipe({
	name : 'closedCount',
	pure : true
})
export class ClosedCountPipe implements PipeTransform{
	transform(list : Bug[] = []) : number{
		console.log('closedCountPipe.transform triggered');
		return list.reduce((prevResult, bug) => bug.isClosed ? ++prevResult : prevResult, 0);
	}
}
