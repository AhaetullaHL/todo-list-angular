import { Component, OnInit } from '@angular/core';
import {TableService} from "../../shared/services/table/table.service";
import {AuthService} from "../../shared/services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
    authService.verify(success => {
      if (!success){
        this.router.navigateByUrl('/login');
      }
    });
  }
  ngOnInit(): void {
  }

}
