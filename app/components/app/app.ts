import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <h4>app is working</h4>
    <p>guide @ <a href="https://github.com/dav793/angular2-seed">github</a></p>
    
    <sandbox1></sandbox1>
    <sandbox2></sandbox2>
    <sandbox3></sandbox3>
    <sandbox4></sandbox4>
    <sandbox5></sandbox5>
    <sandbox6></sandbox6>
  `
})
export class AppComponent  { name = 'Angular'; }
