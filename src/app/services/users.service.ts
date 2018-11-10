import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LoginResponse } from '../objects/loginResponse';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class UsersService {
  constructor(private http : HttpClient) { }
  getUserList() {
    return this.http.get(environment.apiUrl + '/user/donors');
  }
}
