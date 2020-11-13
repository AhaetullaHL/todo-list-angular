import { Injectable } from '@angular/core';
import { Table } from "../../models/table/table";
import { GroupService } from "../group/group.service";

@Injectable({
  providedIn: 'root'
})
export class TableService {

  tables: Table[] = [
    new Table({
      id: 1,
      label: 'table 1',
      groups: [
        this.groupService.getGroup(0),
        this.groupService.getGroup(1),
        this.groupService.getGroup(2),
      ],
    }),
    new Table({
      id: 2,
      label: 'table 2',
      groups: [
        this.groupService.getGroup(1),
      ],
    }),

  ];

  constructor(private groupService: GroupService) { }

  // get tables
  getTables(){
    return this.tables;
  }

  //get table
  getTable(i){
    return this.tables[i];
  }

  //add table
  addTable(table){
    this.tables.push(table);
  }

  //delete table
  deleteTable(i){
    this.tables.splice(i,1);
  }

  //edit table
  editTable(value, i){
    this.tables[i] = value;
  }
}
