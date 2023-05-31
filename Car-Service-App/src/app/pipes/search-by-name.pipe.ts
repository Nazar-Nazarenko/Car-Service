import { Pipe, PipeTransform } from '@angular/core';
import {Car} from '../components/add-edit-form/add-edit-form.config';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform(itemsList: Car[], searchValue: string): Car[] {
    if ( itemsList.length === 0 || searchValue === '') {
      return itemsList;
    }
    return itemsList.filter( item => item.brand.toLowerCase().indexOf( searchValue.toLowerCase()) !== -1);
  }

}
