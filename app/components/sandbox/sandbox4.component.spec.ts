/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/operator/mergeMap';
import 'rxjs/operator/switchMap';
import 'rxjs/add/operator/debounceTime';

import { Sandbox4Component } from './sandbox4.component';
import { Sandbox4Service } from './sandbox4.service';

describe('Sandbox4 Component: receiving data from service through observables', () => {

  let comp:    Sandbox4Component;
  let fixture: ComponentFixture<Sandbox4Component>;
  let de:      DebugElement;
  let el:      HTMLElement;
  let sandbox: any;
  let sandbox3ServiceStub: any;

  beforeEach(async(() => {
    // stub sandbox4 service for test purposes
    let sandbox4ServiceStub = {
      getNumbers: function () {
        return new Observable(function(observer: any) {
          observer.next(555);
        });
      }
    };

    TestBed.configureTestingModule({
      declarations: [ Sandbox4Component ],
      providers:    [ {provide: Sandbox4Service, useValue: sandbox4ServiceStub } ]
    });
    TestBed.compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(Sandbox4Component);
        comp = fixture.componentInstance;
      });
  }));

  it('should be able to get the component instance', () => {
    comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });

  it('should be able to get the injected service', () => {
    let service = fixture.debugElement.injector.get(Sandbox4Service);
    console.log(service);
    console.log(comp);

    let spy = spyOn(service, 'getNumbers')
      .and.returnValue(new Observable((observer: any) => {
        observer.next(555);
      }));
    console.log(spy);

    expect(service).toBeTruthy();
  });

  it('should display "555" inside the DOM elem with class "data"', () => {
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('.data'));
    el = de.nativeElement;
    let innerHtml = el.innerHTML;

    expect(innerHtml).toEqual('555');
  });

});
