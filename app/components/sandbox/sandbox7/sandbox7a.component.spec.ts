/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Sandbox7Component } from './sandbox7.component';
import { Sandbox7aComponent } from './sandbox7a.component';
import { Contact } from './contact.model';

describe('Sandbox7a Component: @Input, @Output and Forms', () => {

  let comp:    Sandbox7aComponent;
  let fixture: ComponentFixture<Sandbox7aComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sandbox7Component, Sandbox7aComponent ],
      providers: [],
      imports: [FormsModule, ReactiveFormsModule]
    });
    TestBed.compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(Sandbox7aComponent);
        comp = fixture.componentInstance;
      });
  }));

  it('should set expected initial values', async(() => {
    expect(comp.formModel.get('id').value).toEqual('');
    expect(comp.formModel.get('name').get('first').value).toEqual('');
    expect(comp.formModel.get('name').get('last').value).toEqual('');
  }));

  it('should set expected values after clicking \'save\' button once', async(() => {

    comp.formModel.setValue({
      id: 99,
      name: {
        first: 'Test',
        last: 'Test'
      }
    });

    let emitSpy = sinon.spy(comp.onSaved, "emit");

    let button = fixture.debugElement.query(     // query gets the first button found (top to bottom)
      (debugElement) => { return debugElement.name === 'button' });
    button.nativeElement.click();

    fixture.detectChanges();
    emitSpy.restore();

    let verifyContact = new Contact(
      comp.formModel.get('id').value,                   // id
      comp.formModel.get('name').get('first').value,    // name.first
      comp.formModel.get('name').get('last').value);    // name.last

    sinon.assert.calledWith(emitSpy, verifyContact);
  }));

});
