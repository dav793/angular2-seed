import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sandbox6',
  template: `<div class="card">
    <div class="card-block">

      <p>Sandbox 6 Component: router-outlet container</p>
      
      <a routerLink="/" routerLinkActive="active">Navigate to Sandbox7</a>|
      <a routerLink="/sandbox8" routerLinkActive="active">Navigate to Sandbox8</a>
      <router-outlet></router-outlet>
    </div>
  </div>`
})
export class Sandbox6Component implements OnInit {

  constructor() {}

  ngOnInit() {}

}

