import { Injectable } from '@angular/core';
import { Todo } from '../models/todo/todo';
import { CategoryService } from "./category.service";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[]=[
    new Todo({
      id: 1,
      label: 'Make a todo',
      desc: 'Create a new todo',
      percent_done: 20,
      categories: [this.categoryService.getCategory(0)],
    }),
    new Todo({
      id: 2,
      label: 'Make a move',
      desc: 'Create a new move',
      percent_done: 2,
      categories: [
        this.categoryService.getCategory(0),
        this.categoryService.getCategory(2),
      ],
    }),
    new Todo({
      id: 5,
      label: 'Farcir la dinde',
      desc: 'Faire la farce de la dinde de Noël pour bien profiter des fêtes et se régaler!',
      percent_done: 0,
      categories: [this.categoryService.getCategory(1)],
    }),
    new Todo({
      id: 6,
      label: 'Faire comme si j\'avais rien entendu',
      desc: 'Il vaut mieux éviter de retenir certaines choses, dans l\'intérêt commun',
      percent_done: 100,
      categories: [this.categoryService.getCategory(1)],
    }),
    new Todo({
      id: 12,
      label: 'Angular Zero to Hero',
      desc: 'Make all tasks for became an Angular\'s hero!',
      percent_done: 20,
      categories: [
        this.categoryService.getCategory(0),
        this.categoryService.getCategory(1),
        this.categoryService.getCategory(2),
      ],
    }),

  ];

  constructor(private categoryService: CategoryService) {
  }

  getTodos(){
    return this.todos;
  }

  getTodo(i){
    return this.todos[i];
  }

  addTodo(todo){
    this.todos.push(todo);
  }

  deleteTodo(i){
    this.todos.splice(i, 1);
  }

  editTodo(value, i){
    this.todos[i] = value;
  }
}
