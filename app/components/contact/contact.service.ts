
import { Inject, Injectable }       from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/operator/mergeMap';
import 'rxjs/operator/switchMap';
import 'rxjs/add/operator/debounceTime';

import { Contact }  from './contact.model';

import { ConfigService } from '../../shared/config.service';
import { WebSocketService } from '../../shared/websocket.service';

@Injectable()
export class ContactService {
  http: Http;
  wsService: WebSocketService;
  configService: ConfigService;

  contacts: Contact[];
  updateChannel: Subject<any>;

  constructor(
    @Inject(Http) http: Http,
    @Inject(WebSocketService) wsService: WebSocketService,
    @Inject(ConfigService) configService: ConfigService
  ) {
    this.http = http;
    this.wsService = wsService;
    this.configService = configService;

    this.updateChannel = new Subject();

    if (!this.configService.isDev)
      this.createWebSocket();
  }

  getContacts(): Observable<any> {
    let serv = this;  // we have to do this to access the service inside the subscribe block

    return new Observable(function(observer: any) {

      if (!serv.contactsLoaded()) {

        // get contacts from api server
        let url = serv.configService.apiUrl+'/contacts';
        serv.http.get(url)
          .subscribe(
            (data: Response) => {                             // observable sends contacts

              console.log('getting contacts through api');
              let body = serv.extractBody(data);
              serv.contacts = body.map(function(contact: any) {
                return new Contact(contact);
              });
              observer.next(serv.contacts);
              observer.complete();

            },
            (err: Response) => serv.handleError(err),         // error
            () => observer.complete()                         // complete
          );

        //this.contacts = mockedContacts.map(function(contact) {
        //  return new Contact(contact);
        //});

      }
      else {  // contacts already loaded
        observer.next(serv.contacts);
        observer.complete();
      }

    });
  }

  getContactById(contactId: number): Observable<any> {
    let serv = this;    // we have to do this to access the service inside the subscribe block

    return new Observable((observer: any) => {

      if (!serv.contactsLoaded()) {

        let url = serv.configService.apiUrl+'/contacts/'+contactId;
        serv.http.get(url)
          .subscribe(
            (data: Response) => {                             // observable sends contact

              console.log('getting contact '+contactId+' through api');
              let body = serv.extractBody(data);
              observer.next(new Contact(body));
              observer.complete();

            },
            (err: Response) => serv.handleError(err),         // error
            () => observer.complete()                         // complete
          );

      }
      else {

        let contact = serv.contacts.find( (c: Contact, i: number) => {
          return c.data.id === contactId;
        } );

        observer.next(contact);
        observer.complete();

      }

    });
  }

  // @param overwrite: whether or not to overwrite the received value into the service's own copy of contacts
  getContactField(fieldKey: string, contactId: number, overwrite: boolean = true) {
    let serv = this;    // we have to do this to access the service inside the subscribe block

    return new Observable((observer: any) => {

      if (!serv.contactsLoaded() || overwrite) {

        let url = serv.configService.apiUrl+'/contacts/'+contactId+'/'+fieldKey;
        serv.http.get(url)
          .subscribe(
            (data: Response) => {                             // observable sends contact

              console.log('getting field '+fieldKey+' through api');
              let body = serv.extractBody(data);
              observer.next(body);
              observer.complete();

            },
            (err: Response) => serv.handleError(err),         // error
            () => observer.complete()                         // complete
          );

      }
      else {

        let contact = serv.contacts.find( (c: Contact, i: number) => {
          return c.data.id === contactId;
        } );

        observer.next(contact.data[fieldKey]);
        observer.complete();

      }

    });
  }

  putContactField(data: {key: any, value: any}, contactId: number): Observable<any> {
    let serv = this;    // we have to do this to access the service inside the subscribe block

    return new Observable((observer: any) => {

      let url = serv.configService.apiUrl+'/contacts/'+contactId+'/'+data.key;
      var headers = new Headers();
      //headers.append('Content-Type', 'application/json');
      //let body = JSON.stringify({value: data.value});
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      let body = 'value='+data.value;

      serv.http.put(url, body, {headers: headers})
        .subscribe(
          (data: Response) => {                             // observable sends contact
            console.log(data);
            observer.complete();
          },
          (err: Response) => serv.handleError(err),         // error
          () => observer.complete()                         // complete
        );

    });
  }

  contactsLoaded () {
    return this.contacts !== undefined;
  }

  updateContactField(fieldKey: string, contactId: number) {
    let serv = this;

    this.getContactField(fieldKey, contactId)
      .subscribe(
        (data) => {

          if (serv.contacts === undefined)
            throw new Error("contact is not loaded!");

          let contact = serv.contacts.find( (c: Contact, i: number) => {
            return c.data.id === contactId;
          } );
          if (!contact)
            throw new Error("contact is not loaded!");


          contact.data[fieldKey] = data;
          this.updateChannel.next({id: contactId, key: fieldKey, value: data});

        },
        (err) => console.error(err)
      );
  }

  createWebSocket() {
    let serv = this;

    let wsUrl = "ws://"+serv.configService.serverIp+":8085";
    serv.wsService.createObservableSocket(wsUrl)
      .subscribe(
        (data: any) => serv.processWebSocketMessage(data),
        (err: any) => { console.error(err); }
      );
  }

  processWebSocketMessage(msg: any) {
    let parsed = JSON.parse(msg);
    this.updateContactField(parsed.key, parseInt(parsed.id));
  }

  extractBody (res: Response) {
    return res.json() || {};
  }

  handleError (error: Response | any) {
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

let mockedContacts = [
  {
    id: 1,
    firstName: 'Julio Vinicio',
    email: 'jvini@mail.com',
    gender: 'male'
  },
  {
    id: 2,
    firstName: 'Abigail Porter',
    email: 'abigail.porter@mail.com',
    gender: 'female'
  }
];
