import { Component, OnInit } from '@angular/core';

import {Sandbox4Service} from './sandbox4.service';

@Component({
  moduleId: module.id,
  selector: 'sandbox4',
  templateUrl: './sandbox4.component.html'
})
export class Sandbox4Component implements OnInit {
  title: string = 'sandbox4 component says';
  data: string;

  constructor(private sandbox4Service: Sandbox4Service) {}

  ngOnInit() {
    this.getNumbers();
  }

  getNumbers() {
    this.sandbox4Service.getNumbers()
      .subscribe(
        data => this.data = data,
        err => console.error(err),
        () => console.log('channel closed.')
      );
  }

}
