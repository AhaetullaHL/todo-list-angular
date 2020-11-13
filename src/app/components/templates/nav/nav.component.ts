import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void{
    this.authService.logout(success => {
      this.router.navigateByUrl('/login');
    });
  }

}
