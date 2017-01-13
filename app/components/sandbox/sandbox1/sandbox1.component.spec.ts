/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { Sandbox1Component } from './sandbox1.component';

describe('Sandbox1 Component: use a fixture to test a component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        Sandbox1Component
      ],
    });
    TestBed.compileComponents();
  });

  it('should be able to get the component instance', async(() => {
    let fixture = TestBed.createComponent(Sandbox1Component);
    let comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));

  it(`should have as title 'sandbox 1: working'`, async(() => {
    let fixture = TestBed.createComponent(Sandbox1Component);
    let comp = fixture.debugElement.componentInstance;
    expect(comp.title).toEqual('sandbox 1: working');
  }));

  it('should render title in a p tag', async(() => {
    let fixture = TestBed.createComponent(Sandbox1Component);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('sandbox 1: working');
  }));

  it('method myMethod should return "my value"', async(() => {
    let fixture = TestBed.createComponent(Sandbox1Component);
    let comp = fixture.debugElement.componentInstance;
    expect(comp.myMethod()).toEqual('my value');
  }));
});
