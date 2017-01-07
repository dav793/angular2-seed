/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Sandbox7Component } from './sandbox7.component';
import { Sandbox7aComponent } from './sandbox7a.component';

class RouterStub {
  navigate(url: string) { return url; }
}

describe('Sandbox7 Component: @Input and @Output', () => {

  let comp:    Sandbox7Component;
  let fixture: ComponentFixture<Sandbox7Component>;
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
        fixture = TestBed.createComponent(Sandbox7Component);
        comp = fixture.componentInstance;
      });
  }));

  it('should set expected initial values', function () {
    expect(comp.contact.id).toBeNull();
    expect(comp.contact.name.first).toBeNull();
    expect(comp.contact.name.last).toBeNull();
  });

  it('should set expected values after clicking \'reload\' button once', async(() => {

    let reloadDataSpy = sinon.spy(comp, "reloadData");

    // query and queryAll will query all the elements contained, including from children components
    let button = fixture.debugElement.query(     // query gets the first button found (top to bottom)
      (debugElement) => { return debugElement.name === 'button' });
    button.nativeElement.click();

    fixture.detectChanges();
    reloadDataSpy.restore();

    sinon.assert.calledOnce(reloadDataSpy);

    expect(comp.contact.id).not.toBeNull();
    expect(comp.contact.name.first).not.toBeNull();
    expect(comp.contact.name.last).not.toBeNull();

  }));

});
