import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { addReserva } from './interface/addReserva.interface';

@Injectable({
  providedIn: 'root'
})
export class ReservasVendedorService {

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

  updateReservaCancel(idReserva:number):Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`
    });

    

    return this.http.put<any>(`${this.url}/Reserva/${idReserva}/cancel`,{},{headers})
  }

  createReserva(newReserva:addReserva):Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`
    });
    return this.http.post<any>(`${this.url}/Reserva/createReserva`,newReserva,{headers})
  }

  reservasIngresadasUser(username:string):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`
    });

    return this.http.get<any>(`${this.url}/Account/User/${username}/reservasIngresadas`)

  }

}
