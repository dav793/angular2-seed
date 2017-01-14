import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})
@Injectable()
export class filterSearchPipe implements PipeTransform {
  transform(items: any[], args: any[]): any {

    let search: string = <string>(<any>args);

    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter(
      item => item.label.toLowerCase().indexOf(search) !== -1
    );

  }
}
