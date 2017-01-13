import { Component, OnInit } from '@angular/core';

import { Contact } from './contact.model';

@Component({
  moduleId: module.id,
  selector: 'sandbox7',
  template: `<div class="card">
    <div class="card-block">

      <p>Sandbox 7 - Parent Component</p>
      
      <button (click)="reloadData()" id="sandbox7-btn">
        <!--<i class="material-icons mgl-4">replay</i>-->
        reload data
      </button>
      
      <br /><br />
      <p>currently loaded: {{contact.name.first}}</p>     
      <br />
      
      <sandbox7a [person]="contact" (onSaved)="onChildSaved($event)"></sandbox7a>
      
    </div>
  </div>`,
  styles: ['.card { }']
})
export class Sandbox7Component implements OnInit {

  contact: Contact = new Contact(null, null, null);

  constructor() {}

  ngOnInit() {}

  reloadData = function() {
    this.setContact();
  }

  setContact = function() {
    this.contact = Contact.createRandom();
  };

  onChildSaved = function(data: Contact) {
    this.contact = data;
  };

}

