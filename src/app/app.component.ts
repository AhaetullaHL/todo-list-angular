import { Component } from '@angular/core';
import {AuthService} from './shared/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authService: AuthService) {
    authService.login('test@test.com', 'password').subscribe(data => {
      console.log(data);
    });
  }
  title = 'todo-list-angular-firebase';
}
