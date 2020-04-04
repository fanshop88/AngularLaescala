import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PokeAPI, PokemonDetails } from 'src/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  PokeAPI: any;
  PokeSpeciesAPI:any;

  constructor(private  http: HttpClient) {
    this.PokeAPI = environment.pokemonURL;
    this.PokeSpeciesAPI = environment.pokemonSpeciesURL;
   }

   //Obtenermos pokemon
   getPokemon(): Observable<PokeAPI>{
    return this.http
      .get<PokeAPI>(`${this.PokeAPI}?limit=151`)
      .pipe(catchError(this._handleError));
   }

   getPokemonDetails(name): Observable<PokemonDetails>{
    return this.http
      .get<PokemonDetails>(`${this.PokeAPI}/${name}`)
      .pipe(catchError(this._handleError));
   }

   getPokemonSpecies(name): Observable<any> {
     return this.http
      .get<any>(`${this.PokeSpeciesAPI}/${name}`)
      .pipe(catchError(this._handleError));
   }

   private _handleError(error:HttpErrorResponse){
     if(error.error instanceof ErrorEvent) {
       //Error del lado del cliente
       console.log('Tienes problemas; ', error.error.message );
     } else {
       //Error del lado backend
       console.log(`Hay un error interno: ${error.status}`+` cuerpo: ${error.error}`);
     }
     return throwError('Algo salio mal, por favor intenta nuevamente.');
   }
}
