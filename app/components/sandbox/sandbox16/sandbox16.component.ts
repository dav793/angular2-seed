import { Component, OnInit }  from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { ComboInputMultiComponent } from '../sandbox16/combo-input-multi.component';
import { CustomSelectOption } from '../sandbox16/combo-input-multi.component';
import { createCustomSelectValidator } from '../sandbox16/combo-input-multi.component';

import { Country } from '../sandbox15/countries.model';


@Component({
  moduleId: module.id,
  selector: 'sandbox16',
  template: `<div class="card">
    <div class="card-block">

      <p>Sandbox 16 - custom combobox element with multiple selection</p>
      
      <p>Select as many countries as you want</p>
      <form [formGroup]="form">
        <combo-input-multi formControlName="country" [options]="opts"></combo-input-multi>
      </form>
  
      <br />
      <pre>{{ form.value | json }}</pre>
      
    </div>
  </div>`
})
export class Sandbox16Component implements OnInit {

  form: FormGroup;

  opts: CustomSelectOption[] = Country.getCountryList().map(function(c) { return {key: c['alpha-3'], label: c['name']} });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      country: [[]/*, createCustomSelectValidator(['lamb'])*/]
    });
  }

}

