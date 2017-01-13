
import { FormGroup, Validators }              from '@angular/forms';

import { FieldBase }     from '../../shared/df-field/field-base';
import { ContactFormMetaBuilder }  from './contact.field-meta';


export interface ContactData {
  id: number;
  firstName: string;
  email: string;
  gender: string;
}

export class ContactBase {
  data: ContactData;
  constructor(data: ContactData) {
    //console.log(data);
    this.data = data;
  }
}

export class Contact extends ContactBase {

  constructor(data: ContactData) {
    super(data);
  }

  // Todo: get from a remote source of contact metadata
  // Todo: make asynchronous
  static createFields(): FieldBase<any>[] {
    let fields: FieldBase<any>[] = ContactFormMetaBuilder.fields;
    return fields.sort((a, b) => a.order - b.order);
  }

}
