import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sandbox8a',
  template: `<div class="wrapper">
    <p>Sandbox 8a - Child Component</p>
    
    <p>{{data}}</p>
    
  </div>`,
  styles: ['.wrapper { border: 1px dashed #424242; padding: 10px; }']
})
export class Sandbox8aComponent {

  data: string;

  constructor() {}

  update() {
    this.data = Math.floor(Math.random() * 1000).toString();
  }

}

