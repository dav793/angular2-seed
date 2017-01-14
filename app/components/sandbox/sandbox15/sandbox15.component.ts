import { Component, OnInit }  from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { ComboInputComponent } from './combo-input.component';
import { CustomSelectOption } from './combo-input.component';
import { createCustomSelectValidator } from './combo-input.component';

import { Country } from './countries.model';


@Component({
  moduleId: module.id,
  selector: 'sandbox15',
  template: `<div class="card">
    <div class="card-block">

      <p>Sandbox 15 - custom combobox element with search filter</p>
      
      <p>Select a country (type to search)</p>
      <form [formGroup]="form">
        <combo-input formControlName="country" [options]="opts"></combo-input>
      </form>
  
      <br />
      <pre>{{ form.value | json }}</pre>
      
    </div>
  </div>`
})
export class Sandbox15Component implements OnInit {

  form: FormGroup;

  opts: CustomSelectOption[] = Country.getCountryList().map(function(c) { return {key: c['alpha-3'], label: c['name']} });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      country: ['CRI'/*, createCustomSelectValidator(['lamb'])*/]
    });
  }

}

