/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { Sandbox3Component } from './sandbox3.component';
import { Sandbox3Service } from './sandbox3.service';

describe('Sandbox3 Component: call synchronous function on service', () => {

  let comp:    Sandbox3Component;
  let fixture: ComponentFixture<Sandbox3Component>;
  let de:      DebugElement;
  let el:      HTMLElement;
  let sandbox3ServiceStub: any;

  beforeEach(async(() => {
    sandbox3ServiceStub = {   // create a stub of service, to inject in the component under test in place of the real service
      data: 'this data comes from the stubbed service',
      getSynchronousData: function() { return this.data; }
    };

    TestBed.configureTestingModule({
      declarations: [ Sandbox3Component ],
      providers:    [ {provide: Sandbox3Service, useValue: sandbox3ServiceStub } ]  // provide the stubbed service
    });
    TestBed.compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(Sandbox3Component);
        comp = fixture.componentInstance;
      });
  }));

  it('should be able to get the component instance', () => {
    comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });

  it('should be able to get the injected service', () => {
    let service = fixture.debugElement.injector.get(Sandbox3Service);
    expect(service).toBeTruthy();
  });

  it('the injected service should contain "this data comes from the stubbed service"', () => {
    let service = fixture.debugElement.injector.get(Sandbox3Service);
    expect(service.data).toEqual("this data comes from the stubbed service");
  });

});
