import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/enviroment';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { ProductoEdit } from './interface/productoEdit.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private http = inject(HttpClient)
  private readonly url = environment.apiUrl
  private authService = inject(AuthService)

  constructor() { }

  getProducts(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`
    });

    // const headers = {
    //   Authorization: `Bearer ${this.authService.getToken()}`,
    // };

    return this.http.get<any>(`${this.url}/Producto/getProducts`, { headers });
  }

  getProducto(codigo:string):Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`
    });
    return this.http.get<any>(`${this.url}/Producto/${codigo}`,{headers})
  }

  deleteProduct(codigo:string):Observable<any> { 
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`
    });
    
    return this.http.delete<any>(`${this.url}/Producto/${codigo}`,{headers})
  }

  addProduct(newProduct:ProductoEdit):Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`
    });
    return this.http.post<any>(`${this.url}/Producto`,newProduct,{headers})
  }

  updateProduct(codigo:string,updateProduct:ProductoEdit):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`
    });
    return this.http.put<any>(`${this.url}/Producto/${codigo}`,updateProduct,{headers})
  }

}
