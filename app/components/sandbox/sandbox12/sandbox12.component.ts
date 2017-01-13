import { Component }  from '@angular/core';

import { CounterInputComponent } from './counter-input.component';


@Component({
  moduleId: module.id,
  selector: 'sandbox12',
  template: `<div class="card">
    <div class="card-block">

      <p>Sandbox 12 - custom FormControl elements</p>
      
      <!--template driven form-->
      <form #form="ngForm">
        <counter-input name="counter" [ngModel]="outerCounterValue"></counter-input>
        <p>ngModel value: {{outerCounterValue}}</p>
      </form>
      
      <!--model driven form-->
      <!--<form [formGroup]="form">-->
        <!--<counter-input formControlName="counter"></counter-input>-->
      <!--</form>-->
      
      <pre>{{ form.value | json }}</pre>
      
    </div>
  </div>`
})
export class Sandbox12Component {

  outerCounterValue: number = 0;

  constructor() {}

}

