import { Injectable } from '@angular/core';
import { Category } from "../../models/category/category";
import { environment as env } from "../../../../environments/environment";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { tap, catchError } from "rxjs/operators";
import {ErrorService} from "../error.service";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[] = [
    new Category({
      id: 1,
      label: 'Dev',
      color: 'red',
    }),
    new Category({
      id: 2,
      label: 'Prod',
      color: 'blue',
    }),
    new Category({
      id: 3,
      label: 'Form',
      color: 'green',
    }),
  ];

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  // get categories
  getCategories(): Observable<any> {
    return this.http.get<any>(`${env.api_url}/categories`)
      .pipe(
        tap(data => data),
        catchError(this.errorService.handleError('getCategories', []))
      );
  }

  //get catogory by index
  getCategory(id): Observable<any> {
    return this.http.get<any>(`${env.api_url}categories/${id}`)
      .pipe(
        tap(data => data),
        catchError(this.handleError('getCategory', []))
      );
  }

  //add category
  addCategory(category){
    this.http.get<any>(`${env.api_url}category`).
      pipe(
        tap()
    );
  }

  //delete category
  deleteCategory(i){
    this.categories.splice(i, 1);
  }

  //edit category
  editCategory(value, i){
    this.categories[i] = value;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
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
