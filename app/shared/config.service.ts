import {Injectable}       from '@angular/core';

@Injectable()
export class ConfigService {

  isDev = false;   // set to false to turn on production mode

  get serverIp() {
    return "192.168.1.11";
  }

  get serverUrl() {
    return "http://"+this.serverIp;
  }

  get httpPort() {
    if (this.isDev)
      return 3000;
    return 3008;
  }

  get apiUrl() {
    return this.serverUrl+':'+this.httpPort+'/api';
  }
}
