import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'sandbox6',
  template: `<div class="card">
    <div class="card-block">

      <p>Sandbox 6 Component: router-outlet container</p>
      
      <!--Template router navigation-->
      <!--<a routerLink="/" routerLinkActive="active">Navigate to Sandbox6a</a>|-->
      <!--<a routerLink="/sandbox6b" routerLinkActive="active">Navigate to Sandbox6b</a>-->
      
      <!--Programatic router navigation-->
      <a (click)="onClick('/')">Navigate to Sandbox6a</a>|
      <a (click)="onClick('/sandbox6b')">Navigate to Sandbox6b</a>
      
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

