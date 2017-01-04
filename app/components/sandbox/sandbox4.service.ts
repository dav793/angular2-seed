import { Inject, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/operator/mergeMap';
import 'rxjs/operator/switchMap';
import 'rxjs/add/operator/debounceTime';

@Injectable()
export class Sandbox4Service {

  data: string = 'this data comes from the sandbox4 service';

  getNumbers(): Observable<any> {
    return new Observable(function(observer: any) {
      observer.next(Math.random());
      //observer.complete();
    });
  }

}
