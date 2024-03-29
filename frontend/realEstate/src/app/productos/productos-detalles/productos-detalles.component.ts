import { Component, Input, inject } from '@angular/core';
import { Producto } from '../interface/producto.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos-detalles',
  templateUrl: './productos-detalles.component.html',
  styleUrl: './productos-detalles.component.css'
})
export class ProductosDetallesComponent {
  @Input() producto!: Producto;
  private router = inject(Router);

  mapEstadoProducto : any = {
    0:'Disponible',
    1:'Reservado',
    2:'Vendido'
  }

title: string = 'seccion productos detalle'

tieneStock():string{
  return 'red';
}

irADetalle():any {
 
  this.router.navigate(['productos/detalle', this.producto.codigo])
  
}

}
