import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: any, last: number, first: number = 0): any {
    return  value.length <= last ? value : value.substr(first, last) + '...';
  }
}
