import { Injectable } from '@angular/core';
import { TodoService } from "../todo/todo.service";
import { Group } from "../../models/group/group";
import { environment as env } from "../../../../environments/environment";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GroupService {


  constructor(private todoService: TodoService, private http: HttpClient) { }

}
