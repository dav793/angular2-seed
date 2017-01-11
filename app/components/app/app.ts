import { Component } from '@angular/core';
import { Http } from '@angular/http';


import { ContactService } from '../contact/contact.service';
import { ContactServiceStub } from '../contact/contact.service.stub';

import { ConfigService } from '../../shared/config.service';
import { WebSocketService } from '../../shared/websocket.service';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: `./app.html`,
  providers: [
    { provide: ContactService,
      useFactory: (http: Http, ws: WebSocketService, cs: ConfigService) => {
        if (cs.isDev)
          return new ContactServiceStub(http, ws, cs);
        else
          return new ContactService(http, ws, cs);
      }, deps: [Http, WebSocketService, ConfigService]}
  ]
})
export class AppComponent  {
  constructor(private cs: ContactService) {

    /*this.cs.getContactById(2)
      .subscribe(
        data => {   // observer sends contact
          console.log(data);
        },
        err => console.log("Can't get contact. Error code: %s, URL: %s ",  err.status, err.url),
        () => {}
      );*/

    /*this.cs.getContactField('firstName', 2)
      .subscribe(
        data => {   // observer sends contact
          console.log(data);
        },
        err => console.log("Can't get contact. Error code: %s, URL: %s ",  err.status, err.url),
        () => {}
      );*/

  }
}
