export class Category {
  id: number;
  label: string;
  color: string;

  /**
   * @param category: object
   */
  constructor(category?) {
    category = category || {};
    this.id = category.id || null;
    this.label = category.label || '';
    this.color = category.color || '';
  }
}
