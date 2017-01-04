import { Component } from '@angular/core';

@Component({
  selector: 'sandbox1',
  template: '<h1>{{title}}</h1>',
  styles: ['h1 {color: blue;}']
})
export class Sandbox1Component {
  title = 'sandbox1 component works';
}
