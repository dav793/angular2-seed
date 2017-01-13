import { Component, OnInit, Input, OnChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

import { Contact } from './contact.model';

@Component({
  moduleId: module.id,
  selector: 'sandbox7a',
  template: `<div class="wrapper">
    <p>Sandbox 7a - Child Component</p>
    
    <form [formGroup]="formModel" (ngSubmit)="onSubmit(formModel)">
    
      <div>
        <label for="f-id" style="display: block;">id</label>
        <input id="f-id" type="text" name="id" formControlName="id">
      </div>
     
      <div formGroupName="name">
        <div>
          <label for="f-name-first" style="display: block;">first name</label>
          <input id="f-name-first" type="text" name="first" formControlName="first">
        </div>
      
        <div>
          <label for="f-name-last" style="display: block;">last name</label>
          <input id="f-name-last" type="text" name="last" formControlName="last">
        </div>
      </div>
      
      <button (click)="save(formModel)" type="submit">save</button>
      
    </form>
    
  </div>`,
  styles: ['.wrapper { border: 1px dashed #424242; padding: 10px; }']
})
export class Sandbox7aComponent implements OnInit, OnChanges {

  formModel: FormGroup;

  @Input() person: Contact;
  @Output() onSaved = new EventEmitter<Contact>();

  constructor() {
    this.initForm();
  }

  ngOnInit() {}

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    let log: string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      let from = JSON.stringify(changedProp.previousValue);
      let to =   JSON.stringify(changedProp.currentValue);
      //log.push( `${propName} changed from ${from} to ${to}`);
      console.log(`${propName} changed from ${from} to ${to}`);
    }
    //this.changeLog.push(log.join(', '));

    this.updateForm(this.person);
  }

  initForm = function() {
    this.formModel = new FormGroup({
      'id': new FormControl(''),
      'name': new FormGroup({
        'first': new FormControl(''),
        'last': new FormControl('')
      })
    });
  }

  updateForm = function(person: Contact) {
    this.formModel.setValue({
      'id': person ? person.id : '',
      'name': {
        'first': person ? person.name.first : '',
        'last': person ? person.name.last : ''
      }
    });
  }

  parseFormContents(formModel: FormGroup): Contact {
    return new Contact(
      parseInt(formModel.get('id').value),        // id
      formModel.get('name').get('first').value,   // name.first
      formModel.get('name').get('last').value     // name.last
    );
  }

  getField(modelIndexes: Array<string>) {
    if (modelIndexes.length <= 0) {
      return;
    }

    let field: any = this.formModel;
    for(let i = 0; i < modelIndexes.length; ++i) {
      field = field.get(modelIndexes[i]);
    }
    return field;
  }

  fieldIsClear(modelIndexes: Array<string> = []) {
    if (modelIndexes.length == 0) {
      throw new Error('Invalid argument');
    }

    if (this.getField(modelIndexes).value === '')
      return true;
    return false;
  }

  onSubmit(formModel: FormGroup) {}

  save(formModel: FormGroup) {
    let contactToSave = this.parseFormContents(formModel);
    this.onSaved.emit(contactToSave);
  }

}

