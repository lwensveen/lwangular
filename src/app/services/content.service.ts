import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Content } from '../content';
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ContentService {


  constructor(private http: HttpClient) {
  }

  getContent(): Observable<Content[]> {

    return of(CONTENT);
    // return this.http.get<Content[]>(CONTENT)
    //   .pipe(
    //     catchError(this.handleError('getHeroes', []))
    //   );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}

export const CONTENT: Content[] = [
  {id: 11, name: 'Mr. Nice'},
  {id: 12, name: 'Narco'},
];
