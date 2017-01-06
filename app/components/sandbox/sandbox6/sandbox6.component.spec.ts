/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';

import { Sandbox6Component } from './sandbox6.component';
import { Sandbox7Component } from './sandbox7.component';
import { Sandbox8Component } from './sandbox8.component';

class RouterStub {
  navigate(url: string) { return url; }
}

describe('Sandbox6 Component: Router navigation', () => {

  let comp:    Sandbox6Component;
  let fixture: ComponentFixture<Sandbox6Component>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sandbox6Component, Sandbox7Component, Sandbox8Component ],
      providers: [ { provide: Router, useClass: RouterStub } ],
      imports: [
        RouterTestingModule.withRoutes(
          [{path: '', component: Sandbox7Component}, {path: 'sandbox8', component: Sandbox8Component}]
        )
      ]
    });
    TestBed.compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(Sandbox6Component);
        comp = fixture.componentInstance;
      });
  }));

  it('should call router.navigate with passed argument when onClick is called', inject([Router], (router: Router) => {
    let navigateSpy = sinon.spy(router, "navigate");

    comp.onClick('url');
    navigateSpy.restore();
    
    sinon.assert.calledWith(navigateSpy, ['url']);
  }));

});
