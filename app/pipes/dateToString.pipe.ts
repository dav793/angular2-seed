import { Pipe, PipeTransform } from '@angular/core';
import {Datetime} from '../services/types';

/*
 * Produce a string representation of a Datetime object.
 * Usage:
 *   value | dateToString
 * Example:
 *	 var date = Datetime.createDate({day: 14, month: 6, year: 1993});
 *   {{ date |  dateToString}}
 *   formats to: "14/6/1993"
*/
@Pipe({name: 'dateToString'})
export class dateToStringPipe implements PipeTransform {
  transform(value: Datetime): string {
    return String(value.day) +'/'+ String(value.month) +'/'+ String(value.year);
  }
}