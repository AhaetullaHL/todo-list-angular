import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {environment as env} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = env.api_url;
  }

  getHeader(): HttpHeaders{
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }
  getAuthHeader(): HttpHeaders{
    return new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${localStorage.getItem('token')}`);
  }

  post<type>(url: string, params: any, body: any, auth: boolean, callback?: (data: any) => void): void{
    let paramsStr = '?';
    for (const [key, value] of Object.entries(params)) {
      paramsStr += `${key}=${value}&`;
    }
    // tslint:disable-next-line:max-line-length
    this.http.post<type>(this.apiUrl + url + paramsStr.slice(0, -1), body, {headers: !auth ? this.getHeader() : this.getAuthHeader()}).pipe(
      tap(data => data),
      catchError(this.handleError(url))
    ).subscribe(data => {
      callback(data);
    });
  }

  get<type>(url: string, params: any, auth: boolean, callback?: (data: any) => void): void{
    let paramsStr = '?';
    for (const [key, value] of Object.entries(params)) {
      paramsStr += `${key}=${value}&`;
    }
    this.http.get<type>(this.apiUrl + url + paramsStr.slice(0, -1), {headers: !auth ? this.getHeader() : this.getAuthHeader()}).pipe(
      tap(data => data),
      catchError(this.handleError(url))
    ).subscribe(data => {
      callback(data);
    });
  }

  put<type>(url: string, params: any, body: any, auth: boolean, callback?: (data: any) => void): void{
    let paramsStr = '?';
    for (const [key, value] of Object.entries(params)) {
      paramsStr += `${key}=${value}&`;
    }
    // tslint:disable-next-line:max-line-length
    this.http.put<type>(this.apiUrl + url + paramsStr.slice(0, -1), body, {headers: !auth ? this.getHeader() : this.getAuthHeader()}).pipe(
      tap(data => data),
      catchError(this.handleError(url))
    ).subscribe(data => {
      callback(data);
    });
  }

  delete<type>(url: string, params: any, auth: boolean, callback?: (data: any) => void): void{
    let paramsStr = '?';
    for (const [key, value] of Object.entries(params)) {
      paramsStr += `${key}=${value}&`;
    }
    this.http.delete<type>(this.apiUrl + url + paramsStr.slice(0, -1), {headers: !auth ? this.getHeader() : this.getAuthHeader()}).pipe(
      tap(data => data),
      catchError(this.handleError(url))
    ).subscribe(data => {
      callback(data);
    });
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  // tslint:disable-next-line:typedef
  public handleError<T>(operation = 'operation' ) {
    return (error: any): Observable<null> => {
      console.log(`${operation} failed:`);
      console.log(error);
      // Let the app keep running by returning an empty result.
      return of(null);
    };
  }
}
