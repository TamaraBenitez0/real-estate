import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../interface/producto.interface';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-producto-id',
  templateUrl: './producto-id.component.html',
  styleUrl: './producto-id.component.css'
})
export class ProductoIdComponent implements OnInit {

  private activatedRoute = inject(ActivatedRoute)
  private router = inject(Router)

  productoCodigo: string ='';
  producto!:Producto;
  private productService = inject(ProductosService)

  mapEstadoProducto : any = {
    0:'Disponible',
    1:'Reservado',
    2:'Vendido'
  }

  tieneStock():string{
    return 'red';
  }

  sePuedeEliminar():boolean {
    return this.producto.estadoProducto == 0;
  }

  irAUpdateProducto():any {
 
    this.router.navigate(['productos/editProducto', this.producto.codigo])
    
  }

  eliminarProducto(codigo:string):void {
    this.productService.deleteProduct(codigo).subscribe({
      next:res => {
        console.log(res)
        this.router.navigateByUrl('/productos')
      },
      error: err => {
        console.log(err)
      }
    })
    

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe(params => {
        this.productoCodigo = params.get('id')!
        
        this.productService.getProducto(this.productoCodigo).subscribe({
          next:res =>{
            this.producto = res
           
          },
          error: err => {
            console.log(err)
          }
        })
      })

      


  }

}
