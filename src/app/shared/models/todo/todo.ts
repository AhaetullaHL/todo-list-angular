// tslint:disable:variable-name
import {Group} from '../group/group';
import {Category} from '../category/category';

export class Todo {
  id: number;
  label: string;
  desc: string;
  percent_done: number;
  categories: Category[];
}
