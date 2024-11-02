import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly SIGNUP_URL = 'localhost:8080/signup';

  private readonly LOGIN_URL = 'localhost:8080/signup';

  constructor(private http: HttpClient) { }

  signup(body: any): Observable<any> {
    return this.http.post(`${this.SIGNUP_URL}`, body);
  }

  login(body: any): Observable<any> {
    return this.http.post(`${this.LOGIN_URL}`, body);
  }

}
