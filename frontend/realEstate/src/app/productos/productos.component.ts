import { Component, OnInit, inject } from '@angular/core';
import { Producto } from './interface/producto.interface';
import { ProductosService } from './productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {


  title: string = 'Seccion Productos';

  private productService = inject(ProductosService)
  private router = inject(Router)
  productos: Producto[] = [];

  

  ngOnInit(): void {
   

    this.productService.getProducts().subscribe({
      next:res => {
        this.productos = res
        console.log(res)
      },
      error: err =>{
          console.log(err)
      }
    })
    /* this.productos = [
      {
        codigo: 'ABC123',
        nombre: 'Jabon',
        precio: undefined,
        stock: 20
      },
      {
        codigo: 'ABD123',
        nombre: 'Perfume',
        precio: 1200,
        stock: undefined
      },
      {
        codigo: 'ABG123',
        nombre: 'Desodorante',
        precio: 1200,
        stock: 20
      }

    ] */
  }

  sinStock(): string {
    return 'green'
  }

  addProduct():void{
   
    this.router.navigateByUrl('productos/addProducto')
   
  }

}
