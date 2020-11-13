import { Component, OnInit } from '@angular/core';
import { TableService } from '../../shared/services/table/table.service';
import { Table } from '../../shared/models/table/table';
import { AuthService } from '../../shared/services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tables: Table[];

  constructor(private tableService: TableService, private authService: AuthService, private router: Router) {
    authService.verify(success => {
      if (!success){
        this.router.navigateByUrl('/login');
      }
    });
    tableService.getContent(1,  tables => {
      console.log(tables);
    });
  }

  ngOnInit(): void {
  }


}
