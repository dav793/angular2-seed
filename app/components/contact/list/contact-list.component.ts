import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute }         from '@angular/router';

import { ContactService }         from '../contact.service';
import { Contact }                from '../contact.model';

@Component({
  moduleId: module.id,
  selector: 'contact-list',
  templateUrl: `./contact-list.component.html`,
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];

  constructor(
    private route: ActivatedRoute,
    private cs: ContactService
  ){}

  ngOnInit() {

    /*this.fields = Contact.createFields();
    this.form = this.fcs.toFormGroup(this.fields);*/

    this.getContacts(() => {
      //console.log('contacts loaded');
    });

  }

  getContacts(callback: any) {
    this.cs.getContacts()
      .subscribe(
        data => {   // observer sends contact
          this.contacts = data;
          callback();
        },
        err => console.log("Can't get contacts. Error code: %s, URL: %s ",  err.status, err.url),
        () => {}
      );
  }

}
