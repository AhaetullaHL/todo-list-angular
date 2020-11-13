import { Injectable } from '@angular/core';
import { Category } from "../../models/category/category";
import { environment as env } from "../../../../environments/environment";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { tap, catchError } from "rxjs/operators";

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

  constructor(private http: HttpClient) {}

}
