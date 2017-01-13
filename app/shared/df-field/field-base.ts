import { Validators, ValidatorFn } from '@angular/forms';

export class FieldBase<T> {

  value: T;
  key: string;
  label: string;
  required: boolean;
  validators: ValidatorFn[];
  order: number;
  controlType: string;

  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    validators: ValidatorFn[],
    order?: number,
    controlType?: string
  }) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.validators = options.validators,
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
  }

}