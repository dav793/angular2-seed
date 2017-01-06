import { Component } from '@angular/core';

@Component({
  selector: 'sandbox1',
  template: `<div class="card">
    <div class="card-block">
      <p>{{title}}</p>
    </div>
  </div>`,
  styles: ['p {color: blue;}']
})
export class Sandbox1Component {
  title = 'sandbox 1: working';

  myFunc() {
    return 'yeeah';
  }
}
