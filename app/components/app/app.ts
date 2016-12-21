import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
  	<app-navbar></app-navbar>
  	<router-outlet></router-outlet>
  `
  //templateUrl: './app/app.component.html',
  //styleUrls: ['./app/app.component.css']
})
export class AppComponent  { name = 'Angular'; }
