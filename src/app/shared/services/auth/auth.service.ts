import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

import {tap, catchError, map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.api_url;
  }

  login(email: string, password: string): Observable<any>{
    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    // Authorization: `Bearer ${auth_token}`

    return this.http.post<Observable<any>>(this.apiUrl + 'login', {headers, email, password}).pipe(
      tap(data => data),
      catchError(this.handleError('getBeers', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  // tslint:disable-next-line:typedef
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return (error);
    };
  }
}
