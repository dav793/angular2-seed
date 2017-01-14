import { Component, Input, forwardRef, OnChanges, OnInit, ElementRef } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

import { filterSearchPipe } from './filter-search.pipe';


export interface CustomSelectOption {
  key: string;
  label: string;
}

export function createCustomSelectValidator(allowed: string[]) {
  return function validateCustomSelectedIsAllowed(c: FormControl): any {
    let err = {
      rangeError: {
        given: c.value,
        allowed: allowed
      }
    };

    let selectionAllowed = false;
    if (allowed.find(function(key: string) { return key === c.value; }))
      selectionAllowed = true;

    return selectionAllowed ? null: err;
  }
}

@Component({
  host: {
    '(document:click)': 'onClick($event)',
  },
  selector: 'combo-input',
  template: `
    <div>
      <div class="selectionBox" (click)="onSelBoxClick(searchBox)">
        <p>{{ (findOptionByKey(selectedValue) ? findOptionByKey(selectedValue).label: '') }}</p>
        <input type="text" (keyup)="onSearchKeyup(searchBox)" [(ngModel)]="_search" [style.width.px]="_searchBoxWidth" #searchBox/>
      </div>
      <div class="optionsBox" *ngIf="_optionBoxOpen"><div>
        <div *ngFor="let option of options | filterSearch:_search" (click)="select(option.key)" [ngClass]="{active: selectedValue === option.key}">
          {{option.label}}
        </div>
      </div></div>
    </div>
  `,
  styles: [`
    .selectionBox, .optionsBox > div { border: 1px solid #000; background-color: #fff; }
    .selectionBox { height: auto; }
    .selectionBox p { margin: 5px 0 0 5px; display: inline; }
    .selectionBox input[type="text"] { background: rgba(0, 0, 0, 0); border: none; outline: none; }
    .optionsBox { position: relative; }
    .optionsBox > div { position: absolute; border-top: none; width: 100%; max-height: 280px; overflow-y: auto; }
    .optionsBox > div > div:hover { background-color: #c8c5ff; }
    .optionsBox > div > div.active:hover, .active { background-color: #000066; color: #fff; }
    .selectionBox, .optionsBox > div > div { cursor: pointer; }
  `],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ComboInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ComboInputComponent),
      multi: true
    }
  ]
})
export class ComboInputComponent implements ControlValueAccessor, OnChanges  {

  _optionBoxOpen: boolean = false;
  _search: string = '';
  _searchBoxWidth: number = 8;
  @Input() _selectedValue: string;
  @Input() options: CustomSelectOption[];

  constructor(private _eref: ElementRef) {}

  validateFn: Function = function(c: any): any { return null; };

  findOptionByKey(key: string): CustomSelectOption {
    return this.options.find((val: any) => { return val.key === key; });
  }

  onClick(event: any) {
    if (!this._eref.nativeElement.contains(event.target))   // click happened outside of component
      this.closeOptionsBox();  //console.log(event);
  }

  onSelBoxClick(elem: any) {
    elem.focus();
    this.openOptionsBox();
  }

  onSearchKeyup(elem: any) {
    this._searchBoxWidth = (elem.value.length + 1) * 8;
  }

  clearSearch() {
    this._search = "";
    this._searchBoxWidth = 8;
  }

  openOptionsBox() {
    this._optionBoxOpen = true;
  }

  closeOptionsBox() {
    this._optionBoxOpen = false;
    this.clearSearch();
  }

  select(k: string) {
    this.selectedValue = k;
  }

  get selectedValue() {
    return this._selectedValue;
  }

  set selectedValue(val) {
    this._selectedValue = val;
    this.closeOptionsBox();
    this.propagateChange(this._selectedValue);
  }

  ngOnChanges(changes: any) {
    console.log(changes);
  }

  validate(c: FormControl) {
    return this.validateFn(c);
  }

  writeValue(value: any) {
    if (value !== undefined) {
      this.selectedValue = value;
    }
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  propagateChange = (_: any) => {};

}
