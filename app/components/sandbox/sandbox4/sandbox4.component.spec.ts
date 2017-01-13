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

describe('Sandbox4 Component: fetch data from a service through observables', () => {

  let comp:    Sandbox4Component;
  let fixture: ComponentFixture<Sandbox4Component>;
  let de:      DebugElement;
  let el:      HTMLElement;
  let sandbox3ServiceStub: any;

  beforeEach(async(() => {

    // stubbed service for test purposes
    let sandbox4ServiceStub = {

      getNumbers: function () {
        return new Observable(function(observer: any) {
          observer.next(555);
        });
      },

      getLetter: function() {
        return 'A';
      }

    };

    // set up a test bed and compile the component under test inside of it
    TestBed.configureTestingModule({
      declarations: [ Sandbox4Component ],
      providers:    [ {provide: Sandbox4Service, useValue: sandbox4ServiceStub } ] // provide the stub service in place of the real one
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

  it('should call component method getNumbers and track interactions with a sinon spy', () => {
    let getNumbersSpy = sinon.spy(comp, "getNumbers");

    comp.getNumbers();
    getNumbersSpy.restore();

    sinon.assert.calledOnce(getNumbersSpy);

    /*let spy = spyOn(service, 'getNumbers')
      .and.returnValue(new Observable((observer: any) => {
        observer.next(555);
      }));*/
  });

  it('should set data property to 555 after calling getNumbers with stubbed service', async(() => {
    comp.getNumbers();
    expect(comp.data).toEqual(555);
  }));

  it('should display "555" inside the DOM elem with class "data"', () => {
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('.data'));
    el = de.nativeElement;
    let innerHtml = el.innerHTML;

    expect(innerHtml).toEqual('555');
  });

  it('calling component method getNumbers should call getNumbers on service', async(() => {
    let service = fixture.debugElement.injector.get(Sandbox4Service);
    let getNumbersSpy = sinon.spy(service, "getNumbers");

    comp.getNumbers();
    getNumbersSpy.restore();
    sinon.assert.calledOnce(getNumbersSpy);
  }));

});
