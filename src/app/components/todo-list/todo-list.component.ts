import { Component, OnInit } from '@angular/core';
import {TableService} from '../../shared/services/table/table.service';
import {AuthService} from '../../shared/services/auth/auth.service';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from 'rxjs';
import {Table} from '../../shared/models/table/table';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  private tableId: number;
  private table: Table;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute, private tableService: TableService) {
    authService.verify(success => {
      if (!success){
        this.router.navigateByUrl('/login');
      }
    });
    this.route.params.subscribe(params => {
      this.tableId = parseInt(params['id']);
    });
  }
  ngOnInit(): void {
    // @ts-ignore
    console.log(this.tableId)
    this.tableService.getContent(this.tableId, table => {
      this.table = table.find(table => table.id === this.tableId)
    });
  }

  test(){
    console.log(this.table)
    console.log(this.table.groups)
  }

}
