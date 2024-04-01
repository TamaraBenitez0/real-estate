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


  title: string = 'Productos';

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
   
  }


  addProduct():void{
   
    this.router.navigateByUrl('productos/addProducto')
   
  }

}
