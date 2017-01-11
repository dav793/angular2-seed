
import { Validators, FormGroup } from '@angular/forms';

import { FieldBase }     from '../../shared/df-field/field-base';
import { FieldDropdown } from '../../shared/df-field/field-dropdown';
import { FieldTextbox }  from '../../shared/df-field/field-textbox';

import { ContactData }  from './contact.model';

export class ContactFormMetaBuilder {
  constructor() {}

  static fillForm(form: FormGroup, data: ContactData) {
    for(let key in data) {
      if (form.get(key)) {
        form.get(key).setValue(data[key]);
      }
    };
  }

  static setFormValueByKey(value: any, key: string, form: FormGroup) {
    if (!form.get(key))
      return;
    form.get(key).setValue(value);
  }

  static get fields(): FieldBase<any>[] {
    return [
      new FieldTextbox({
        key: 'firstName',
        label: 'First name',
        required: true,
        order: 1,
        validators: [
          Validators.required,
          Validators.pattern("[a-zA-Z0-9_@ .]*"),
          Validators.minLength(2),
          Validators.maxLength(128)]
      }),
      new FieldTextbox({
        key: 'email',
        label: 'Email',
        type: 'email',
        order: 2,
        validators: [
          Validators.minLength(4),
          Validators.maxLength(64)]
      }),
      new FieldDropdown({
        key: 'gender',
        label: 'Gender',
        options: [
          {key: 'female', value: 'Female'},
          {key: 'male', value: 'Male'}
        ],
        order: 3
      })
  ]};
}
