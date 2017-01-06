import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'sandbox6',
  template: `<div class="card">
    <div class="card-block">

      <p>Sandbox 6 Component: router-outlet container</p>
      
      <!--Template router navigation-->
      <!--<a routerLink="/" routerLinkActive="active">Navigate to Sandbox7</a>|-->
      <!--<a routerLink="/sandbox8" routerLinkActive="active">Navigate to Sandbox8</a>-->
      
      <!--Programatic router navigation-->
      <a (click)="onClick('/')">Navigate to Sandbox7</a>|
      <a (click)="onClick('/sandbox8')">Navigate to Sandbox8</a>
      
      <router-outlet></router-outlet>
    </div>
  </div>`
})
export class Sandbox6Component implements OnInit {

  constructor(private router: Router) {}

  onClick = function(route: string) {
    this.router.navigate([route]);
  };

  ngOnInit() {}

}

