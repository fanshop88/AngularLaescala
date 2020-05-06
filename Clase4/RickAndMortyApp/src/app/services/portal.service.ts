import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { IResponse, Episode, Filter } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PortalService {

  getCharacters(filter:Filter, page:Number): Observable<IResponse>  {
    let filters:string = '?page='+page;
    if(filter){
      if(filter.name){
        filters = filters+'&name='+filter.name;
      }
      if(filter.gender){
        filters = filters+'&gender='+filter.gender;
      }
    }
    return this.http.get<IResponse>(`${environment.api}/character/${filters}`);
  }

  getEpisodeByUrl(url:string): Observable<Episode>  {
    return this.http.get<Episode>(url);
  }

  constructor(private http:HttpClient) { }

  private _handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

}
