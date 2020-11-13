import { Injectable } from '@angular/core';
import { Table } from "../../models/table/table";
import { GroupService } from "../group/group.service";
import { environment as env } from "../../../../environments/environment";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

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

  constructor(private groupService: GroupService, private http: HttpClient) { }

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
