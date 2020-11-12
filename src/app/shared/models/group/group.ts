import {Todo} from '../todo/todo';

export class Group {
  id: number;
  label: string;
  todos: Todo[];

  /**
   *
   * @param group: object
   */
  constructor(group?) {
    group = group || {};
    this.id = group.id || null;
    this.label = group.label || '';
    this.todos = group.todos || [];
  }
}
