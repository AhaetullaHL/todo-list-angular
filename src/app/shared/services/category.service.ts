import { Injectable } from '@angular/core';
import { Category } from "../models/category/category";
import {Observable} from "rxjs";

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

  constructor() { }

  // get categories
  getCategories() {
    return this.categories;
  }

  //get catogory by index
  getCategory(i){
    return this.categories[i];
  }

  //add category
  addCategory(category){
    this.categories.push(category);
  }

  //delete category
  deleteCategory(i){
    this.categories.splice(i, 1);
  }

  //edit category
  editCategory(value, i){
    this.categories[i] = value;
  }
}
