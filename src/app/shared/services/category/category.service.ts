import { Injectable } from '@angular/core';
import { Category } from "../../models/category/category";
import { HttpClient } from "@angular/common/http";
import {RequestService} from "../request/request.service";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, private requestService: RequestService) {}

  getAll(callback: (categories: Category[]) => void): void{
    this.requestService.get<Category[]>('categories', {}, true, data => {
      callback(data);
    });
  }

  add(label: string, callback: (categories: Category[]) => void): void{
    this.requestService.post<Category>('categories', {}, {label}, true, data => {
      callback(data);
    });
  }

  get(id: number, callback: (categories: Category) => void): void{
    this.requestService.get<Category>(`categories/${id}`, {}, true, data => {
      callback(data);
    });
  }

  edit(id: number, label: string, callback: (categories: Category) => void): void{
    this.requestService.put(`categories/${id}`, {}, {label}, true, data => {
      callback(data);
    });
  }

  delete(id: number, callback: (categories: Category) => void): void{
    this.requestService.delete(`categories/${id}`, {}, true, data => {
      data;
    });
  }
}
