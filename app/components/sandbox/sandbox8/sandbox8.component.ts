import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sandbox8',
  template: `<div class="card">
    <div class="card-block">

      <p>Sandbox 8 - Parent Component</p>
      
      <!-- calling child component's method 'update' -->
      <button (click)="myChild.update()" type="submit">click me</button>
      
      <br /><br />
      <sandbox8a #myChild></sandbox8a>
      
    </div>
  </div>`,
  styles: ['.card { }']
})
export class Sandbox8Component {}

