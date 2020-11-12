// tslint:disable:variable-name
import { Category } from '../category/category';

export class Todo {
  id: number;
  label: string;
  desc: string;
  percent_done: number;
  categories: Category[];

  /**
   *
   * @param todo: object
   */
  constructor(todo?) {
    todo = todo || {};
    this.id = todo.id || null;
    this.label = todo.label || '';
    this.desc = todo.desc || '';
    this.percent_done = todo.percent_done || null;
    this.categories = todo.categories || [];
  }
}
