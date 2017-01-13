import { Component }  from '@angular/core';

import { WebSocketService } from './websocket-observable-service';

@Component({
  moduleId: module.id,
  selector: 'sandbox11',
  template: `<div class="card">
    <div class="card-block">

      <p>Sandbox 11 - WebSockets</p>
      <div *ngIf="!available">
        <p>This sandbox won't work if there is no WebSocket server running!</p>
        <p>Use <code>npm run start-s-server</code> instead of <code>npm start</code></p>
      </div>
      
      {{messageFromServer}}<br>
      <button (click)="sendMessageToServer()">Send msg to Server</button>
      
    </div>
  </div>`,
  providers: [ WebSocketService ]
})
export class Sandbox11Component {

  messageFromServer: string;
  available: boolean = true;

  constructor(private wsService: WebSocketService) {

    this.wsService.createObservableSocket("ws://localhost:8085")
      .subscribe(
        (data: any) => {
          this.messageFromServer = data;
        },
        (err: any) => { console.error(err); this.available = false; },
        () => console.log( 'The observable stream is complete')
    );

  }

  sendMessageToServer(){
    console.log("Sending message to WebSocket server");
    this.wsService.sendMessage("Hello from client");
  }

}

