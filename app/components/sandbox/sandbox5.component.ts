import { Component, OnInit } from '@angular/core';

import {Sandbox5Service} from './sandbox5.service';

@Component({
  moduleId: module.id,
  selector: 'sandbox5',
  templateUrl: './sandbox5.component.html'
})
export class Sandbox5Component implements OnInit {
  title: string = 'sandbox5 component says';
  data: string;

  users: any;
  errorMsg: any;

  constructor(private sandbox5Service: Sandbox5Service) {}

  ngOnInit() {
    this.getUsers();
  }

  public getUsers() {
    this.sandbox5Service.getUsers()
      .subscribe(
        users => this.users = users,
        error =>  this.errorMsg = <any>error);
  }

}
