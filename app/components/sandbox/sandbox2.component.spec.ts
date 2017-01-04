/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { Sandbox2Component } from './sandbox2.component';

describe('Sandbox2 Component: compile component to link with templateUrl', () => {

  let comp:    Sandbox2Component;
  let fixture: ComponentFixture<Sandbox2Component>;
  let de:      DebugElement;
  let el:      HTMLElement;
  let sandbox: any;

  beforeEach( async( () => {
    sandbox = sinon.sandbox.create();

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

  afterEach(function() {
    sandbox.restore();
  });

  it('should be able to get the component instance', async(() => {
    let fixture = TestBed.createComponent(Sandbox2Component);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'sandbox2 component works'`, async(() => {
    let fixture = TestBed.createComponent(Sandbox2Component);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('sandbox2 component works');
  }));

  it('should render title in a h2 tag', async(() => {
    let fixture = TestBed.createComponent(Sandbox2Component);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('sandbox2 component works');
  }));

});
