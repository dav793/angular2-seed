
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { FieldBase }        from './field-base';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  moduleId: module.id,
  selector: 'df-field',
  templateUrl: `./df-field.component.html`,
  styles: [`
    input, select {width: 100%;} 
    .errorMessage {    
      font-size: 12px;
      color: #ff3333;}
  `]
})
export class DfFieldComponent {

  @Input() field: FieldBase<any>;
  @Input() form: FormGroup;

  @Output() onChanged = new EventEmitter<any>();

  requiredMinLength: number;
  requiredMaxLength: number;

  change(field: FieldBase<any>, form: FormGroup) {
    let formField = form.get(field.key);
    if (!formField.valid)
      return;

    this.onChanged.emit({key: field.key, value: formField.value});
  }

  get isValid() {
    return this.form.controls[this.field.key].valid;
  }

  get isRequired() {
    let errors: any = this.form.controls[this.field.key].errors;
    if (!errors) { return true; }

    if (errors.required)
      return false;

    return true;
  }

  get isAlphaSymbols() {
    let errors: any = this.form.controls[this.field.key].errors;
    if (!errors) { return true; }

    if (errors.pattern) {
      if (errors.pattern.requiredPattern === "^[a-zA-Z0-9_@ .]*$")
        return false;
    }
    return true;
  }

  get isMinLength() {
    let errors: any = this.form.controls[this.field.key].errors;
    if (!errors) { return true; }

    if (errors.minlength) {
      this.requiredMinLength = errors.minlength.requiredLength;
      return false;
    }

    return true;
  }

  get isMaxLength() {
    let errors: any = this.form.controls[this.field.key].errors;
    if (!errors) { return true; }

    if (errors.maxlength) {
      this.requiredMaxLength = errors.maxlength.requiredLength;
      return false;
    }

    return true;
  }

}
