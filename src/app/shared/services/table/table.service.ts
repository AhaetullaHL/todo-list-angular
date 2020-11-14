import { Injectable } from '@angular/core';
import { GroupService } from '../group/group.service';
import { RequestService } from '../request/request.service';
import { Table } from '../../models/table/table';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TableService {


  constructor(private groupService: GroupService, private requestService: RequestService, private router: Router) { }

  getAll(callback: (tables: Table[]) => void): void{
    this.requestService.get<Table[]>('tables', {}, true, data => {
      callback(data);
    });
  }

  add(label: string, callback: (tables: Table[]) => void): void{
    this.requestService.post<Table>('tables', {}, {label}, true, data => {
      callback(data);
    });
  }

  getContent(id: number, callback: (tables: Table[]) => void): void{
    this.requestService.get<Table[]>(`tables/getContent/${id}`, {}, true, data => {
      callback(data);
    });
  }

  get(id: number, callback: (tables: Table) => void): void{
    this.requestService.get<Table>(`tables/${id}`, {}, true, data => {
      callback(data);
    });
  }

  edit(id: number, label: string, callback: (tables: Table) => void): void{
    this.requestService.put(`tables/${id}`, {}, {label}, true, data => {
      callback(data);
    });
  }

  delete(id: number, callback: (tables: Table) => void): void{
    this.requestService.delete(`tables/${id}`, {}, true, data => {
      data;
    });
  }
}
