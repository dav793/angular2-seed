
import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';

import { FieldBase } from './field-base';

@Injectable()
export class FieldControlService {
  constructor() { }

  toFormGroup(fields: FieldBase<any>[] ) {
    let group: any = {};

    fields.forEach(field => {
      let validators: ValidatorFn[] = field.validators;
      if (field.required) { validators.push(Validators.required) }

      group[field.key] = new FormControl(field.value || '', validators || []);
    });
    return new FormGroup(group);
  }
}
