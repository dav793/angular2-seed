import {Component} from '@angular/core';

@Component({
  selector: 'home-component',
  styleUrls: ['/home.css'],
  template: `
  	<div class="card">
		<div class="card-block">
			<h4 class="card-title text-sz-xxl no-margin">Welcome!</h4>
			<div class="text-sz-xs text-muted">&lt;subtitle&gt;</div>
			<br />



		</div>
		<div class="card-footer">
			<h4>&lt;footer_content&gt;</h4>
		</div>
	</div>
  `
})
export class HomeComponent {

}
