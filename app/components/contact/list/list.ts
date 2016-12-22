import {Component} from '@angular/core';
import {Contact, ContactService} from '../../../services/contact';

@Component({
  selector: 'contact-list',
  styleUrls: ['/list.css'],
  templateUrl: 'app/components/contact/list/list.html'
})
export class ContactListComponent {
	contacts: Contact[] = [];

	constructor(private contactService: ContactService) {
		this.contacts = this.contactService.getContacts();
	}
}
