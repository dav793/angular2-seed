import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <h1>App Component works</h1>
    <sandbox1></sandbox1>
    <sandbox2></sandbox2>
    <sandbox3></sandbox3>
    <sandbox4></sandbox4>
    <sandbox5></sandbox5>
  `
})
export class AppComponent  { name = 'Angular'; }
