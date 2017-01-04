import { Inject, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/operator/mergeMap';
import 'rxjs/operator/switchMap';
import 'rxjs/add/operator/debounceTime';

@Injectable()
export class Sandbox5Service {

  data: string = 'this data comes from the sandbox5 service';

  constructor(private http: Http) {}

  public getUsers (): Observable<any[]> {

    return new Observable((observer: any) => {

      this.http.get('https://jsonplaceholder.typicode.com/users')
        .subscribe(
          (data: Response) => {                             // data flows through stream
            let body = this.extractBody(data);
            observer.next(body);
          },
          (err: Response) => this.handleError(err),         // error
          () => observer.complete()                         // complete
        );

    });

  }

  private extractBody (res: Response) {
    return res.json() || {};
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
