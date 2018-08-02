import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, test: string, filed: string): any {
    if (value.length) {
      const newValue = [];
      for (const item of value) {
        if (item[filed].toLowerCase().indexOf(test.toLowerCase()) !== -1) {
          newValue.push(item);
        }
      }
      return newValue;
    } else {
      return value;
    }
  }

}
