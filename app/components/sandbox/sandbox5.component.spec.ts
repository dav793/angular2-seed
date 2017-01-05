/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { HttpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
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
      imports:      [ HttpModule ],
      providers:    [ { provide: Sandbox5Service, useValue: sandbox5ServiceStub } ]
    });
    TestBed.compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(Sandbox5Component);
        comp = fixture.componentInstance;
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

  /*it('should xxxx', async( () => {
    fixture.detectChanges();

    let service = fixture.debugElement.injector.get(Sandbox5Service);
    let comp = fixture.debugElement.injector.get(Sandbox5Component);
    //console.log(comp);

    //let thing = new Sandbox5Component(service);
    //console.log(thing);

    console.log(service);

    expect(true).toBe(true);
  }));*/

  /*it('should zzz', () => {
    fixture.detectChanges();

    let service = fixture.debugElement.injector.get(Sandbox5Service);
    let comp = fixture.debugElement.injector.get(Sandbox5Component);
    //comp = fixture.debugElement.componentInstance;
    console.log(comp);

    expect(true).toEqual(true);
  });*/

});
