import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe<T>  implements PipeTransform {

  transform(itemsList: T[], searchValue: string, property: keyof T): T[] {
    if ( itemsList.length === 0 || searchValue === '') {
      return itemsList;
    }
    return itemsList.filter(item => {
      const value = String(item[property]).toLowerCase();
      return value.includes(searchValue.toLowerCase());
    });
  }

}
