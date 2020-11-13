import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from '../../../shared/services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {

  form: FormGroup;
  name: string;
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
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.error = 'notFilled';
  }

  register(): void {
    const val = this.form.value;

    if (val.email && val.password) {
      this.authService.register(val.name, val.email, val.password, (success) => {
        if (success){
          this.router.navigateByUrl('/');
        } else {
          this.error = 'error';
        }
      });
    } else {
      this.error = 'notFilled';
    }
  }
}
