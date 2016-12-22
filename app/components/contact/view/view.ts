import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Contact, ContactService} from '../../../services/contact';

@Component({
  selector: 'contact-view',
  styleUrls: ['/view.css'],
  templateUrl: 'app/components/contact/view/view.html'
})
export class ContactViewComponent {
	contactID: number;
	contact: Contact;

	constructor(route: ActivatedRoute, private contactService: ContactService) {
		this.contactID = parseInt(route.snapshot.params['id']); // receiving the current value
		this.contact = this.contactService.getContactById(this.contactID);
	}
}
