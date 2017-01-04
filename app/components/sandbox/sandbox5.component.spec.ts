/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/operator/mergeMap';
import 'rxjs/operator/switchMap';
import 'rxjs/add/operator/debounceTime';

import { Sandbox5Component } from './sandbox5.component';
import { Sandbox5Service } from './sandbox5.service';

describe('Sandbox5 Component: HTTP service calls', () => {

  let comp:    Sandbox5Component;
  let fixture: ComponentFixture<Sandbox5Component>;
  let de:      DebugElement;
  let el:      HTMLElement;
  let sandbox: any;
  let sandbox5ServiceStub: any;

  beforeEach(async(() => {

    // stub service for test purposes
    let sandbox5ServiceStub = {
      getUsers (): Observable<any[]> {
        return new Observable((observer: any) => {
          observer.next([{
            id: 1,
            name: "Leanne Graham"
          }]);
        });
      }
    };

    TestBed.configureTestingModule({
      declarations: [ Sandbox5Component ],
      providers:    [ {provide: Sandbox5Service, useValue: sandbox5ServiceStub } ]
    });
    TestBed.compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(Sandbox5Component);
        comp = fixture.componentInstance;
        console.log(Sandbox5Component);
      });
  }));

  it('should be able to get the component instance', () => {
    comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });

  it('should be able to get the injected service', () => {
    let service = fixture.debugElement.injector.get(Sandbox5Service);
    expect(service).toBeTruthy();
  });

  /*it('should zzz', () => {
    fixture.detectChanges();

    let service = fixture.debugElement.injector.get(Sandbox5Service);
    let comp = fixture.debugElement.injector.get(Sandbox5Component);
    //comp = fixture.debugElement.componentInstance;
    console.log(comp);

    expect(true).toEqual(true);
  });*/

});
