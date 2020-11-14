import { Injectable } from '@angular/core';
import { Group } from "../../models/group/group";
import { HttpClient } from "@angular/common/http";
import {RequestService} from "../request/request.service";

@Injectable({
  providedIn: 'root'
})
export class GroupService {


  constructor(private http: HttpClient, private requestService: RequestService) { }

  getAll(callback: (groups: Group[]) => void): void{
    this.requestService.get<Group[]>('groups', {}, true, data => {
      callback(data);
    });
  }

  add(label: string, callback: (groups: Group[]) => void): void{
    this.requestService.post<Group>('groups', {}, {label}, true, data => {
      callback(data);
    });
  }

  get(id: number, callback: (groups: Group) => void): void{
    this.requestService.get<Group>(`groups/${id}`, {}, true, data => {
      callback(data);
    });
  }

  edit(id: number, label: string, callback: (groups: Group) => void): void{
    this.requestService.put(`groups/${id}`, {}, {label}, true, data => {
      callback(data);
    });
  }

  delete(id: number, callback: (groups: Group) => void): void{
    this.requestService.delete(`groups/${id}`, {}, true, data => {
      data;
    });
  }
}
