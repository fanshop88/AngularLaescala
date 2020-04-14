import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'levelFilter'
})
export class LevelFilterPipe implements PipeTransform {

  transform(value: any, searchText?: any): any { 
   
    if (!value) {
      return;
    }
    if (!searchText) {
      return value;
    }
    searchText = searchText.toLowerCase(); 

    return value.filter(item => { 
      let matchFound = false; 
      if (item.level) {
        const level = item.level; 

        const searchLevel = JSON.stringify(level).toLowerCase().includes(searchText);

        if (searchLevel) {
          matchFound = true;
        }
      }
      return matchFound; 
    });
  }

}
