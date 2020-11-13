import { Injectable } from '@angular/core';
import {environment as env} from '../../../../environments/environment';
import {RequestService} from '../request/request.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string;

  constructor( private requestService: RequestService) {
    this.apiUrl = env.api_url;
  }

  login(email: string, password: string, callback?: (logged: boolean) => void): void{
    this.requestService.post('login', {}, {email, password}, false, (data) => {
      if (data && 'token' in data){
        localStorage.setItem('token', data.token);
        callback(true);
      }else{
        callback(false);
      }
    });
  }

  register(name: string, email: string, password: string, callback?: (logged: boolean) => void): void{
    this.requestService.post('register', {}, {name, email, password}, false, (data) => {
      if ('token' in data){
        localStorage.setItem('token', data.token);
        callback(true);
      }else{
        callback(false);
      }
    });
  }

  logout( callback?: (success: boolean) => void ): void{
    if (!localStorage.getItem('token')){
      callback(true);
      return;
    }
    this.requestService.post('logout', {}, {token: localStorage.getItem('token')}, false, (data) => {
      localStorage.removeItem('token');
      callback(true);
    });
  }

  verify( callback?: (valid: boolean) => void ): void{
    if (!localStorage.getItem('token')){
      callback(false);
      return;
    }
    this.requestService.get('verify', {}, true, (data) => {
      if (data && 'message' in data && data.message === 'valid'){
        callback(true);
      }else{
        callback(false);
      }
    });
  }
}
