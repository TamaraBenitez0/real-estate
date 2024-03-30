import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BarrioService {

  private http = inject(HttpClient)
  private readonly url = environment.apiUrl
  private authService = inject(AuthService)


  constructor() { }

  getBarrios():Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`
    });

    return this.http.get<any>(`${this.url}/Barrio`,{headers})
  }

}
