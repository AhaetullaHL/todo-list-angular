import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

import {tap, catchError, map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.api_url;
  }

  login(email: string, password: string, callback?: (logged: boolean) => void): void{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    // Authorization: `Bearer ${auth_token}`

    this.http.post<{ token: string }>(this.apiUrl + 'login', {headers, email, password}).pipe(
      tap(data => data),
      catchError(this.handleError('login', null))
    ).subscribe(data => {
      if ('token' in data){
        localStorage.setItem('token', data.token);
        callback(true);
      }else{
        callback(false);
      }
    });
  }

  register(name: string, email: string, password: string, callback?: (logged: boolean) => void): void{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    // Authorization: `Bearer ${auth_token}`

    this.http.post<{ token: string }|{ message: string }>(this.apiUrl + 'register', {headers, name, email, password}).pipe(
      tap(data => data),
      catchError(this.handleError('register', null))
    ).subscribe(data => {
      if ('token' in data){
        localStorage.setItem('token', data.token);
        callback(true);
      }else{
        callback(false);
      }
    });
  }

  logout( callback?: (success: boolean) => void ): void{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    // Authorization: `Bearer ${auth_token}`
    if (!localStorage.getItem('token')){
      callback(true);
      return;
    }
    this.http.post<Observable<any>>(this.apiUrl + 'logout', {headers, token: localStorage.getItem('token')}).pipe(
      tap(data => data),
      catchError(this.handleError('logout', null))
    ).subscribe(data => {
        localStorage.removeItem('token');
        callback(true);
    });
  }

  verify( callback?: (valid: boolean) => void ): void{
    if (!localStorage.getItem('token')){
      callback(false);
      return;
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    this.http.get<{ message: string }>(this.apiUrl + 'verify', {headers}).pipe(
      tap(data => data[0]),
      catchError(this.handleError('verify', 'invalid'))
    ).subscribe(data => {
      if (data.message && data.message === 'valid'){
        callback(true);
      }else{
        callback(false);
      }
    });
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  // tslint:disable-next-line:typedef
  private handleError<T>(operation = 'operation', result?: string) {
    return (error: any): Observable<{message: string}> => {
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return (of({message: result}));
    };
  }
}
