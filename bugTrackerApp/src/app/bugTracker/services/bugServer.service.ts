import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Bug } from '../models/Bug';
import 'rxjs/add/operator/map';

@Injectable()
export class BugServerService{
	private baseUrl : string = 'http://localhost:3000/bugs';

	constructor(private http : Http){

	}
	getAll() : Observable<Bug[]>{
		return this.http
			.get(this.baseUrl)
			.map(response => response.json())
	}
	add(bugData : Bug) : Observable<Bug> {
		return this.http
			.post(this.baseUrl, bugData)
			.map(response => response.json())
	}
	update(bugData : Bug) : Observable<Bug> {
		return this.http
			.put(`${this.baseUrl}/${bugData.id}`, bugData)
			.map(response => response.json())
	}
	remove(bugData : Bug) : Observable<any>{
		return this.http
			.delete(`${this.baseUrl}/${bugData.id}`)
			.map(response => response.json())
	}
}