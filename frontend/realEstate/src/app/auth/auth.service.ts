import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/enviroment';
import { UserRegister } from './interface/user-register.interface';
import { UserLogin } from './interface/user-login.interface';
import * as jwt from 'jwt-decode';
import { User } from './interface/user.interface';
import { AuthStatus } from './interface/auth-status.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient)

  private readonly url = environment.apiUrl

  private _currentUser = signal<User | undefined>(undefined)
  public currentUser = computed(() => this._currentUser())
  private _authStatus = signal<AuthStatus>(AuthStatus.checking)
  public authStatus = computed(() => this._authStatus())

  //constructor(private http:HttpClient) { }

  register(newUser:UserRegister):Observable<any> {
    return this.http.post<any>(`${this.url}/Account/Register`,newUser)
  }

  login(user:UserLogin):Observable<any> {
    return this.http.post<any>(`${this.url}/Account/Login`,user)
    .pipe(
      map(({accessToken})=>{
        this.setAuthentication(accessToken)
        return accessToken
      
      })
    )
  }

  usersReservations():Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`
    });
    return this.http.get<any>(`${this.url}/Account/Users/Approved/Reservations`,{headers})
  }

  setAuthentication(token:string | null){

      if(token) {
        localStorage.setItem('accessToken',token)
       

        const userResponse = jwt.jwtDecode(token) as User
     
        localStorage.setItem('username',userResponse.name)
        
      this._authStatus.set(AuthStatus.authenticated)

        this._currentUser.set({
          name: userResponse.name,
          role: userResponse.role,
          exp: userResponse.exp
        })
      
        console.log('token deserializado',userResponse)
        
      }
  }

  checkStatus() {
    const token = localStorage.getItem('accessToken');
    console.log('checkStatus', token);

    this.setAuthentication(token)
  }

  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('username')
    this._authStatus.set(AuthStatus.noAuthenticated)
    
  }

  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }
}
