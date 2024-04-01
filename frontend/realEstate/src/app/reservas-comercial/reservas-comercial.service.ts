import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservasComercialService {

  private http = inject(HttpClient)
  private readonly url = environment.apiUrl
  private authService = inject(AuthService)

  constructor() { }

  getReservas ():Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`
    });
    return this.http.get<any>(`${this.url}/Reserva/getReservas`,{headers})
  }

  getReserva(idReserva: number):Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`
    });

    return this.http.get<any>(`${this.url}/Reserva/${idReserva}`,{headers})
  }

  updateReservaApprove(idReserva:number):Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`
    });

    return this.http.put<any>(`${this.url}/Reserva/${idReserva}/approve`,{},{headers})
  }

  updateReservaDecline(idReserva:number):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`
    });
    return this.http.put<any>(`${this.url}/Reserva/${idReserva}/decline`,{},{headers})
  }


}
