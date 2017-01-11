import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

export class WebSocketStubService{

  updateChannel: Subject<any>;

  constructor() {
    this.updateChannel = new Subject();
  }

  createObservableSocket(url:string): Subject<any> {
    this.updateChannel = new Subject();
    return this.updateChannel;
  }

}
