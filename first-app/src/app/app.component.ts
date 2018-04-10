import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentTime = Date();
  timerId = 0;

  constructor(){

  }

  stopTimer(){
  	clearInterval(this.timerId);
  }

  ngOnInit(){
  	  this.timerId = setInterval(() => this.currentTime = Date())
  }
}
