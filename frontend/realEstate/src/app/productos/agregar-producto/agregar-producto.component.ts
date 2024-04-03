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
 isLoading:boolean = false
 showError:boolean = false
 


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
    this.isLoading = true;
    const newProduct = this.addProductForm.value as ProductoEdit

      this.productoService.addProduct(newProduct)
      .subscribe({
        next:res => {
          this.isLoading = false;
          this.showError = false
          this.router.navigateByUrl('/productos')
        },
        error: error => {
          this.showError = true;
          this.isLoading = false
          
        },
        complete: () =>{
          this.isLoading = false;
          this.showError = false
        }
      })
  }

}
