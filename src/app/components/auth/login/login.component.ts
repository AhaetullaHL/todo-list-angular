import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup;
  email: string;
  password: string;
  error: string;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    authService.verify(success => {
      if (success){
        this.router.navigateByUrl('/');
      }
    });
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.error = 'notFilled';
  }

  login(): void {
    const val = this.form.value;

    if (val.email && val.password) {
      this.authService.login(val.email, val.password, (success) => {
        if (success){
          this.router.navigateByUrl('/');
        } else {
          this.error = 'invalidCredentials';
        }
      });
    } else {
      this.error = 'notFilled';
    }
  }

}
