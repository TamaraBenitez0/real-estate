import { Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../interface/producto.interface';
import { ProductosService } from '../productos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoEdit } from '../interface/productoEdit.interface';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrl: './actualizar-producto.component.css'
})
export class ActualizarProductoComponent {

  private activatedRoute = inject(ActivatedRoute)
  private router = inject(Router)
  private fb = inject(FormBuilder)


  updateForm!: FormGroup

  productoCodigo: string ='';
  producto!:Producto;
  private productService = inject(ProductosService)

prueba(){
  console.log(this.isCompleteFullField())
}

tooltipCondition(){
  const {nombre,idBarrio,precio} = this.updateForm.value

  return nombre!= '' && idBarrio!= '' && precio!= ''

}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe(params => {
        this.productoCodigo = params.get('id')!
        
        this.productService.getProducto(this.productoCodigo).subscribe({
          next:res =>{
            this.producto = res
            console.log(res)
           
          },
          error: err => {
            console.log(err)
          }
        })
      })

      this.updateForm = this.fb.group({
        nombre: ['', [Validators.required]],
        idBarrio:['',[Validators.required]],
        precio: ['', [Validators.required],],
        descripcion: [''],
        urlImagen: [''],

      })
     }

     

     isCompleteFullField() {

     const {nombre,idBarrio,precio} = this.updateForm.value

      return nombre!= '' && idBarrio!= '' && precio!= '' && this.isNumeric(precio)

     }

     isNumeric(value: any): boolean {
      return !isNaN(value - parseFloat(value));
  }
   

    
     updateProducto(){
      console.log(this.updateForm.value)
      const updateProduct = this.updateForm.value as ProductoEdit

      this.productService.updateProduct(this.productoCodigo,updateProduct)
      .subscribe({
        next:res => {
          console.log('funciono actualizar')
          this.router.navigateByUrl('/productos')
        },
        error: err => {
          console.log('error al actualizar el producto')
        }
      })

     }
}
