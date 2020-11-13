import { Component } from '@angular/core';
import {AuthService} from './shared/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authService: AuthService) {
    // authService.register('test2', 'test2@test.com', 'password', data => console.log(data));
    // authService.login('test2@test.com', 'password', data => console.log(data));
    // authService.verify(data => console.log(data));
    // authService.logout(data => console.log(data));
  }
  title = 'todo-list-angular-firebase';
}
