import { Component, Input, forwardRef, OnChanges, OnInit } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';


export function createCounterRangeValidator(maxValue: number, minValue: number) {
  return function validateCounterRange(c: FormControl) {
    let err = {
      rangeError: {
        given: c.value,
        max: maxValue,
        min: minValue
      }
    };

    return (c.value > +maxValue || c.value < +minValue) ? err: null;
  }
}

export function validateCounterRange(c: FormControl) {
  let err = {
    rangeError: {
      given: c.value,
      max: 10,
      min: 0
    }
  };

  return (c.value > +10 || c.value < +0) ? err: null;
}

@Component({
  selector: 'counter-input',
  template: `
    <button (click)="increment()">+</button>
    {{counterValue}}
    <button (click)="decrement()">-</button>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterInputComponent),
      multi: true
    },/*,
    {
      provide: NG_VALIDATORS,
      useValue: validateCounterRange,
      multi: true
    }*/
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CounterInputComponent),
      multi: true
    }
  ]
})
export class CounterInputComponent implements ControlValueAccessor, OnChanges  {

  @Input() _counterValue: number = 0;

  @Input() counterRangeMax: number;
  @Input() counterRangeMin: number;

  validateFn: Function = function(c: any): any { return null; };

  ngOnChanges(changes: any) {
    if (changes.counterRangeMin || changes.counterRangeMax) {
      //this.validateFn = createCounterRangeValidator(this.counterRangeMax, this.counterRangeMin);
    }
  }

  validate(c: FormControl) {
    return this.validateFn(c);
  }

  get counterValue() {
    return this._counterValue;
  }

  set counterValue(val) {
    this._counterValue = val;
    this.propagateChange(this._counterValue);
  }

  increment() {
    this.counterValue++;
  }

  decrement() {
    this.counterValue--;
  }

  writeValue(value: any) {
    if (value !== undefined) {
      this.counterValue = value;
    }
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  propagateChange = (_: any) => {};

}
