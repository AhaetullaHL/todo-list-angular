import { Component, OnInit } from '@angular/core';
import { TableService } from "../../shared/services/table.service";
import {Table} from "../../shared/models/table/table";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tables: Table[] = this.tableService.getTables();

  constructor(private tableService: TableService) { }

  ngOnInit(): void {
  }

  deleteTable(i){
    this.tableService.deleteTable(i);
  }

  addTable(table?){
    this.tableService.addTable(table);
  }

}
