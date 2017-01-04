/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed, inject, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/operator/mergeMap';
import 'rxjs/operator/switchMap';
import 'rxjs/add/operator/debounceTime';

import { Sandbox5Service } from './sandbox5.service';

describe('Sandbox5 Service: HTTP service calls', () => {

  let stubContacts = [
    {id: 1, name: 'Barney'},
    {id: 2, name: 'Larney'}
  ];

  let mockHttp = <Http> {
    get: (url: string) => {
      return new Observable( (observer: any) => {
        observer.next({
          json: () => { return stubContacts; }  // mock Http.get() to send the stubbed contacts instead
        });
      });
    }
  };

  it ('should get mocked users when getUsers is called', async( () => {
    let serviceUnderTest: Sandbox5Service = new Sandbox5Service(mockHttp);
    let usersObservable: Observable<any> = serviceUnderTest.getUsers();
    usersObservable.subscribe(
      data => {
        expect(data[0].name).toEqual("Barney");
      }
    );
  }));

});
