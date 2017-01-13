import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/operator/mergeMap';
import 'rxjs/operator/switchMap';
import 'rxjs/add/operator/debounceTime';

import { WebSocketStubService } from '../../shared/websocket.stub.service';


export class FakeResponse {
  body: any;
  json = function() { return this.body; };
  constructor(body: any) { this.body = body; }
}

export class FakeContactHttp {

  contacts: any[] = [
    {
      id: 1,
      firstName: 'Mario Bros',
      email: 'mario@mushroomkingdom.com',
      gender: 'male'
    },
    {
      id: 2,
      firstName: 'Luigi Bros',
      email: 'luigi@mushroomkingdom.com',
      gender: 'male'
    },
    {
      id: 3,
      firstName: 'Princess Peach',
      email: 'peach@mushroomkingdom.com',
      gender: 'female'
    }
  ];

  constructor(private wsServiceStub: WebSocketStubService) {}

  getContacts(): any { return this.contacts; }
  getContactById(id: number): any { return this.contacts.find(c => c.id === id); }
  getContactFieldByKey(key: string, contact: any): any { return contact[key]; }
  saveContactField(data: any, key: string, contact: any): any { contact[key] = data; return true; }

  // HTTP methods
  put(url: string, body: any, headers: any) {
    let urlParts = url.split('/');
    let paramStartIndex = urlParts.indexOf("api") + 1;
    let value = body.split("=")[1];       //body example: "value=Luigi Bros"

    if (urlParts[paramStartIndex] === 'contacts') {
      if (urlParts[paramStartIndex+1] !== undefined) {
        let contactId = parseInt(urlParts[paramStartIndex+1]);

        if (urlParts[paramStartIndex+2] !== undefined) {  // put contact field

          let fieldKey = urlParts[paramStartIndex+2];
          let contact = this.getContactById(contactId);
          return new Observable<any>((observer: any) => {
            contact[fieldKey] = value;
            observer.next(new FakeResponse(this.contacts));

            // send WS update signal
            this.wsServiceStub.updateChannel.next( JSON.stringify({key: fieldKey, id: contactId}) );
            observer.complete();
          });

        }
      }
    }
    return null;
  }

  get(url: string) {
    let urlParts = url.split('/');
    let paramStartIndex = urlParts.indexOf("api") + 1;

    if (urlParts[paramStartIndex] === 'contacts') {
      if (urlParts[paramStartIndex+1] === undefined) {  //  get all contacts

        return new Observable<any>((observer: any) => {
          observer.next(new FakeResponse(this.getContacts()));
          observer.complete();
        });

      }
      else {
        let contactId = parseInt(urlParts[paramStartIndex+1]);

        if (urlParts[paramStartIndex+2] === undefined) {  // get contact by id

          return new Observable<any>((observer: any) => {
            observer.next(new FakeResponse(this.getContactById(contactId)));
            observer.complete();
          });

        }
        else {    // get contact field

          let fieldKey = urlParts[paramStartIndex+2];
          let contact = this.getContactById(contactId);
          return new Observable<any>((observer: any) => {
            observer.next(new FakeResponse(this.getContactFieldByKey(fieldKey, contact)));
            observer.complete();
          });

        }
      }
    }

    return null;
  }
}
