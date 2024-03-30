import { Component, OnInit, effect, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoEdit } from '../interface/productoEdit.interface';
import { ProductosService } from '../productos.service';
import { BarrioService } from '../../barrio/barrio.service';
import { Barrio } from '../../barrio/interface/barrio.interface';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css'
})
export class AgregarProductoComponent implements OnInit {

  private fb = inject(FormBuilder)
  private router = inject(Router);
  private productoService = inject(ProductosService)
  private barrioService = inject(BarrioService)


 addProductForm!: FormGroup
 barrios:Barrio[] = [];



  ngOnInit(): void {

    this.barrioService.getBarrios().subscribe({
      next:res => {
        this.barrios = res,
        console.log(res)
      },
      error:err => {
        console.log(err)
      }
    })



    this.addProductForm = this.fb.group({
      nombre: ['', [Validators.required]],
      idBarrio: ['', [Validators.required]],
      precio: ['', [Validators.required,Validators.minLength(1)]],
      descripcion: [''],
      urlImagen: ['']
    })
  }

  isCompleteFullField() {

    const {nombre,idBarrio,precio} = this.addProductForm.value

     return nombre!= '' && idBarrio!= '' && precio!= '' && this.isNumeric(precio)
     console.log(precio)

    }


    isNumeric(value: any): boolean {
      return !isNaN(value - parseFloat(value));
  }

  agregarProducto(){
    console.log(this.addProductForm.value)
    const newProduct = this.addProductForm.value as ProductoEdit

      this.productoService.addProduct(newProduct)
      .subscribe({
        next:res => {
        
          this.router.navigateByUrl('/productos')
        },
        error: error => {
          console.log('error al crear el producto')
        }
      })
  }

}
