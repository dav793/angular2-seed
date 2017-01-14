import { Component, OnInit }  from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { SelectInputComponent } from './select-input.component';
import { CustomSelectOption } from './select-input.component';
import { createCustomSelectValidator } from './select-input.component';


@Component({
  moduleId: module.id,
  selector: 'sandbox14',
  template: `<div class="card">
    <div class="card-block">

      <p>Sandbox 14 - custom selectbox element</p>
      
      <p>Q: Mary had a little _____ ?</p>
      <form [formGroup]="form">
        <select-input formControlName="selected" [options]="opts"></select-input>
      </form>
      <p *ngIf="!form.valid && form.dirty">hmm... that doesn't sound right</p>
      <p *ngIf="form.valid">why yes, yes she did!</p>
  
      <br />
      <pre>{{ form.value | json }}</pre>
      
    </div>
  </div>`
})
export class Sandbox14Component implements OnInit {

  form: FormGroup;

  opts: CustomSelectOption[] = [
    {key: 'goat', label: 'Goat'},
    {key: 'lamb', label: 'Lamb'},
    {key: 'llama', label: 'Llama'},
    {key: 'debt', label: 'Debt problem'}
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      selected: [undefined, createCustomSelectValidator(['lamb'])]      // start with no value..
      //selected: ['lamb', createCustomSelectValidator(['lamb'])]       // or start with 'lamb'
    });
  }

}

