import { Inject, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/operator/mergeMap';
import 'rxjs/operator/switchMap';
import 'rxjs/add/operator/debounceTime';

@Injectable()
export class Sandbox3Service {

    data: string = 'this data comes from the sandbox3 service';

    getSynchronousData() {
      return this.data;
    }

    getSynchronousDataArg(arg: number) {
      return arg;
    }

}
