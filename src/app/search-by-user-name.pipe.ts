import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByUserName'
})
export class SearchByUserNamePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return it.username.toLowerCase().includes(searchText);
    });
   }

}
