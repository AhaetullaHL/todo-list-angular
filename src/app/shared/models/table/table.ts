import {Group} from '../group/group';

export class Table {
  id: number;
  label: string;
  groups: Group[];

  /**
   *
   * @param table: object
   */
  constructor(table?) {
    table = table || {};
    this.id = table.id || null;
    this.label = table.label || '';
    this.groups = table.groups || [];
  }
}
