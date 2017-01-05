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
  let sandbox: any;
  let sandbox3ServiceStub: any;

  beforeEach(async(() => {
    // stub sandbox3 service for test purposes
    sandbox3ServiceStub = {
      data: 'this data comes from the stubbed service',
      getSynchronousData: function() { return this.data; }
    };

    TestBed.configureTestingModule({
      declarations: [ Sandbox3Component ],
      providers:    [ {provide: Sandbox3Service, useValue: sandbox3ServiceStub } ]
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

  it('the injected service should contain "this data comes from the stubbed service" in data', () => {
    let service = fixture.debugElement.injector.get(Sandbox3Service);
    expect(service.data).toEqual("this data comes from the stubbed service");
  });

});
