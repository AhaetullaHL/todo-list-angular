import { Injectable } from '@angular/core';
import { Todo } from '../../models/todo/todo';
import { CategoryService } from "../category/category.service";
import { environment as env } from "../../../../environments/environment";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import {RequestService} from "../request/request.service";
import {Table} from "../../models/table/table";

@Injectable({
  providedIn: 'root'
})
export class TodoService {



  constructor(private categoryService: CategoryService, private http: HttpClient, private requestService: RequestService) {
  }

  getAll(callback: (todos: Todo[]) => void): void{
    this.requestService.get<Todo[]>('todos', {}, true, data => {
      callback(data);
    });
  }

  add(label: string, callback: (todos: Todo[]) => void): void{
    this.requestService.post<Todo>('todos', {}, {label}, true, data => {
      callback(data);
    });
  }

  get(id: number, callback: (todos: Todo) => void): void{
    this.requestService.get<Table>(`todos/${id}`, {}, true, data => {
      callback(data);
    });
  }

  edit(id: number, label: string, callback: (todos: Todo) => void): void{
    this.requestService.put(`todos/${id}`, {}, {label}, true, data => {
      callback(data);
    });
  }

  delete(id: number, callback: (todos: Todo) => void): void{
    this.requestService.delete(`todos/${id}`, {}, true, data => {
      data;
    });
  }
}
