import { Component, OnInit } from '@angular/core';

import {Sandbox3Service} from './sandbox3.service';

@Component({
  moduleId: module.id,
  selector: 'sandbox3',
  templateUrl: './sandbox3.component.html',
  styleUrls: ['./sandbox3.component.css']
})
export class Sandbox3Component implements OnInit {
  title: string = 'sandbox 3: working';
  data: string;

  constructor(private sandbox3Service: Sandbox3Service) {}

  ngOnInit() {
    this.data = this.sandbox3Service.getSynchronousData();
  }

}
