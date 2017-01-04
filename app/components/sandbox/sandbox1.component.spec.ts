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
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'sandbox1 component works'`, async(() => {
    let fixture = TestBed.createComponent(Sandbox1Component);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('sandbox1 component works');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(Sandbox1Component);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('sandbox1 component works');
  }));
});
