import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {
  transform(value: any, filters?: any): any {
    if (!value) {
      return;
    }
    if (!filters) {
      return value; //si no vienen filtros retorno un value que haya en el momento
    }
    filters = filters.toLowerCase(); //filtros aplicados en minuscula

    return value.filter(item => {
      let matchFound = false; //primero no habilito el match ya que tengo una opcion none que cuando no elijo un tipo

      if (item.details && item.details.types) {
        matchFound = JSON.stringify(item.details.types)
          .toLowerCase()
          .includes(filters);
      }
      return matchFound; //retorno el valor de matchFound que tiene el json perfecto
    });
  }
}