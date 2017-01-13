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

import { Sandbox3Service } from './sandbox3.service';

describe('Sandbox3 Service: Synchronous call', () => {

  let serviceUnderTest: Sandbox3Service = new Sandbox3Service();

  it('getSynchronousData should return "this data comes from the sandbox3 service"', () => {
    var data = serviceUnderTest.getSynchronousData();
    expect(data).toEqual('this data comes from the sandbox3 service');
  });

  it('should call getSyncrhonousDataArg with argument 42', () => {
    var spy = sinon.spy(serviceUnderTest, "getSynchronousDataArg");
    serviceUnderTest.getSynchronousDataArg(42);
    spy.restore();

    sinon.assert.calledWith(spy, 42);
  });

});
