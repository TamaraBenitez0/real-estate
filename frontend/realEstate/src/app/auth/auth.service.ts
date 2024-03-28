import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/enviroment';
import { UserRegister } from './interface/user-register.interface';
import { UserLogin } from './interface/user-login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient)

  private readonly url = environment.apiUrl
  //constructor(private http:HttpClient) { }

  register(newUser:UserRegister):Observable<any> {
    return this.http.post<any>(`${this.url}/Account/Register`,newUser)
  }

  login(user:UserLogin):Observable<any> {
    return this.http.post<any>(`${this.url}/Account/Login`,user)
  }
}
