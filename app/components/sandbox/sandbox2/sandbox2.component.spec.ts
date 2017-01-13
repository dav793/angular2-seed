/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { Sandbox2Component } from './sandbox2.component';

describe('Sandbox2 Component: compile component with templateUrl', () => {

  let comp:    Sandbox2Component;
  let fixture: ComponentFixture<Sandbox2Component>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach( async( () => {
    TestBed.configureTestingModule({
      declarations: [
        Sandbox2Component
      ],
    });
    TestBed.compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(Sandbox2Component);
        comp = fixture.componentInstance;
      });
  }));

  it(`should be able to get the component instance`, async(() => {
    expect(comp).toBeTruthy();
  }));

  it(`should have as title 'sandbox2: working'`, async(() => {
    expect(comp.title).toEqual('sandbox 2: working');
  }));

  it(`should render title in a p tag`, async(() => {
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('sandbox 2: working');
  }));

});
