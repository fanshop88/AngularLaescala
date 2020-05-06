import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  searchData = new BehaviorSubject<string>(''); //Sujeto de prueba vacio
  observableSearchData$ = this.searchData.asObservable(); //Crea un obserbable dentro de otro observable

  constructor(private http:HttpClient) { }

  //Metodos para diferentes peticiones
  getPopular(category:string, page?:any){
    let url = `${environment.api}/discover/movie`; //Aqui se debe pasar una configuracion de e}nvironment
    switch(true){
      case !category:
        url += '?sort_by=popularity.desc'; //Cuando no hay categoria por defecto muestra las mas populares en orden descendente
        break;
      case category === 'G':
        url += `?certification.lte=${category}&sort_by=popularity.desc`;
        break;
      case category === 'now':
        url += `?primary_release_date.gte=2019-04-26&primary_release_date.lte=2020-04-26`
        break;
      case category === '2020' || category === '2019' || category === '2018' || category === '2017':
        url += `primary_release_year=${category}&sort_by=vote_average.desc`;
        break; 
    }

    if(page){
      url += `&page=${page}`; //Obtenemos la pagina donde esta, tambien sirve para paginar
    }

    return this.http.get<any>(url); //Si no hay pagina retorna la URL por defecto

  }

  getYear(year:any) { //Busco por año
    return this.http.get<any>(`${environment.api}/discover/movie?primary_release_year=${year}&sort_by=vote_average.desc`);
  }

  getMovieById(movieId:any){ //Buscar por ID
    return this.http.get<any>(`${environment.api}/movie/${movieId}`);
  }

  getSearch(query:string){ //Buscar por consulta
    return this.http.get<any>(`${environment.api}/search/movie?query=${query}`);
  }

  nextData(data:any){ // Actualizacion de la data
    this.searchData.next(data); //Metodo next nos permite tomar el objeto y decirle a que lo vamos a ligar constantemente (nueva peticion de busqueda)
  }

}
