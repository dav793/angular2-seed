import {Component} from '@angular/core';
import {Contact, ContactService} from '../../services/contact';

@Component({
  selector: 'home-component',
  styleUrls: ['/home.css'],
  template: `
  	<div class="card">
		<div class="card-block">
			<h4 class="card-title text-sz-xxl no-margin">Contacts</h4>
			<div class="text-sz-xs text-muted">&lt;subtitle&gt;</div>
			<br />

			<div class="row">
				<div class="input-field col s6">
		          	<input id="last_name" type="text" class="validate">
		          	<label for="last_name">Last Name</label>
		        </div>		
	        </div>
			<br />

			<table class="table table-hover table-outline">
				<thead class="thead-default">
					<tr>
						<th>Name</th>
					</tr>
				</thead>
				<tbody>
					<tr *ngFor="let contact of contacts">
						<td>
							<div><a [routerLink]="['/contacts', contact.id]">{{contact.name.toString()}}</a></div>
							<div class="text-sz-xs text-muted">{{contact.birthdate.toString()}}</div>
						</td>
					</tr>
				</tbody>
			</table>

		</div>
		<div class="card-footer">
			<h4>&lt;footer_content&gt;</h4>
		</div>
	</div>
  `
})
export class HomeComponent {
	contacts: Contact[] = [];

	constructor(private contactService: ContactService) {
		this.contacts = this.contactService.getContacts();
	}
}
