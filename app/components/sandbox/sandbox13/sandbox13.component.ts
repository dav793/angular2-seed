import { Component, OnInit }  from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CounterInputComponent } from '../sandbox12/counter-input.component';
import { validateCounterRange } from '../sandbox12/counter-input.component';
import { createCounterRangeValidator } from '../sandbox12/counter-input.component';


@Component({
  moduleId: module.id,
  selector: 'sandbox13',
  template: `<div class="card">
    <div class="card-block">

      <p>Sandbox 13 - custom FormControl elements with reactive forms</p>
      
      <form [formGroup]="form">
        <counter-input formControlName="counter" [counterRangeMax]="10" [counterRangeMin]="0"></counter-input>
      </form>
      <p *ngIf="!form.valid">Counter is invalid!</p>
  
      <pre>{{ form.value | json }}</pre>
      
    </div>
  </div>`
})
export class Sandbox13Component implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      //counter: [5]
      //counter: [5, validateCounterRange]
      counter: [5, createCounterRangeValidator(10, 0)]
    });
  }

}

