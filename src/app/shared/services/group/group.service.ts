import { Injectable } from '@angular/core';
import { TodoService } from "../todo/todo.service";
import { Group } from "../../models/group/group";

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

  constructor(private todoService: TodoService) { }

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
}
