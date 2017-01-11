import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute }         from '@angular/router';
import { FormGroup }              from '@angular/forms';

import { FieldBase }              from '../../../shared/df-field/field-base';
import { FieldControlService }    from '../../../shared/df-field/field-control.service';

import { ContactService }         from '../contact.service';
import { Contact }                from '../contact.model';
import { ContactFormMetaBuilder }  from '../contact.field-meta';

@Component({
  moduleId: module.id,
  selector: 'contact-view',
  templateUrl: `./contact-view.component.html`,
  styleUrls: ['./contact-view.component.css'],
  providers:  [ FieldControlService ]
})
export class ContactViewComponent implements OnInit {

  contactId: number;
  contact: Contact;
  form: FormGroup;
  fields: FieldBase<any>[] = [];

  constructor(
    private route: ActivatedRoute,
    private cs: ContactService,
    private fcs: FieldControlService
  ){
    this.contactId = parseInt(route.snapshot.params['id']);
  }

  ngOnInit() {

    this.fields = Contact.createFields();
    this.form = this.fcs.toFormGroup(this.fields);

    this.getContactById(this.contactId, () => {
      ContactFormMetaBuilder.fillForm(this.form, this.contact.data);
    });

    // subscribe to contact updates channel
    this.cs.updateChannel
      .subscribe(
        (data: any) => this.updateContactField(data.value, data.key, parseInt(data.id)),
        (err: any) => console.error(err)
    );
  }

  updateContactField(newValue: any, fieldKey: string, contactId: number) {
    if (this.contact.data.id !== contactId)
      return;
    this.contact.data[fieldKey] = newValue;
    ContactFormMetaBuilder.setFormValueByKey(newValue, fieldKey, this.form);
  }

  getContactById(id: number, callback: any) {
    this.cs.getContactById(id)
      .subscribe(
        data => {   // observer sends contact
          this.contact = data;
          callback();
        },
        err => console.log("Can't get contact. Error code: %s, URL: %s ",  err.status, err.url),
        () => {}
      );
  }

  saveField(data: {key: any, value: any}) {
    this.cs.putContactField(data, this.contactId)
      .subscribe(
        (data: any) => console.log('server response: ',data),
        (err: any) => console.error(err),
        () => {}
      );
  }

  onFieldChange(event: any) {
    console.log('saving ', event.value, ' to ', event.key);
    this.saveField(event);
  }

  onSubmit() {
    //console.log(this.form.value);
  }

}
