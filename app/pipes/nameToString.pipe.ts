import { Pipe, PipeTransform } from '@angular/core';
import {Name} from '../services/types';

/*
 * Produce a string representation of a Name object.
 * Usage:
 *   value | nameToString
 * Example:
 *	 var name = Name.create({first: 'Amy', middle: 'Lee', last: 'Cooper', secondLast: ''});
 *   {{ name |  nameToString}}
 *   formats to: "Amy L. Cooper"
*/
@Pipe({name: 'nameToString'})
export class nameToStringPipe implements PipeTransform {
  transform(value: Name): string {
    return value.first + (value.middle ? ' '+value.middle[0].toUpperCase()+'.' : '') + ' ' + value.last + (value.secondLast ? ' '+value.secondLast : '');
  }
}