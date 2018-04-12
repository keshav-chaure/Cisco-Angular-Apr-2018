import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name : 'trimText'
})
export class TrimTextPipe implements PipeTransform{
	transform(value : string, trimLength : number = 30) : string {
		return value.length <= trimLength ? value : value.substr(0,trimLength) + '...';
	}
}