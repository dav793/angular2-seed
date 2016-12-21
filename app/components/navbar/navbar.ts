import {Component} from '@angular/core';
import {Routes, Router} from '@angular/router';

/*export class MenuOptions {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public description: string,
    public categories: string[]) {
  }
}*/

@Component({
	selector: 'app-navbar',
	styleUrls: ['app/components/navbar/navbar.css'],
	templateUrl: 'app/components/navbar/navbar.html'
})
export default class AppNavbarComponent {

	options: Object[] = [];

	constructor(private _router: Router) {
		this.options = [
			{label: "Contacts", route: "/contacts", options: [
				{label: "All Contacts"},
				{label: "Last Modified"}]},
			{label: "Finances", route: "/finances"}
		];
	}

}