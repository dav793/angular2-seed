
import { Inject, Injectable }       from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/operator/mergeMap';
import 'rxjs/operator/switchMap';
import 'rxjs/add/operator/debounceTime';

import { FakeContactHttp } from './http.contact.stub';

import { ConfigService } from '../../shared/config.service';
import { WebSocketService } from '../../shared/websocket.service';
import { WebSocketStubService } from '../../shared/websocket.stub.service';

import { Contact }  from './contact.model';
import { ContactService } from './contact.service';


@Injectable()
export class ContactServiceStub extends ContactService {
  constructor(
    @Inject(Http) http: Http,
    @Inject(WebSocketService) wsService: WebSocketService,
    @Inject(ConfigService) configService: ConfigService
  ) {
    super(http, wsService, configService);

    this.wsService = <WebSocketService>(<any> new WebSocketStubService());  // replace WS with fake
    this.http = <Http>(<any> new FakeContactHttp( <WebSocketStubService>(<any> this.wsService) ));  // replace Http with fake
    this.createWebSocket();
    console.log('You are using ContactServiceStub. Communication with server is disabled.')
  }

}
