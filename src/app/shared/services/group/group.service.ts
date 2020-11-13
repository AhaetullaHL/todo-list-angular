import { Injectable } from '@angular/core';
import { TodoService } from "../todo/todo.service";
import { Group } from "../../models/group/group";
import { environment as env } from "../../../../environments/environment";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  groups: Group[] = [
    new Group({
      id: 1,
      label: 'ToDo',
      todos: [
        this.todoService.getTodo(0),
        this.todoService.getTodo(1),
        this.todoService.getTodo(2),
      ],
    }),
    new Group({
      id: 2,
      label: 'Current',
      todos: [
        this.todoService.getTodo(3),
        this.todoService.getTodo(4),
      ],
    }),
    new Group({
      id: 3,
      label: 'Finish',
      todos: [],
    }),

  ];

  constructor(private todoService: TodoService, private http: HttpClient) { }

  // get groups
  getGroups(){
    return this.groups
  }

  //get group
  getGroup(i){
    return this.groups[i];
  }

  //add group
  addGroup(group){
    this.groups.push(group);
  }

  //delete group
  deleteGroup(i){
    this.groups.splice(i, 1);
  }

  //edit group
  editGroup(value, i){
    this.groups[i] = value;
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
